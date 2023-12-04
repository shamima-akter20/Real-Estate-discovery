import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Authentication/AuthProvider";
import LoadingSpiner from "../../components/LoadingSpiner";
import useGetAProperties from "../../hooks/properties/useGetAproperty";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MakeAnOffer = () => {
  const params = useParams();
  const axiosSecure = useAxiosSecure();

  const {user} = useContext(AuthContext)

  const {data, isPending, refetch} = useGetAProperties(params?.id)

  // console.log(params?.id);

  if(isPending)  return <LoadingSpiner/>

  console.log(data);

  const handleOffer = (e) => {
    e.preventDefault()
    const offeredAmound = e.target.offered_amount.value.trim(); 
    const buyingDate = e.target.buying_date.value;

    console.log(Number(data?.maxPrice));
    console.log('minimum price ', Number(offeredAmound) < Number(data?.minPrice));
    console.log('maximum price ', Number(offeredAmound) > Number(data?.maxPrice));

    if(Number(offeredAmound) < Number(data?.minPrice) || Number(offeredAmound) > Number(data?.maxPrice)){
      return Swal.fire({
        icon: 'error',
        title: 'Out of Range',
        text: "Your offered amount is out of range."
      })
    }

    //  ami kore dei eta? kora ses already..ok
    const offerInfo = {
      buyerName: user?.displayName,
      buyerEmail: user?.email,
      buyerImage: user?.photoURL,
      propertyTitle: data?.propertyTitle,
      propertyId: params.id,
      offeredAmound: parseFloat(offeredAmound),
      buyingDate,
      status: "pending",
    };

    axiosSecure.post("/offers", offerInfo).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        Swal.fire({
          title: "Your Offer Placed!",
          text: "Your Offer has ben supplied.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="py-10 pl-3 md:pl-9">
      <Helmet>
        <title>Make Offer - Elite Estate Discoveries</title>
      </Helmet>

      <div className="border-5  border-l-8 border-teal-600 px-6">
        <h1 className="text-xl md:text-4xl font-display text-teal-600">
          Make Offer
        </h1>
      </div>

      <div className="md:w-[500px] lg:w-[600px] xl:w-[900px] py-6">
        <form onSubmit={handleOffer} className=" md:mx-12 ">
          {/* -------------------------------- 1 ----------------------------- */}
          <div className="flex gap-6 flex-col md:flex-row ">
            {/* buyer name */}
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text"> Buyer Name</span>
              </label>
              <input
                type="text"
                name="buyer_name"
                defaultValue={user?.displayName}
                placeholder=" "
                className="input input-bordered input-accent w-full"
                required
                readOnly
              />
            </div>
            
            {/* buyer email */}
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Buyer Email</span>
              </label>
              <input
                type="email"
                name="buyer_email"
                defaultValue={user?.email}
                className="input input-bordered inp0ut-accent w-full"
                required
                readOnly
              />
            </div>

          </div>

          {/* -------------------------------- 2 ----------------------------- */}
          <div className="flex gap-6 flex-col md:flex-row ">
              {/* Agent name */}
              <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Agent Name</span>
              </label>
              <input
                type="text"
                name="agent_name"
                placeholder=""
                defaultValue={data?.agentName}
                className="input input-bordered input-accent w-full"
                required
                readOnly
                />
              
            </div>
            {/* Offered amount. */}
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Offered Amount</span>
              </label>
              <input
              type="number"
                name="offered_amount"
                className="input input-bordered input-accent w-full"
                id=""
              />
            </div>
          </div>

          {/* -------------------------------- 3 ----------------------------- */}
          <div className="flex gap-6 flex-col md:flex-row ">
            {/* location  */}
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Location </span>
              </label>
              <input
                type="text"
                name="location"
                placeholder=""
                defaultValue={data?.location}
                className="input input-bordered input-accent w-full"
                required
                readOnly
              />
            </div>

           
           {/* buying date */}
           <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Buying Date</span>
              </label>
              <input
                type="date"
                name="buying_date"
                placeholder="buying_date"
                className="input input-bordered input-accent w-full"
                required
              />
            </div>
          </div>

          <div className="form-control mt-6">
            <button
           type="submit"
              className="btn btn-outline btn-accent"
            >
              Offer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MakeAnOffer;
