import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Authentication/AuthProvider";
import LoadingSpiner from "../../components/LoadingSpiner";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AgentSoldProperties = () => {
  const {user} = useContext(AuthContext)

  const axiosSecure = useAxiosSecure()

  const {data, isPending} = useQuery({
    queryKey: ["getBoughtProperty"],
    queryFn: async()=>{
      if(user){

        const res = await axiosSecure.get(`/boughtProperties/${user?.email}`)
        return res.data;
      }
    }
  })
  if(isPending) return <LoadingSpiner/>
  console.log(data);
  return (
    <div className="py-10 pl-3 md:pl-9">
      <Helmet>
        <title>Agent Sold Properties - Elite Estate Discoveries</title>
      </Helmet>

      <div className="border-5  border-l-8 border-teal-600 px-6">
        <h1 className="text-xl md:text-4xl font-display text-teal-600">
            Agent Sold Properties
        </h1>
      </div>

      {
        data?.map(sold=> (
          <div key={sold?._id} className="flex pt-12 xl:gap-12 rounded-xl mb-8 text-gray-700 shadow-md xl:w-[900px]  flex-col md:flex-row">
        <div className="md:w-3/4 xl:w-2/5">
          <img
            src={sold?.propertyImage || ''}
            className="bg-cover w-full h-full"
          />
        </div>

        <div className="p-6">
          <h6 className="mb-2 font-bold  text-xl xl:text-2xl antialiased leading-relaxed tracking-normal text-gray-700 ">
            {sold?.propertyTitle}
          </h6>

          <p className=" font-sans text-xs md:text-base font-bold antialiased  text-gray-500">
            Buyer Name: {sold?.buyerName}
          </p>

          <p className=" font-sans text-xs md:text-base font-bold  antialiased  text-gray-500">
           Buyer Email : {sold?.buyerEmail}
          </p>

          <p className=" font-sans text-xs md:text-base antialiased  text-gray-500">
            <i className="fa-solid fa-dollar-sign mr-2"></i> Sold Price : {sold?.offeredAmound}
          </p>

          <p className=" font-sans text-xs md:text-base antialiased  text-gray-500">
            <i className="fa-solid fa-location-dot mr-2"></i> Location : {sold?.location || ''}
          </p>
          
        </div>
      </div>
        ))
      }
    </div>
  );
};

export default AgentSoldProperties;
