import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import { useParams } from "react-router-dom";
import LoadingSpiner from "../../components/LoadingSpiner";
import useOfferById from "../../hooks/offers/useOfferById";
import Checkout from "./Checkout";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

export default function Payment() {
  const params = useParams()
  const {data, isPending} = useOfferById(params?.id)
  if(isPending) return <LoadingSpiner/>
  // console.log(data);
  return (
    <div className="flex justify-center min-h-[70svh] items-center">
      <div className="w-[20rem]">
        <h2 className="text-2xl font-bold my-8">Total Price: ${data?.offeredAmound} </h2>
        <Elements stripe={stripePromise}>
          <Checkout/>
        </Elements>
      </div>
    </div>
  );
}
