import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Authentication/AuthProvider";

const AgentProfile = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <div className="pt-10 px-4 md:px-8">

      <Helmet>
        <title>Agent Profile - Elite Estate Discoveries</title>
      </Helmet>

      <div className="border-5 border-l-8 border-teal-600 px-6">
        <h1 className="text-2xl md:text-4xl font-display text-teal-600">
         Agent Profile
        </h1>
      </div>

      <div className="flex flex-col md:flex-row gap-10 px-2 md:px-10 py-10">
        <div className="">
          <img className="h-36" src={user?.photoURL} alt="" />
        </div>
        <div className=" ">
          <h1 className="py-2">
            <span className="font-bold">User Name :</span> {user?.displayName}
          </h1>
          <h1 className="py-2">
            <span className="font-bold">User Email :</span> {user?.email}
          </h1>
          <h1 className="py-2">
            <span className="font-bold">Login Time :</span>{" "}
            {user?.reloadUserInfo.lastRefreshAt}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AgentProfile;