const AllProperties = () => {
  return (
    <div>

      <div className="border-5 border-l-8 border-teal-600 px-6">
        <h1 className="text-2xl md:text-4xl font-display text-teal-600">
        All Properties
        </h1>
        <p className="text-xs md:text-base">
        Explore our comprehensive collection of properties, meticulously curated to cater to diverse preferences and lifestyles.
        </p>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-8">
        <div className="relative flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
              alt="ui/ux review check"
            />
          </div>
          <div className="px-6 py-2">
            <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Property Title :
            </h4>
            <h1>Location :</h1>
            <p className="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">
              Because it is about motivating the doers. Because I am here to
              follow my dreams and inspire others.
            </p>
          </div>
          <div className="flex items-center justify-between p-6">
            <div className="flex items-center -space-x-3">
              <img
                alt="natali craig"
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1061&amp;q=80"
                className="relative inline-block object-cover object-center border-2 border-white rounded-full h-9 w-9 hover:z-10"
                data-tooltip-target="author-1"
              />
              <div
                data-tooltip="author-1"
                className="absolute z-50 whitespace-normal break-words rounded-lg bg-black py-1.5 px-3 font-sans text-sm font-normal text-white focus:outline-none"
              >
                Natali Craig
              </div>
              <img
                alt="tania andrew"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                className="relative inline-block object-cover object-center border-2 border-white rounded-full h-9 w-9 hover:z-10"
                data-tooltip-target="author-2"
              />
              <div
                data-tooltip="author-2"
                className="absolute z-50 whitespace-normal break-words rounded-lg bg-black py-1.5 px-3 font-sans text-sm font-normal text-white focus:outline-none"
              >
                Tania Andrew
              </div>
            </div>
            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
              January 10
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProperties;
