import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import LoadingSpiner from "../../components/LoadingSpiner";
import useGetProperties from "../../hooks/properties/useGetProperties";

const AllProperties = () => {
  const { data: advertise = [], isPending } = useGetProperties();
  // achen naki ? accha loading spnieer banaisen ?hae koi ?

  if (isPending) return <LoadingSpiner />;

  console.log(advertise);

  return (
    <div>
      <Helmet>
        <title>All Properties - Elite Estate Discoveries</title>
      </Helmet>

      <div className="border-5 border-l-8 border-teal-600 px-6">
        <h1 className="text-2xl md:text-4xl font-display text-teal-600">
          All Properties
        </h1>
        <p className="text-xs md:text-base">
          Explore our comprehensive collection of properties, meticulously
          curated to cater to diverse preferences and lifestyles.
        </p>
      </div>

      <div className="flex justify-center">
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
          gap-6  xl:grid-cols-4 py-8"
        >
          {advertise.map((advertise) => (
            <div key={advertise?._id} className="relative flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
                <img
                  src={advertise?.image}
                  alt="ui/ux review check"
                />
              </div>
              <div className="px-6 pt-2">
                <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  Property Title : {advertise?.propertyTitle}
                </h4>
                <p className="block  font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">
                  <i className="fa-solid fa-dollar-sign"></i> Price : {advertise?.price}
                </p>
                <h1>
                  {" "}
                  <i className="fa-solid fa-location-dot"></i> Location :
                </h1>
                <h1>Varification Status:</h1>
              </div>
              <div className="flex items-center justify-between p-6">
                <div className="flex justify-center items-center gap-2 ">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://i.ibb.co/30ZghNN/kkk.jpg"
                    alt=""
                  />
                  <h1 className="font-bold font-display">Locky Jane</h1>
                </div>
              </div>
              <Link to={`/propertyDetail/${advertise._id}`}>
                <button className="btn btn-outline btn-accent btn-sm">
                  Details
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProperties;
