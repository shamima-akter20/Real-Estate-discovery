import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Authentication/AuthProvider";
import LoadingSpiner from "../../components/LoadingSpiner";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useWishListsQuery from "../../hooks/wishlists/useWishListsQuery";

const Whishlist = () => {
  const { user } = useContext(AuthContext);

  const {
    data = [],
    isPending,
    refetch,
  } = useWishListsQuery({ key: "userEmail", value: user?.email });

  const axiosSecure = useAxiosSecure(); // ekhane confirmation newa hoy nai.. ota ektu thik korte hobe.. TODO:konta review remove korar somoy ki

  const handleRemove = (id) => {
    // confirmation niben naki user theke ? remove korar jonno ? ? swal diye ?hae  ami swal ta debo? naki sorasori delete kore debo ?achen ?hmmm
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/wishlists/${id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  if (isPending) return <LoadingSpiner />;
  console.log(data);

  return (
    <div className="py-8 px-4 md:px-8">
      <Helmet>
        <title>My Whishlist - Elite Estate Discoveries</title>
      </Helmet>

      <div className="border-5  border-l-8 border-teal-600 px-6">
        <h1 className="text-xl md:text-4xl font-display text-teal-600">
          My Whishlist
        </h1>
      </div>

      <div className="flex flex-col py-8 ">
        {data.map((wishlist) => (
          <div
            key={wishlist?._id}
            className=" flex xl:gap-12 rounded-xl mb-8 text-gray-700 shadow-md xl:w-[900px]  flex-col md:flex-row"
          >
            <div className="md:w-3/4 xl:w-2/5">
              <img
                src={wishlist?.propertyDetails?.image}
                className="bg-cover w-full h-full"
              />
            </div>

            <div className="p-6">
              <h6 className="mb-2 font-bold  text-xl xl:text-2xl antialiased leading-relaxed tracking-normal text-gray-700 ">
                {wishlist?.propertyDetails?.propertyTitle}
              </h6>

              <p className=" font-sans text-xs md:text-base antialiased  text-gray-500">
                <i className="fa-solid fa-dollar-sign mr-2"></i> Price range :{" "}
                {wishlist?.propertyDetails?.price}
              </p>

              <p className=" font-sans text-xs md:text-base antialiased  text-gray-500">
                <i className="fa-solid fa-location-dot mr-2"></i>
                {/* {wishlist?.propertyDetails?.location} */}
              </p>

              <p className="block mb-2 font-sans text-xs md:text-base antialiased  leading-relaxed text-gray-500">
                {wishlist?.propertyDetails?.propertyDetails}
              </p>

              <p className=" font-sans text-xs md:text-sm antialiased  text-gray-500">
                Verification status :{" "}
                {wishlist?.propertyDetails?.verification_status}
              </p>

              <div className="flex items-center gap-2 mb-2 mt-2 bg-slate-100 w-36 p-2 rounded-2xl ">
                <img
                  className="h-6 w-6 rounded-full"
                  src={wishlist?.propertyDetails?.agentImage}
                  alt=""
                />
                <h1 className="text-xs font-display">
                  {" "}
                  {wishlist?.propertyDetails?.agentName}{" "}
                </h1>
              </div>

              <Link to={`/dashboard/makeOffer/${wishlist?.propertyDetails?._id}`}>
                <button className="btn btn-sm btn-outline btn-accent">
                  Make an offer
                </button>
              </Link>

              <button
                onClick={() => handleRemove(wishlist?._id)}
                className="btn btn-sm mx-4 btn-outline btn-accent"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Whishlist;
