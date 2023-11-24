const Banner = () => {
  return (
    <div>
      <div
        className="hero h-auto"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/fnV62xt/w.jpg)",   }}  >
     
    
        <div className="hero-overlay bg-gradient-to-r from-[#293333] to-[rgba(21, 21, 21, 0)] "></div>
        
          <div className="flex flex-col lg:flex-row gap-10 py-10 items-center">
            <div className="flex-1 px-4 md:px-10 lg:px-16 ">
                <h1 className="font-display font-bold text-base md:text-2xl text-teal-400 mb-4">Discover the Perfect Home for Your Unique Lifestyle</h1>
                <p className="text-teal-600 text-xs md:text-base ">Welcome here, where dreams find a home. Discover a curated selection of prime properties that redefine living. From stylish apartments to spacious homes, each listing tells a unique story. Our mission is to guide you on a seamless journey to find the perfect space that suits your lifestyle. Explore, dream, and unlock the door to your ideal home with us</p>
            </div>

            <div className="flex-1 px-5 md:px-9 lg:px-16">
                <div className="flex flex-col md:flex-row">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div className="border-white border-8 rounded-3xl">
                       <img className="h-36 w-64 rounded-3xl" src="https://i.ibb.co/tbztZDx/h1.jpg" alt="" />
                   </div>

                   <div className="border-white border-8 rounded-3xl">
                    <img  className="h-36 w-64 rounded-3xl" src="https://i.ibb.co/DCyD4xQ/h2.jpg" alt="" />
                   </div>

                   <div className="border-white border-8 rounded-3xl">
                    <img  className="h-36 w-64 rounded-3xl" src="https://i.ibb.co/Ntcq5D2/pexels-pixabay-280216.jpg" alt="" />
                   </div>

                   <div className="border-white border-8 rounded-3xl">
                    <img className="h-36 w-64 rounded-3xl"  src="https://i.ibb.co/zSysBVG/pexels-binyamin-mellish-1396132.jpg" alt="" />
                   </div>
                </div>
                </div>
            </div>
          </div>
          
        </div>
      </div>
    
  );
};

export default Banner;
