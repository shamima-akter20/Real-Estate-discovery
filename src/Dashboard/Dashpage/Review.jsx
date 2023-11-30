import { Helmet } from "react-helmet-async";

const Review = () => {
  return (
    <div className="py-8 px-4 md:px-8">

      <Helmet>
        <title>My Review - Elite Estate Discoveries</title>
      </Helmet>

      <div className="border-5  border-l-8 border-teal-600 px-6">
        <h1 className="text-2xl md:text-4xl font-display text-teal-600">
          My Review
        </h1>
      </div>
      
    </div>
  );
};

export default Review;
