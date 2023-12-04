import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import LoadingSpiner from "../../components/LoadingSpiner";
import useOffersQuery from "../../hooks/offers/useOffersQuery";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const RequestedProperties = () => {
  const {
    data = [],
    isPending,
    refetch,
  } = useOffersQuery({ key: "status", value: "pending" });

  const axiosSecure = useAxiosSecure();
  if (isPending) return <LoadingSpiner />;

  console.log(data);

  const handleAccept = (id) => {
    axiosSecure.patch(`/offers/${id}`, { status: "accepted" }).then((res) => {
    
        if (res.data.modifiedCount) {
          refetch();
          Swal.fire("Accepted request.");
        }
   
    });
  };

  const handleReject = (id) => {
    axiosSecure.patch(`/offers/${id}`, { status: "recected" })
    .then((res) => {
      if(res.data.modifiedCount){
        refetch();
        Swal.fire("Rejected request.");
      }
    })
  };

  return (
    <div className="pt-10 px-4 md:px-8">
      <Helmet>
        <title>Requested Properties - Elite Estate Discoveries</title>
      </Helmet>

      <div className="border-5 border-l-8 border-teal-600 px-6">
        <h1 className="text-2xl md:text-4xl font-display text-teal-600">
          Requested Properties
        </h1>
      </div>

      {data?.map((requested) => (
        <div
          key={requested?._id}
          className="flex pt-6 xl:gap-12 rounded-xl mb-8 text-gray-700 shadow-md xl:w-[900px]  flex-col md:flex-row"
        >
          <div className="px-6 py-4">
            <h6 className="mb-2 font-bold  text-xl xl:text-2xl antialiased leading-relaxed tracking-normal text-gray-700 ">
              {requested?.propertyTitle || ""}
            </h6>

            <p className=" font-sans text-xs md:text-base font-bold antialiased  text-gray-500">
              Buyer Name: {requested?.buyerName}
            </p>

            <p className=" font-sans text-xs md:text-base font-bold  antialiased  text-gray-500">
              Buyer Email : {requested?.buyerEmail}
            </p>

            <p className=" font-sans text-xs md:text-base antialiased  text-gray-500">
              <i className="fa-solid fa-dollar-sign mr-2"></i> Offered Price :{" "}
              {requested?.offeredAmound}
            </p>

            <p className=" font-sans text-xs md:text-base antialiased  text-gray-500">
              <i className="fa-solid fa-location-dot mr-2"></i> Location : {requested?.location || requested?.propertyDetails?.location}
            </p>

            <button
              onClick={() =>
                handleAccept(requested?._id, requested?.propertyId)
              }
              className="btn btn-sm btn-outline btn-accent"
            >
              Accept
            </button>

            <button
              onClick={() => handleReject(requested?._id)}
              className="btn btn-sm btn-outline btn-accent"
            >
              Reject
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RequestedProperties;
