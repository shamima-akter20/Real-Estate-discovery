import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const AddReview = () => {

    const handleReview =  () =>{
        Swal.fire({
            title: "Review",
            text: "Added Successfully",
            icon: "success"
          });
    }

  return (
    <div className="py-8 px-4 md:px-8">
      <Helmet>
        <title>Add Review - Elite Estate Discoveries</title>
      </Helmet>

      <div className="border-5  border-l-8 border-teal-600 px-1 md:px-6">
        <h1 className="text-xl md:text-4xl font-display text-teal-600">
           Add Review
        </h1>
      </div>

      <div className="md:w-[500px] lg:w-[600px] xl:w-[900px] py-6">
      <form onSubmit={handleReview} className=" md:mx-12 ">
{/* -------------------------------- 1 ----------------------------- */}
         <div className="flex gap-6 flex-col lg:flex-row " >
             {/* Property image */}
               <div className="form-control flex-1">
                 <label className="label">
                   <span className="label-text">Property Image</span>
                 </label>
                 <input type="file" name="buyer_email" defaultValue = ""
                  className=" border border-teal-300 rounded-xl" required />
               </div>

                {/* Agent name */}
                <div className="form-control flex-1">
                 <label className="label">
                   <span className="label-text">Agent Name</span>
                 </label>
                 <input type="text" name="agent_name" placeholder="Agent Name" 
                 className="input input-bordered input-accent w-full" required />
               </div>
         </div>


{/* -------------------------------- 4 ----------------------------- */}
         <div className="flex gap-6 flex-col md:flex-row " >
            {/* Property title */}
               <div className="form-control flex-1">
                 <label className="label">
                   <span className="label-text"> Property Title</span>
                 </label>
                 <input type="text" name="buyer_name" placeholder=" Property title" 
                 className="input input-bordered input-accent w-full" required />
               </div>
         </div>


         <div className="flex gap-6 flex-col md:flex-row " >
            {/* Property title */}
               <div className="form-control flex-1">
                 <label className="label">
                   <span className="label-text"> Description</span>
                 </label>
                 <textarea type="text" name="description" placeholder="Description" 
                 className="input input-bordered input-accent w-full" required />
               </div>
         </div>

        <div className="form-control mt-6">
          <button
          className="btn  btn-accent">Submit</button>
        </div>
        
      </form>
      
      </div>

    </div>
  );
};

export default AddReview;
