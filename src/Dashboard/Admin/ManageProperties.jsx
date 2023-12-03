import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import LoadingSpiner from "../../components/LoadingSpiner";
import useGetProperties from "../../hooks/properties/useGetProperties";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const ManageProperties = () => {
  const { data, isPending, refetch } = useGetProperties();

  const axiosSecure = useAxiosSecure();

  if (isPending) return <LoadingSpiner />;
  console.log(data);

  const handleVerify = (id) => {
    axiosSecure
      .patch(`/properties/${id}`, { verification_status: "varified" })
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount) {
          refetch()
          Swal.fire("Varified property");
        }
      });
  };

  const handleReject = (id) => {
    axiosSecure
      .patch(`/properties/${id}`, { verification_status: "rejected" })
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount) {
          refetch()
          Swal.fire("Rejected property");
        }
      });
  };

  return (
    <div className="py-8 px-4 md:px-8">
      <Helmet>
        <title>Manage Properties - Elite Estate Discoveries</title>
      </Helmet>

      <div className="border-5  border-l-8 border-teal-600 px-1 md:px-6">
        <h1 className="text-xl md:text-4xl font-display text-teal-600">
          Manage Properties
        </h1>
      </div>

      {data?.map((property) => (
        <div key={property?._id} className="p-6">
          <h6 className="mb-2 font-bold  text-xl xl:text-2xl antialiased leading-relaxed tracking-normal text-gray-700 ">
            {property?.propertyTitle}
          </h6>

          <p className=" font-sans text-xs md:text-base antialiased  text-gray-500">
            <i className="fa-solid fa-dollar-sign mr-2"></i> Price Range : {property?.price}
          </p>

          <p className=" font-sans text-xs md:text-base antialiased  text-gray-500">
            <i className="fa-solid fa-location-dot mr-2"></i> Location : 
          </p>

          <p className="block mb-2 font-sans text-xs md:text-base antialiased  leading-relaxed text-gray-500">
            {property?.propertyDescription}
          </p>

          <p className=" font-sans text-xs md:text-sm antialiased  text-gray-500">
            Verification Status : {property?.verification_status}
          </p>

          <p className="py-1 font-sans text-xs md:text-sm antialiased  text-gray-500">
            Agent Name : {property?.agentName}
          </p>

          <p className="py-1 font-sans text-xs md:text-sm antialiased  text-gray-500">
            Agent Email : {property?.agentEmail}
          </p>

          {property?.verification_status !== "varified" && (
            <>
              <button
                onClick={() => handleVerify(property?._id)}
                className="btn btn-sm btn-outline btn-accent"
              >
                Verify
              </button>

              <button
                onClick={() => handleReject(property?._id)}
                className="btn btn-sm btn-outline btn-accent"
              >
                Reject
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default ManageProperties;
