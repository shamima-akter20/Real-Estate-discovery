import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import LoadingSpiner from "../../components/LoadingSpiner";
import useGetAProperties from "../../hooks/properties/useGetAproperty";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Update = () => {
  const params = useParams();
  const { data, isPending } = useGetAProperties(params?.id);

  // ei data gulo niye defaultValue te set kore diben.. bujchesen ?

  const axiosSecure = useAxiosSecure();

  if (isPending) return <LoadingSpiner />;

  console.log(data);

  const handleUpdate = (e) => {
    e.preventDefault();

    const imageData = e.target.buyer_image.files[0];

    //   console.log(imageData);

    //  const res = await uploadImage(imageData)
    //  console.log(res);

    // mutateAsync(imageData)
    // .then(res=> {
    //     console.log(res.data);
    // })

    const form = e.target;
    // const buyer_image = form.buyer_image.files[0];
    const location = form.location.value;
    const agent_name = form.agent_name.value;
    const agent_email = form.agent_email.value;
    const max_price = form.max_price.value;
    const min_price = form.min_price.value;
    const property_title = form.property_title.value;
    const description = form.description.value;

    // console.dir();

    const propertyInfo = {
      // image: buyer_image,
      location,
      agentEmail: agent_email,
      agentName: agent_name,
      maxPrice: max_price,
      minPrice: min_price,
      price: `${min_price} - ${max_price}`,
      propertyTitle: property_title,
      description,
    };

    console.log(propertyInfo);

    axiosSecure.put(`/properties/${params.id}`, propertyInfo).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount) {
        Swal.fire({
          icon: "success",
          text: "updated Property successfully!",
          title: "success",
        });
      }
    });
  };
  // axiosSecure.put('/properties', updateFormData)

  return (
    <div className="py-10 pl-3 md:pl-9">
      <Helmet>
        <title>Update - Elite Estate Discoveries</title>
      </Helmet>

      <div className="border-5  border-l-8 border-teal-600 px-6">
        <h1 className="text-xl md:text-4xl font-display text-teal-600">
          Update
        </h1>
      </div>

      <div className="md:w-[500px] lg:w-[600px] xl:w-[900px] py-6">
        <form onSubmit={handleUpdate} className=" md:mx-12 ">
          {/* -------------------------------- 1 ----------------------------- */}
          <div className="flex gap-6 flex-col md:flex-row ">
            {/* Property image */}
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">{}</span>
              </label>
              <input
                type="file"
                name="buyer_image"
                defaultValue={data?.image}
                className=" border border-teal-500 rounded-full"
                required
              />
            </div>
          </div>

          {/* -------------------------------- 2 ----------------------------- */}
          <div className="flex gap-6 flex-col md:flex-row ">
            {/* location  */}
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Location </span>
              </label>
              <input
                type="text"
                name="location"
                placeholder="Location"
                defaultValue={data?.location}
                className="input input-bordered input-accent w-full"
                required
              />
            </div>

            {/* Agent name */}
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Agent Name</span>
              </label>
              <input
                type="text"
                name="agent_name"
                placeholder="Agent Name"
                className="input input-bordered input-accent w-full"
                required
              />
            </div>
          </div>

          {/* -------------------------------- 3 ----------------------------- */}
          <div className="flex gap-6 flex-col md:flex-row ">
            {/* Agent email. */}
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Agent Email </span>
              </label>
              <input
                type="email"
                name="agent_email"
                placeholder="Agent Email."
                className="input input-bordered input-accent w-full"
                required
              />
            </div>
          </div>
          {/* -------------------------------- 4 ----------------------------- */}
          <div className="flex gap-6 flex-col md:flex-row ">
            {/* Agent max price */}
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Maximum Price</span>
              </label>
              <input
                type="text"
                name="max_price"
                placeholder="Maximum Price "
                className="input input-bordered input-accent w-full"
                required
              />
            </div>

            {/* Agent min price */}
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Minimum Price</span>
              </label>
              <input
                type="text"
                name="min_price"
                placeholder="Minimun Price "
                className="input input-bordered input-accent w-full"
                required
              />
            </div>
          </div>
          {/* -------------------------------- 5 ----------------------------- */}
          <div className="flex gap-6 flex-col md:flex-row ">
            {/* Property title */}
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text"> Property Title</span>
              </label>
              <input
                type="text"
                name="property_title"
                placeholder=" Property title"
                className="input input-bordered input-accent w-full"
                required
              />
            </div>
          </div>
          {/* -------------------------------- 3 ----------------------------- */}
          <div className="flex gap-6 flex-col md:flex-row ">
            {/* Agent email. */}
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Descrption</span>
              </label>
              <textarea
                type="text"
                name="description"
                placeholder="Description"
                className="input input-bordered input-accent w-full"
                required
              />
            </div>
          </div>

          <div className="form-control mt-6">
            <button type="submit" className="btn btn-outline btn-accent">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
