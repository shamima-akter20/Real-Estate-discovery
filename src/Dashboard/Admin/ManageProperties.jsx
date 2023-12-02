import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const ManageProperties = () => {
  return (
    <div className="py-8 px-4 md:px-8">
      <Helmet>
        <title>Manage Properties - Elite Estate Discoveries</title>
      </Helmet>

      <div className="border-5  border-l-8 border-teal-600 px-1 md:px-6">
        <h1 className="text-xl md:text-4xl font-display text-teal-600">
          Manage Properties
        </h1>
      </div>

      <div className="p-6">
        <h6 className="mb-2 font-bold  text-xl xl:text-2xl antialiased leading-relaxed tracking-normal text-gray-700 ">
          Title
        </h6>

        <p className=" font-sans text-xs md:text-base antialiased  text-gray-500">
          <i className="fa-solid fa-dollar-sign mr-2"></i> Price Range :
        </p>

        <p className=" font-sans text-xs md:text-base antialiased  text-gray-500">
          <i className="fa-solid fa-location-dot mr-2"></i> Location :
        </p>

        <p className="block mb-2 font-sans text-xs md:text-base antialiased  leading-relaxed text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae,
          similique!
        </p>

        <p className=" font-sans text-xs md:text-sm antialiased  text-gray-500">
          Verification Status :
        </p>

        <p className="py-1 font-sans text-xs md:text-sm antialiased  text-gray-500">
          Agent Name :
        </p>

        <p className="py-1 font-sans text-xs md:text-sm antialiased  text-gray-500">
          Agent Email :
        </p>

        <Link to="/dashboard/update">
          <button className="btn btn-sm btn-outline btn-accent">Verify</button>
        </Link>

        <Link to="" className="px-4">
          <button className="btn btn-sm btn-outline btn-accent">Reject</button>
        </Link>
      </div>
    </div>
  );
};

export default ManageProperties;
