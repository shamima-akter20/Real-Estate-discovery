const PopularPlace = () => {
  return (
    <div className="mb-10">
      <div className="border-5 border-l-8 border-teal-600 px-6">
        <h1 className="text-2xl md:text-4xl font-display text-teal-600">
          Popular Places
        </h1>
        <p className="text-xs md:text-base">
          Explore our handpicked popular places, from lively cityscapes to
          tranquil retreats, each showcasing the best of our region.
        </p>
      </div>

      {/* ----------------------------------------------  card  ----------------------------------------------- */}

      <div className="mt-8">
        {/*---------- flex-1 ----------*/}
        <div className="flex justify-center mx-auto">
          <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {/* card 1 */}
            <div>
              <div className="overflow-hidden w-full inline-block relative">
                <div
                  className="h-60  hover:scale-125 transition-all bg-cover"
                  style={{
                    backgroundImage:
                      "url(https://i.ibb.co/FKzxqYy/puran-dhaka.jpg)",
                  }}
                >
                  <div className=" bg-gradient-to-t from-[#293333] to-[rgba(21, 21, 21, 0)]  h-64">
                    {" "}
                  </div>
                </div>
              </div>

              <h1 className="text-3xl text-white absolute -mt-20 pl-6 font-bold">
                <i className="fa-solid fa-location-dot"></i> Puran Dhaka
              </h1>
            </div>

            {/* card 2 */}
            <div>
              <div className="overflow-hidden w-full inline-block relative">
                <div
                  className="h-60  hover:scale-125 transition-all bg-cover"
                  style={{
                    backgroundImage: "url(https://i.ibb.co/GVyrCvs/uttara.jpg)",
                  }}
                >
                  <div className=" bg-gradient-to-t from-[#293333] to-[rgba(21, 21, 21, 0)]  h-64">
                    {" "}
                  </div>
                </div>
              </div>

              <h1 className="text-3xl text-white absolute -mt-20 pl-6 font-bold">
                <i className="fa-solid fa-location-dot"></i> Uttara
              </h1>
            </div>

            {/* card 3 */}
            <div>
              <div className="overflow-hidden w-full  inline-block relative">
                <div
                  className="h-60 hover:scale-125 transition-all bg-cover"
                  style={{
                    backgroundImage:
                      "url(https://i.ibb.co/gJG2SbS/banasri.jpg)",
                  }}
                >
                  <div className=" bg-gradient-to-t from-[#293333] to-[rgba(21, 21, 21, 0)]  h-64">
                    {" "}
                  </div>
                </div>
              </div>

              <h1 className="text-3xl text-white absolute -mt-20 pl-6 font-bold">
                <i className="fa-solid fa-location-dot"></i> Banasree
              </h1>
            </div>

            {/* card 4 */}
            <div>
              <div className="overflow-hidden w-full inline-block relative">
                <div
                  className="h-60  hover:scale-125 transition-all bg-cover"
                  style={{
                    backgroundImage: "url(https://i.ibb.co/qRQ68sf/bonani.jpg)",
                  }}
                >
                  <div className=" bg-gradient-to-t from-[#293333] to-[rgba(21, 21, 21, 0)]  h-64">
                    {" "}
                  </div>
                </div>
              </div>

              <h1 className="text-3xl text-white absolute -mt-20 pl-6 font-bold">
                <i className="fa-solid fa-location-dot"></i> Banani
              </h1>
            </div>

            {/*  card 5 */}
            <div>
              <div className="overflow-hidden w-full  inline-block relative">
                <div
                  className="h-60 hover:scale-125 transition-all bg-cover"
                  style={{
                    backgroundImage:
                      "url(https://i.ibb.co/r7bJVw7/dhanmondi.jpg)",
                  }}
                >
                  <div className=" bg-gradient-to-t from-[#293333] to-[rgba(21, 21, 21, 0)]  h-60">
                    {" "}
                  </div>
                </div>
              </div>

              <h1 className="text-3xl text-white absolute -mt-20 pl-6 font-bold">
                <i className="fa-solid fa-location-dot"></i> Dhanmondi
              </h1>
            </div> 

            {/*  card 6 */}
            <div>
              <div className="overflow-hidden w-full inline-block relative">
                <div
                  className="h-60 w-96 hover:scale-125 transition-all bg-cover"
                  style={{
                    backgroundImage:
                      "url(https://i.ibb.co/1ZQ4RKr/Mohammadpur.webp)",
                  }}
                >
                  <div className=" bg-gradient-to-t from-[#293333] to-[rgba(21, 21, 21, 0)]  h-60">
                    {" "}
                  </div>
                </div>
              </div>

              <h1 className="text-3xl text-white absolute -mt-20 pl-6 font-bold">
                <i className="fa-solid fa-location-dot"></i> Mohammadpur
              </h1>
            </div> 
          </div>
        </div>

       

        
      </div>
    </div>
  );
};

export default PopularPlace;
