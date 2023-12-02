import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../Authentication/AuthProvider";
import LoadingSpiner from "../../../components/LoadingSpiner";
import useGetAProperties from "../../../hooks/properties/useGetAproperty";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PropertyDetail = () => {
  const params = useParams();
  // console.log(params);
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const { data = {}, isPending } = useGetAProperties(params.id);
  const navigate = useNavigate();

  // const {
  //   data: addWish,
  //   mutate,
  //   status,
  // } = useMutation({
  //   mutationKey: ["addtoWishlist"],
  //   mutationFn: async (wishData) => {
  //     const res = await axiosSecure.post("/wishlists", wishData);
  //     return res.data;
  //   },
  // });

  if (isPending) return <LoadingSpiner />;
  // uporer data gulo ki bosaysen Ui te ?
  // console.log(Object.keys(data).join(','));
  const {
    _id,
    image,
    verification_status,
    price,
    location,
    propertyTitle,
    propertyDescription,
    agentName,
    agentEmail,
    agentImage,
    propertyDetails,
    reviews,
  } = data;

  const handleAddWishlist = () => {
    const wishData = {
      userName: user?.displayName,
      userEmail: user?.email,
      propertyId: _id,
    };

    axiosSecure.post("/wishlists", wishData).then((res) => {
      console.log("inserted wishlist", res.data);
      if (res.data?.insertedId) {
        alert("wishlist added");
        navigate("/dashboard/whishlist");
      }
    });
  };

  return (
    <div className="">
      <Helmet>
        <title>Property Detail - Elite Estate Discoveries</title>
      </Helmet>

      <div className="border-5 border-l-8 border-teal-600 px-6">
        <h1 className="text-2xl md:text-4xl font-display text-teal-600">
          Property Detail
        </h1>
      </div>

      <div className=" py-8 px-10 md:px-16 ">
        <div className=" flex  rounded-xl text-gray-700 shadow-md w-full  flex-col md:flex-row">
          <div className="md:w-3/4  xl:w-2/5">
            <img src={image} className="bg-cover w-full h-full" />
          </div>

          <div className="p-6">
            <h6 className="mb-2 font-bold  text-xl antialiased leading-relaxed tracking-normal text-gray-700 ">
              {propertyTitle}
            </h6>
            <p className="block mb-2 font-sans text-xs md:text-base antialiased  leading-relaxed text-gray-500">
              {propertyDescription}
            </p>
            <p className=" font-sans text-xs md:text-base antialiased  text-gray-500">
              <i className="fa-solid fa-dollar-sign mr-2"></i> Price range : $
              {price}
            </p>

            <div className="flex items-center gap-2 mb-2 mt-2 bg-slate-100 w-36 p-2 rounded-2xl ">
              <img
                className="h-6 w-6 rounded-full"
                src="https://i.ibb.co/30ZghNN/kkk.jpg"
                alt=""
              />
              <h1 className="text-xs font-display">Locky Jane</h1>
            </div>

            {/* <Link to="/dashboard/whishlist"> */}
            <button
              onClick={handleAddWishlist}
              className="btn btn-sm btn-outline btn-accent"
            >
              Add to Wishlist
            </button>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
