import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import LoadingSpiner from "../../components/LoadingSpiner";
import useReviews from "../../hooks/reviews/useReviews";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const ManageReview = () => {

  const {data, isPending, refetch} = useReviews()

  const axiosSecure = useAxiosSecure()

  if(isPending) return <LoadingSpiner/>

  console.log(data);

  const handleDelete = id => {
    console.log(id);
    axiosSecure.delete(`/reviews/${id}`)
    .then(res=> {
      console.log(res.data);
      if(res.data.deletedCount){
        refetch()
        Swal.fire('Deleted Review')
      }
    })
  }

  return (
    <div className="py-8 px-4 md:px-8">
      <Helmet>
        <title>Manage Review - Elite Estate Discoveries</title>
      </Helmet>

      <div className="border-5  border-l-8 border-teal-600 px-1 md:px-6">
        <h1 className="text-xl md:text-4xl font-display text-teal-600">
          Manage Review
        </h1>
      </div>


      <div className="py-6">
        {data.map(review=> (
          <div key={review?._id} className="my-4 relative flex w-full max-w-[26rem] flex-col rounded-xl p-4 bg-slate-100 bg-clip-border text-gray-700 shadow-none">
          <div className="relative flex items-center gap-4 pt-0 pb-8 mx-0 mt-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
            <img
              src={review?.reviewerImage}
              alt={review?.reviewerName}
              className="relative inline-block h-[58px] w-[58px] !rounded-full  object-cover object-center"
            />
            <div className="flex w-full flex-col gap-0.5">
              <div className="flex items-center justify-between">
                <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  {review?.reviewerName}
                </h5>
              </div>
              {/* <p className="block font-sans text-base antialiased font-light leading-relaxed text-blue-gray-900">
                Frontend Lead @ Google
              </p> */}
            </div>
          </div>
          <div className="p-0 mb-6">
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
              {review?.reviewDescription}
            </p>
          </div>
         <button onClick={()=> handleDelete(review?._id)} className="btn btn-neutral w-full">Delete</button>
        </div>
        ))}
        
      </div>
    </div>
  );
};

export default ManageReview;

