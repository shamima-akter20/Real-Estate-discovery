import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Authentication/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

export default function ReviewModal({ data }) {
  //   console.log(data);

  const { user } = useContext(AuthContext);

  const axiosSecure = useAxiosSecure()


  const handleReview = (e) => {
    e.preventDefault();
    const review = e.target.review.value;
    // console.log(review);
    const reviewInfo = {
      reviewerName: user?.displayName,
      reviewerEmail: user?.email,
      reviewerImage: user?.photoURL,
      reviewDescription: review,
      agentName: data?.agentName,
      propertyId: data?._id,
      ratingTime: new Date(),
    };
    console.log(reviewInfo);

    axiosSecure.post('/reviews', reviewInfo)
    .then(res=> {
        document.getElementById("my_modal_1").close()
        console.log(res.data);
        if(res.data.insertedId){
            Swal.fire({
                title: "Review",
                text: "Added Successfully",
                icon: "success"
              });
        }
    })
    
  };

  return (
    <>
      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
        
          <div className="py-4">
            <form onSubmit={handleReview}>
              <h1 className="font-display ml-2 mb-4 text-teal-500">Review</h1>
              <textarea name="review" required className="w-full rounded-xl textarea input-accent"></textarea>
              {/* <input type="submit"  /> */}
              <input type="submit" className="mt-3  w-full btn btn-active btn-accent" value="Submit" />
            </form>
          </div>

        
        </div>
      </dialog>
    </>
  );
}
