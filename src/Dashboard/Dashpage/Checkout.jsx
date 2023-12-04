import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Authentication/AuthProvider';
import LoadingSpiner from '../../components/LoadingSpiner';
import axiosPublic from '../../config/axios.config';
import useOfferById from '../../hooks/offers/useOfferById';
import useAxiosSecure from '../../hooks/useAxiosSecure';

// import '../styles/common.css';

export default function Checkout() {
    const stripe = useStripe()
    const stripeElement = useElements()

    const {user} = useContext(AuthContext)

    const params = useParams()

  const {data, isPending, status, refetch} = useOfferById(params?.id)
  const axiosSecure =useAxiosSecure()
  
  const [error, setError] = useState('')
  
    const [clientSecret, setClientSecret] = useState('')

    console.log(data?.offeredAmound);
// if(isPending) return <LoadingSpiner/>
    useEffect(()=>{
        if(status === 'success'){
            axiosPublic.post('/create-payment-intent', {price: data?.offeredAmound})
            .then(res=> {
                setClientSecret(res.data.clientSecret)
                console.log(res.data);
            })
        }
    },[status, data])
    
    if(isPending) return <LoadingSpiner/>

    const handleSubmit = async e => {
        e.preventDefault()
        
        if(!stripe || !stripeElement) return;

        const card = stripeElement.getElement(CardElement)

        if(card === null){
            return;
        }
        
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if(error){
            console.log('error', error);
            setError(error.message)
        }else{
            console.log('paymentMethod', paymentMethod);
        }

        // confirm payment
        const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email,
                    name: user?.displayName,
                }
            }
        })
        if(confirmError){
            console.log('confirm error', confirmError);
            setError(confirmError.message)
        }
        else{
            console.log(paymentIntent);
            if (paymentIntent.status === 'succeeded') {
              console.log('transaction id', paymentIntent.id);
              // setTransactionId(paymentIntent.id);

              // now save the payment in the database
              const payment = {
                  email: user.email,
                  price: data?.offeredAmound,
                  transactionId: paymentIntent.id,
                  date: new Date(), // utc date convert. use moment js to 
                  offerId: data?._id,
                  propertyId: data?.propertyDetails?._id,
              }

              const res = await axiosSecure.post('/payments', payment);
              console.log('payment saved', res.data);
              refetch();
              if (res.data?.insertedId) {
                  Swal.fire({
                  
                      icon: "success",
                      title: "Thank you for your payment",
                      showConfirmButton: false,
                      timer: 1500
                  });
                  // navigate('/dashboard/paymentHistory')
              }

          }
        }
    }
console.log(clientSecret);
  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />

      {<p className='text-red-500 mt-5 font-medium'>{error}</p>}
      <button className='btn btn-accent btn-sm mt-6' type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  )
}
