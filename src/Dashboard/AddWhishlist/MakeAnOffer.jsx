import { Helmet } from "react-helmet-async";

const MakeAnOffer = () => {
  return (
    <div className="py-10 pl-3 md:pl-9">
      <Helmet>
        <title>Make Offer - Elite Estate Discoveries</title>
      </Helmet>

      <div className="border-5  border-l-8 border-teal-600 px-6">
        <h1 className="text-xl md:text-4xl font-display text-teal-600">
          Make Offer
        </h1>
      </div>

      <div className="md:w-[500px] lg:w-[600px] xl:w-[900px] py-6">
      <form className=" md:mx-12 ">
{/* -------------------------------- 1 ----------------------------- */}
         <div className="flex gap-6 flex-col md:flex-row " >
             {/* buyer email */}
               <div className="form-control flex-1">
                 <label className="label">
                   <span className="label-text">Buyer Email</span>
                 </label>
                 <input type="email" name="buyer_email" defaultValue = ""
                  className="input input-bordered input-accent w-full" required />
               </div>
       
               {/* buyer name */}
               <div className="form-control flex-1">
                 <label className="label">
                   <span className="label-text"> Buyer Name</span>
                 </label>
                 <input type="text" name="buyer_name" placeholder=" Job title" 
                 className="input input-bordered input-accent w-full" required />
               </div>
         </div>

{/* -------------------------------- 2 ----------------------------- */}
         <div className="flex gap-6 flex-col md:flex-row " >
             {/* buying date */}
               <div className="form-control flex-1">
                 <label className="label">
                   <span className="label-text">Buying Date</span>
                 </label>
                 <input type="date" name="buying_date" placeholder="Deadline" 
                 className="input input-bordered input-accent w-full" required />
               </div>
               {/* Offered amount. */}
               <div className="form-control flex-1">
                 <label className="label">
                   <span className="label-text">Offered Amount</span>
                 </label>
                 <select name="offered_amount" className="input input-bordered input-accent w-full" id="">
                    <option value="Web development">Web development</option>
                    <option value="Digital marketing">Digital marketing</option>
                    <option value="Graphics design">Graphics design</option>
                 </select>
               </div>
         </div>

{/* -------------------------------- 3 ----------------------------- */}
         <div className="flex gap-6 flex-col md:flex-row " >
             {/* location  */}
               <div className="form-control flex-1">
                 <label className="label">
                   <span className="label-text">Location </span>
                 </label>
                 <input type="text" name="location" placeholder="Maximum price" 
                 className="input input-bordered input-accent w-full" required />
               </div>
       
               {/* Agent name */}
               <div className="form-control flex-1">
                 <label className="label">
                   <span className="label-text">Agent Name</span>
                 </label>
                 <input type="text" name="agent_name" placeholder="Minimum price" 
                 className="input input-bordered input-accent w-full" required />
               </div>
         </div>

{/* -------------------------------- 4 ----------------------------- */}
         <div className="title" >
             {/* Description */}
               <div className="form-control ">
                 <label className="label">
                   <span className="label-text">Title</span>
                 </label>
                 <textarea  type="text" name="description" placeholder="Title" 
                 className="input input-bordered input-accent w-full" required />
               </div>
         </div>

        <div className="form-control mt-6">
          <button className="btn btn-outline btn-accent">Offer</button>
        </div>
        
      </form>
      
      </div>
    </div>
  );
};

export default MakeAnOffer;
