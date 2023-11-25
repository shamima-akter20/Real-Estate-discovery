import { Link } from "react-router-dom";

const Advertisement = () => {
    return (
     <div className="py-10 ">
  
       <div className="border-5 border-l-8 border-teal-600 px-6">
          <h1 className="text-2xl md:text-4xl font-display text-teal-600">Advertisement</h1> 
          <p className="text-xs md:text-base">Explore exclusive opportunities in our Advertisement Showcase, where each card unveils a unique proposition. </p>
       </div>
  
  
  
       <div className="py-10 px-8 md:px-10 lg:px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div className="card card-compact w-full bg-base-100 shadow-xl">
            <figure>
              <img className="h-56 w-full"
                src="https://i.ibb.co/k5PBTR1/e2.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
            <h1 className="font-bold">Verification Status : </h1>
              <h2 className="card-title text-2xl font-bold">
              <i className="fa-solid fa-location-dot"></i>Location : 
              </h2>
              <h3 className="text-base font-bold gap-3">
              <i className="fa-solid fa-dollar-sign mr-2"></i>Price :
              </h3>
              <div className="card-actions justify-start">
                <Link to="/propertyDetail">
                <button className="btn btn-outline btn-accent btn-sm">Details</button>
                </Link>
              </div>
            </div>
          </div>
  
          <div className="card card-compact w-full bg-base-100 shadow-xl">
            <figure>
              <img className="h-56 w-full"
                src="https://i.ibb.co/xjps5bG/w.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
  
          <div className="card card-compact w-full bg-base-100 shadow-xl">
            <figure>
              <img className="h-56 w-full"
                src="https://i.ibb.co/db4QKg8/h3.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
  
          <div className="card card-compact w-full bg-base-100 shadow-xl">
            <figure>
              <img className="h-56 w-full"
                src="https://i.ibb.co/SXKT2nF/pexels-binyamin-mellish-1396132.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
     </div>
  
    );
  };
  
  export default Advertisement;
  