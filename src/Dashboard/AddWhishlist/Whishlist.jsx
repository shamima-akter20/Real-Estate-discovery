import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Authentication/AuthProvider";
import LoadingSpiner from "../../components/LoadingSpiner";
import useWishListsQuery from "../../hooks/wishlists/useWishListsQuery";

const Whishlist = () => {
  const { user } = useContext(AuthContext);

  const { data = [], isPending, refetch } = useWishListsQuery({ key: "userName", value: user?.email });

  if(isPending) return <LoadingSpiner/>
  console.log(data);
  return (
    <div className="py-8 px-4 md:px-8">
      <Helmet>
        <title>My Whishlist - Elite Estate Discoveries</title>
      </Helmet>

      <div className="border-5  border-l-8 border-teal-600 px-6">
        <h1 className="text-xl md:text-4xl font-display text-teal-600">
          My Whishlist
        </h1>
      </div>

      <div className="flex flex-col py-8 ">
        <div className=" flex xl:gap-12 rounded-xl mb-8 text-gray-700 shadow-md xl:w-[900px]  flex-col md:flex-row">
          <div className="md:w-3/4 xl:w-2/5">
            <img
              src="https://i.ibb.co/k5PBTR1/e2.jpg"
              className="bg-cover w-full h-full"
            />
          </div>

          <div className="p-6">
            <h6 className="mb-2 font-bold  text-xl xl:text-2xl antialiased leading-relaxed tracking-normal text-gray-700 ">
              Title
            </h6>

            <p className=" font-sans text-xs md:text-base antialiased  text-gray-500">
              <i className="fa-solid fa-dollar-sign mr-2"></i> Price range :
            </p>

            <p className=" font-sans text-xs md:text-base antialiased  text-gray-500">
              <i className="fa-solid fa-location-dot mr-2"></i> Location :
            </p>

            <p className="block mb-2 font-sans text-xs md:text-base antialiased  leading-relaxed text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repudiandae, similique!
            </p>

            <p className=" font-sans text-xs md:text-sm antialiased  text-gray-500">
              Verification status :
            </p>

            <div className="flex items-center gap-2 mb-2 mt-2 bg-slate-100 w-36 p-2 rounded-2xl ">
              <img
                className="h-6 w-6 rounded-full"
                src="https://i.ibb.co/30ZghNN/kkk.jpg"
                alt=""
              />
              <h1 className="text-xs font-display">Locky Jane</h1>
            </div>

            <Link to="/dashboard/makeOffer">
              <button className="btn btn-sm btn-outline btn-accent">
                Make an offer
              </button>
            </Link>

            <Link to="" className="px-4">
              <button className="btn btn-sm btn-outline btn-accent">
                Remove
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whishlist;
