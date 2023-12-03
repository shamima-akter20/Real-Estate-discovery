import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Authentication/AuthProvider";
import LoadingSpiner from "../../components/LoadingSpiner";
import useOffersQuery from "../../hooks/offers/useOffersQuery";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Brought = () => {
  const { user } = useContext(AuthContext);
  const {
    data = [],
    isPending,
    refetch,
  } = useOffersQuery({ key: "buyerEmail", value: user?.email });

  const axiosSecure = useAxiosSecure()

  if (isPending) return <LoadingSpiner />;

  console.log(data);

  const handleRemove = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/offers/${id}`)
        .then(res=>{
          console.log(res.data);
          if(res.data.deletedCount){
            refetch()
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
          }
        })
      
      }
    });
  };

  return (
    <div className="py-8 px-4 md:px-8">
      <Helmet>
        <title>Property Brought - Elite Estate Discoveries</title>
      </Helmet>

      <div className="border-5  border-l-8 border-teal-600 px-6">
        <h1 className="text-xl md:text-4xl font-display text-teal-600">
          Property Brought
        </h1>
      </div>

      <div className="flex flex-col py-8 ">
        {data.map((bought) => (
          <div key={bought?._id} className=" flex xl:gap-12 rounded-xl mb-8 text-gray-700 shadow-md xl:w-[900px]  flex-col md:flex-row">
            <div className="md:w-3/4 xl:w-2/5">
              <img
                src={bought?.propertyDetails?.image}
                className="bg-cover w-full h-full"
              />
            </div>

            <div className="p-6">
              <h6 className="mb-2 font-bold  text-xl xl:text-2xl antialiased leading-relaxed tracking-normal text-gray-700 ">
              {bought?.propertyDetails?.propertyTitle}
              </h6>

              <p className=" font-sans text-xs md:text-base antialiased  text-gray-500">
                <i className="fa-solid fa-dollar-sign mr-2"></i> Offerd Amount : {bought.offeredAmound}
              </p>

              <p className=" font-sans text-xs md:text-base antialiased  text-gray-500">
                <i className="fa-solid fa-location-dot mr-2"></i> Location : {bought?.propertyDetails?.location}
              </p>

              <p className="block mb-2 font-sans text-xs md:text-base antialiased  leading-relaxed text-gray-500">
              {bought?.propertyDetails?.propertyDescription}
              </p>

              <p className=" font-sans text-xs md:text-sm antialiased  text-gray-500">
                Status : {bought.status}
              </p>

              <div className="flex items-center gap-2 mb-2 mt-2 bg-slate-100 w-36 p-2 rounded-2xl ">
                <img
                  className="h-6 w-6 rounded-full"
                  src={bought?.buyerImage  || ''}
                  alt=""
                />
                <h1 className="text-xs font-display">{bought.buyerName}</h1><br />
              </div> 

              {
                bought?.status == 'accepted' && <Link to={`/dashboard/paymentPage/${bought?.propertyDetails?._id}`}>
                <button className="btn btn-sm btn-outline btn-accent">
                  Pay Now 
                </button>
              </Link>

              }
              {/* <Link to="" className="px-4">
                <button
                  onClick={() => handleRemove(bought?._id)}
                  className="btn btn-sm btn-outline btn-accent"
                >
                  Remove
                </button>
              </Link> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brought;
