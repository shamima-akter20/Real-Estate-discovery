import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../Authentication/AuthProvider';
import LoadingSpiner from '../../components/LoadingSpiner';
import axiosPublic from '../../config/axios.config';
import useOfferById from '../../hooks/offers/useOfferById';

// import '../styles/common.css';

export default function Checkout() {
    const stripe = useStripe()
    const stripeElement = useElements()

    const {user} = useContext(AuthContext)

    const params = useParams()
  const {data, isPending, status} = useOfferById(params?.id)
  
  const [error, setError] = useState('')
  
    const [clientSecret, setClientSecret] = useState('')

    console.log(data?.offeredAmound);

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
        }
    }

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
      <button disabled={!stripe || !stripeElement || !clientSecret} className='btn btn-accent btn-sm mt-6' type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  )
}
