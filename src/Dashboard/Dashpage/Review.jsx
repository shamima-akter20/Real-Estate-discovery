import { Helmet } from "react-helmet-async";

const Review = () => {
  return (
    <div className="py-8 px-4 md:px-8">
      <Helmet>
        <title>My Review - Elite Estate Discoveries</title>
      </Helmet>

      <div className="border-5  border-l-8 border-teal-600 px-1 md:px-6">
        <h1 className="text-xl md:text-4xl font-display text-teal-600">
          My Review
        </h1>
      </div>

      <div className="py-3 md:py-10">
        
          <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
            <div className="flex flex-col md:flex-row justify-between items-center gap-10 p-0 ">
              <div>
                <h1 className="text-base font-semibold">Propert Title :</h1>
                   <h1 className="text-sm font-semibold">Agent Name :  </h1>
                   <p className="block font-sans text-xs md:text-base antialiased font-light leading-relaxed text-inherit">
                     I found solution to all my design needs from Creative Tim. I
                     use them as a freelancer in my hobby projects for fun! And its
                     really affordable, very humble guys !!!
                   </p>
                   <h1 className="text-sm">Review Time : </h1>
                   <button className="btn  w-full">
                   <i className="fa-solid fa-trash-can"></i>
                   </button>
              </div>
            </div>
            <div className="divider"></div>
          </div>
          <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
            <div className="flex flex-col md:flex-row justify-between items-center gap-10 p-0 ">
              <div>
                <h1 className="text-base font-semibold">Propert Title :</h1>
                   <h1 className="text-sm font-semibold">Agent Name :  </h1>
                   <p className="block font-sans text-xs md:text-base antialiased font-light leading-relaxed text-inherit">
                     I found solution to all my design needs from Creative Tim. I
                     use them as a freelancer in my hobby projects for fun! And its
                     really affordable, very humble guys !!!
                   </p>
                   <h1 className="text-sm">Review Time : </h1>
                   <button className="btn  w-full">
                   <i className="fa-solid fa-trash-can"></i>
                   </button>
              </div>
            </div>
            <div className="divider"></div>
          </div>
      </div>
    </div>
  );
};

export default Review;

