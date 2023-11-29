import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Collection = () => {
  return (
    <div className=' py-4 flex flex-col justify-center items-center mx-auto'>
      <div className="border-5 border-l-8 border-teal-600 px-6">
        <h1 className="text-2xl md:text-4xl font-display text-teal-600">
          What are you looking for?{" "}
        </h1>
        <p className="text-xs md:text-base">
          Find your perfect home effortlessly with our What Are You Looking
          For feature.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-8 py-10 bg-slate-100">

        <div className="card w-full bg-base-100 shadow-xl"  data-aos="fade-down">
          <div className="card-body">
            <div className="flex justify-center text-center">
               <img className="h-14 w-14 " src="https://i.ibb.co/bF9yDtb/apartment.png" alt="" />    
            </div> 
            <h2 className="text-center font-display text-teal-600 text-2xl font-bold py-3">Apartments</h2>
            <p className="text-slate-500 text-sm">Discover urban living at its finest with our premium apartments, where modern comfort meets style in the heart of vibrant communities.</p>
          </div>
        </div>

        <div className="card w-full bg-base-100 shadow-xl"  data-aos="fade-down" >
          <div className="card-body">
            <div className="flex justify-center text-center">
               <img className=" w-20 " src="https://i.ibb.co/xJBBWyT/house.png" alt="" />    
            </div> 
            <h2 className="text-center font-display text-teal-600 text-2xl font-bold ">House</h2>
            <p className="text-slate-500 text-sm">Step into the warmth of a home that suits your lifestyle—explore our range of houses designed for comfort, elegance, and lasting memories.</p>
          </div>
        </div>

        <div className="card w-full bg-base-100 shadow-xl"  data-aos="fade-down">
          <div className="card-body">
            <div className="flex justify-center text-center">
               <img className="h-14 w-14 " src="https://i.ibb.co/D9jV4Rv/market.png" alt="" />    
            </div> 
            <h2 className="text-center font-display text-teal-600 text-2xl font-bold py-3">Commercial</h2>
            <p className="text-slate-500 text-sm">Explore properties near local markets—experience the convenience of having essential amenities right at your doorstep with our market-centric listings.</p>
          </div>
        </div>

        <div className="card w-full bg-base-100 shadow-xl"  data-aos="fade-down">
          <div className="card-body">
            <div className="flex justify-center text-center">
               <img className="h-14 w-14 " src="https://i.ibb.co/GdTXB8M/garage.png" alt="" />    
            </div> 
            <h2 className="text-center font-display text-teal-600 text-2xl font-bold py-3">Garage</h2>
            <p className="text-slate-500 text-sm">Secure your vehicles with our spacious and well-equipped garages, providing the perfect solution for safeguarding your valuable assets.</p>
          </div>
        </div>

       

      </div>

    </div>
  );
};

export default Collection;
