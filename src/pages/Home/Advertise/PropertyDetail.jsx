import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Authentication/AuthProvider";
import LoadingSpiner from "../../../components/LoadingSpiner";
import useGetAProperties from "../../../hooks/properties/useGetAproperty";
import useReviews from "../../../hooks/reviews/useReviews";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import ReviewModal from "./ReviewModal";

const PropertyDetail = () => {
 
  const params = useParams();
  // console.log(params);
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const { data = {}, isPending } = useGetAProperties(params.id);
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
  const navigate = useNavigate();
  
  const [open, setOpen] = useState(false);
  
  const {data:reviewsData, isPending:reviewPending} = useReviews({key: 'propertyId', value: _id})



  if (isPending && reviewPending) return <LoadingSpiner />;
  console.log(reviewsData);

  const handleAddWishlist = () => {
    const wishData = {
      userName: user?.displayName,
      userEmail: user?.email,
      propertyId: _id,
    };

    axiosSecure.post("/wishlists", wishData).then((res) => {
      console.log("inserted wishlist", res.data);
      if (res.data?.insertedId) {
        Swal.fire({
          title: "",
          text: "Successfully added to Whishlist",
          icon: "success",
        });

        navigate("/dashboard/whishlist");
      }
    });
  };

  return (
    <>
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
                <img className="h-6 w-6 rounded-full" src={agentImage} alt="" />
                <h1 className="text-xs font-display">{agentName}</h1>
              </div>

              {/* <Link to="/dashboard/whishlist"> */}
              <button
                onClick={handleAddWishlist}
                className="btn btn-sm btn-outline btn-accent"
              >
                Add to Wishlist
              </button>

              <div className="py-6">
                {/* <Link to="/addReview"> */}
                <button
                  onClick={() =>
                    document.getElementById("my_modal_1").showModal()
                  }
                  className="btn btn-active btn-neutral w-full "
                >
                  Add Review
                </button>
                {/* </Link> */}
              </div>

              {/* </Link> */}
            </div>
          </div>
        </div>
   {/* review */}
        <h1 className="my-6 font-display text-teal-500 md:ml-6 text-2xl">User Review</h1>
        <div className="grid mx-10 my-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reviewsData?.map(review=> (
            
            <div key={review?._id} className="relative flex w-full  flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
              <div className="relative flex items-center gap-4 pt-0 pb-8 mx-0 mt-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
                <img
                  src={review?.reviewerImage || ''}
                  alt="Tania Andrew"
                  className="relative inline-block h-[58px] w-[58px] !rounded-full  object-cover object-center"
                />
                <div className="flex w-full flex-col gap-0.5">
                  <div className="flex items-center justify-between">
                    <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                      {review?.reviewerName}
                    </h5>
                  </div>
                  
                </div>
              </div>
              <div className="p-0 mb-6">
                <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                 {review?.reviewDescription}
                </p>
              </div>
            </div>
        
          ))}
        </div>
      </div>
      <ReviewModal data={data} />
    </>
  );
};

export default PropertyDetail;
