import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Authentication/AuthProvider";
import LoadingSpiner from "../../components/LoadingSpiner";
import useGetAUser from "../../hooks/users/useGetAuser";

const AdminProfile = () => {
  const {user} = useContext(AuthContext)
  const {data, isPending} = useGetAUser(user?.email)
  if(isPending) return <LoadingSpiner/>
  console.log(data);
  console.log(user);
  return (
    <div className="py-8 px-4 md:px-8">
      <Helmet>
        <title>Admin Profile - Elite Estate Discoveries</title>
      </Helmet>

      <div className="border-5  border-l-8 border-teal-600 px-1 md:px-6">
        <h1 className="text-xl md:text-4xl font-display text-teal-600">
          Admin Profile
        </h1>
      </div>

      <div className="flex flex-col md:flex-row gap-10 px-2 md:px-10 py-10">
        <div className="">
          <img className="h-36" src={data?.photoURL} alt="" />
        </div>
        <div className=" ">
          <h1 className="py-2">
            <span className="font-bold">User Name : {data?.name} </span>
          </h1>
          <h1 className="py-2">
            <span className="font-bold">User Email : {data?.email}</span> {}
          </h1>
          <h1 className="py-2">
            <span className="font-bold">Login Time : {user?.metadata?.lastSignInTime}</span>
            {}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
