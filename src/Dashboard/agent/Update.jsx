import { Helmet } from "react-helmet-async";


const Update = () => {
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
             {/* Property image */}
               <div className="form-control flex-1">
                 <label className="label">
                   <span className="label-text">Property Image</span>
                 </label>
                 <input type="file" name="buyer_email" defaultValue = ""
                  className=" border border-teal-500 rounded-full" required />
               </div>
         </div>

{/* -------------------------------- 2 ----------------------------- */}
         <div className="flex gap-6 flex-col md:flex-row " >
             {/* location  */}
               <div className="form-control flex-1">
                 <label className="label">
                   <span className="label-text">Location </span>
                 </label>
                 <input type="text" name="location" placeholder="Location" 
                 className="input input-bordered input-accent w-full" required />
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

{/* -------------------------------- 3 ----------------------------- */}
         <div className="flex gap-6 flex-col md:flex-row " >
             {/* Agent email. */}
               <div className="form-control flex-1">
                 <label className="label">
                   <span className="label-text">Agent Email </span>
                 </label>
                 <input type="email" name="Agent_email." placeholder="Agent Email." 
                 className="input input-bordered input-accent w-full" required />
               </div>
       
               {/* Agent price */}
               <div className="form-control flex-1">
                 <label className="label">
                   <span className="label-text">Price</span>
                 </label>
                 <input type="text" name="price
                 
                 " placeholder="Agent Name" 
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

        <div className="form-control mt-6">
          <button className="btn btn-outline btn-accent">Submit</button>
        </div>
        
      </form>
      
      </div>
    </div>
    );
};

export default Update;