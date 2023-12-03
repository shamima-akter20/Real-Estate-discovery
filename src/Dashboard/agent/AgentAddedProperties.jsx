import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Authentication/AuthProvider";
import LoadingSpiner from "../../components/LoadingSpiner";
import useGetProperties from "../../hooks/properties/useGetProperties";

const AgentAddedProperties = () => {
  const { user } = useContext(AuthContext);
  const { data, isPending, refetch } = useGetProperties({
    key: "agentEmail",
    value: user?.email,
  });

  if (isPending) return <LoadingSpiner />;

  console.log(data);

  return (
    <div className="py-8 px-4 md:px-8">
      <Helmet>
        <title>AgentAddedProperties - Elite Estate Discoveries</title>
      </Helmet>

      <div className="border-5  border-l-8 border-teal-600 px-6">
        <h1 className="text-xl md:text-4xl font-display text-teal-600">
          Agent Added Properties
        </h1>
      </div>

      <div className="flex flex-col py-8 ">
        {data?.map(property=> (
          <div key={property?._id} className=" flex xl:gap-12 rounded-xl mb-8 text-gray-700 shadow-md xl:w-[900px]  flex-col md:flex-row">
          <div className="md:w-3/4 xl:w-2/5">
            <img
              src={property.image}
              className="bg-cover w-full h-full"
            />
          </div>

          <div className="p-6">
            <h6 className="mb-2 font-bold  text-xl xl:text-2xl antialiased leading-relaxed tracking-normal text-gray-700 ">
             {property.propertyTitle}
            </h6>

            <p className=" font-sans text-xs md:text-base antialiased  text-gray-500">
              <i className="fa-solid fa-dollar-sign mr-2"></i> Price Range : {property.price}
            </p>

            <p className=" font-sans text-xs md:text-base antialiased  text-gray-500">
              <i className="fa-solid fa-location-dot mr-2"></i> Location :{}
            </p>

            <p className="block mb-2 font-sans text-xs md:text-base antialiased  leading-relaxed text-gray-500">
             {property.propertyDetails}
            </p>

            <p className=" font-sans text-xs md:text-sm antialiased  text-gray-500">
              Verification Status :  {property.verification_status}
            </p>

            <div className="flex items-center gap-2 mb-2 mt-2 bg-slate-100 w-36 p-2 rounded-2xl ">
              <img
                className="h-6 w-6 rounded-full"
                src={property.agentImage}
                alt=""
              />
              <h1 className="text-xs font-display">{property.agentName}</h1>
            </div>

            <Link to={`/dashboard/update/${property?._id}`}>
              <button className="btn btn-sm btn-outline btn-accent">
                Update
              </button>
            </Link>

            <Link to="" className="px-4">
              <button className="btn btn-sm btn-outline btn-accent">
                Delete
              </button>
            </Link>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default AgentAddedProperties;
