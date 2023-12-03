import { Link } from "react-router-dom";
import LoadingSpiner from "../../../components/LoadingSpiner";
import useGetProperties from "../../../hooks/properties/useGetProperties";


const Advertisement = () => {


  const {data:advertise = [], isPending} = useGetProperties()
  // achen naki ? accha loading spnieer banaisen ?hae koi ?

if(isPending) return <LoadingSpiner/>

  console.log(advertise);
    return (
     <div className="py-10 ">
  
       <div className="border-5 border-l-8 border-teal-600 px-6">
          <h1 className="text-2xl md:text-4xl font-display text-teal-600">Advertisement</h1> 
          <p className="text-xs md:text-base">Explore exclusive opportunities in our Advertisement Showcase, where each card unveils a unique proposition. </p>
       </div>
  
       <div className="py-10 px-8 md:px-10 lg:px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {
            advertise.map(item =>
              <div key={item?._id} className="card card-compact w-full bg-base-100 shadow-xl">
            <figure>
              
              <img className="h-56 w-full"
                src={item.image}
                alt="Shoes"/>
            </figure>
            <div className="card-body">
            <h1 className="font-bold">Verification Status : {item.verification_status}</h1>
              <h2 className="card-title text-2xl font-bold">
              <i className="fa-solid fa-location-dot"></i>Location : 
              </h2>
              <h3 className="text-base font-bold gap-3">
              <i className="fa-solid fa-dollar-sign mr-2"></i>Price : {item.price}
              </h3>
              <div className="card-actions justify-start">
                <Link to={`/propertyDetail/${item._id}`}>
                <button className="btn btn-outline btn-accent btn-sm">Details</button>
                </Link>
              </div>
            </div>
          </div> 
          )}
        </div>
      </div>
     </div>
  
    );
  };
  
  export default Advertisement;
  