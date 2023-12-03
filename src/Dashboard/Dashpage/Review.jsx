import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import { AuthContext } from "../../Authentication/AuthProvider";
import LoadingSpiner from "../../components/LoadingSpiner";
import useReviews from "../../hooks/reviews/useReviews";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Review = () => {
  const { user } = useContext(AuthContext);

  const axiosSecure = useAxiosSecure()

  const { data = [], isPending, refetch } = useReviews({
    key: "reviewerEmail",
    value: user?.email,
  });

  const handleDelete = id=>{
    // console.log(id);
    axiosSecure.delete(`/reviews/${id}`)
    .then(res=> {
      console.log(res.data);
      if(res.data.deletedCount){
        refetch()
        // alert('review delted')
        Swal.fire({
          title: "Review",
          text: "Deleted Successfully",
          icon: "success"
        });
      }
    })
  }

  if (isPending) return <LoadingSpiner />;

  console.log(data);

  return (
    <div className="py-8 px-4 md:px-8">
      <Helmet>
        <title>My Review - Elite Estate Discoveries</title>
      </Helmet>

      <div className="border-5  border-l-8 border-teal-600 px-1 md:px-6">
        <h1 className="text-xl md:text-4xl font-display text-teal-600">
          My Review
        </h1>
      </div>

      <div className="py-3 md:py-10">
        
    


        {data?.map((review) => (
          <div key={review._id} className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
            {/* {Object.keys(review).join(',')} */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-10 p-0 ">
              <div>
                <h1 className="text-base font-semibold">Propert Title : {review?.propertyDetails?.propertyTitle}</h1>
                <h1 className="text-sm font-semibold">Agent Name : {review?.propertyDetails?.agentName} </h1>
                <p className="block font-sans text-xs md:text-base antialiased font-light leading-relaxed text-inherit">
                 {review?.reviewDescription}
                </p>
                <h1 className="text-sm">Review Time : {review?.ratingTime} </h1>
                <button onClick={()=>handleDelete(review?._id)} className="btn  w-full">
                  <i className="fa-solid fa-trash-can"></i>
                </button>
              </div>
            </div>
            <div className="divider"></div>
          </div>
        ))}
       
      </div>
    </div>
  );
};

export default Review;
