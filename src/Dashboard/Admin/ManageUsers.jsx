import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Swal from "sweetalert2";
import LoadingSpiner from "../../components/LoadingSpiner";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useUsersQuery from "../../hooks/users/useUsersQuery";

const ManageUsers = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const { data = [], isPending, refetch } = useUsersQuery();
  
  const axiosSecure = useAxiosSecure()
  
  if (isPending) return <LoadingSpiner />;

  const admins = data?.filter((user) => user?.role === "admin");

  const users = data?.filter((user) => user?.role === "user");

  const agents = data?.filter((user) => user?.role === "agent");

  // console.log("admins", admins);

  // console.log("users", users);
  // console.log("agent", agents);

  const handleAdmin = id=> {
    axiosSecure.patch(`/users/${id}`, {role: 'admin'})
    .then(res=> {
      console.log(res.data);
      if(res.data.modifiedCount){
        refetch()
        Swal.fire('admin banano hoyeche') // eta thik kore diyen ami banglish likhlam.. 
      }
    })
  }

  const handleAgent = id=> {
    axiosSecure.patch(`/users/${id}`, {role: 'agent'})
    .then(res=> {
      console.log(res.data);
      if(res.data.modifiedCount){
        refetch()
        Swal.fire('agent banano hoyeche') // eta thik kore diyen ami banglish likhlam.. 
      }
    })
  }

  const handleDelete = id=> {
    axiosSecure.delete(`/users/${id}`)
    .then(res=> {
      console.log(res.data);
      if(res.data.deletedCount){
        refetch()
        Swal.fire('user deleted successfully!') // eta thik kore diyen ami banglish likhlam.. 
      }
    })
  }

  const handleFraud = id=> {
    axiosSecure.patch(`/users/${id}`, {role: 'fraud', status: 'blocked'})
    .then(res=> {
      console.log(res.data);
      if(res.data.modifiedCount){
        refetch()
        Swal.fire('Role set as Fraude') // eta thik kore diyen ami banglish likhlam.. 
      }
    })
  }

  
  const handleUser = id=> {
    axiosSecure.patch(`/users/${id}`, {role: 'user'})
    .then(res=> {
      console.log(res.data);
      if(res.data.modifiedCount){
        refetch()
        Swal.fire('Role set as Fraude') // eta thik kore diyen ami banglish likhlam.. 
      }
    })
  }


  return (
    <div className="py-8 px-4 md:px-8">
      <Helmet>
        <title>Manage Users - Elite Estate Discoveries</title>
      </Helmet>

      <div className="border-5  border-l-8 border-teal-600 px-1 md:px-6">
        <h1 className="text-xl md:text-4xl font-display text-teal-600">
          Manage Users
        </h1>
      </div>

      <div className="pt-6">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>
              <h1 className="font-display text-slate-500">User</h1>
            </Tab>
            <Tab>
              <h1 className="font-display text-slate-500">Agent</h1>
            </Tab>
            <Tab>
              <h1 className="font-display text-slate-500">Admin</h1>
            </Tab>
          </TabList>
          <TabPanel>
            {users?.map((user) => (
              <div key={user?._id} className="">
                <h1 className="font-display text-xl p-6">User</h1>
                <div className="card w-96 bg-base-100  ">
                  <div className=" my-5 rounded-3xl p-6 bg-slate-100">
                    <h2 className="card-title">Name : {user?.name}</h2>
                    <h2 className="text-base font-semibold py-2">Email : {user?.email}</h2>

                    <div className="flex flex-col gap-3">
                      <button onClick={()=> handleAdmin(user?._id)} className="btn btn-active btn-accent ">
                        <i className="fa-solid fa-user-gear "></i>Make Admin
                      </button>
                      <button onClick={()=> handleAgent(user?._id)} className="btn btn-active btn-accent">
                        <i className="fa-solid fa-user-tie "></i>Make Agent
                      </button>
                      
                      <button onClick={()=> handleDelete(user?._id)} className="btn btn-active btn-accent">
                        <i className="fa-solid fa-person-circle-minus"></i>
                        Delete User
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </TabPanel>

          <TabPanel>
          {agents?.map((user) => (
              <div key={user?._id} className="">
                <h1 className="font-display text-xl p-6">Agent</h1>
                <div className="card w-96 bg-base-100  ">
                  <div className=" my-5 rounded-3xl p-6 bg-slate-100">
                    <h2 className="card-title">Name : {user?.name}</h2>
                    <h2 className="text-base font-semibold py-2">Email : {user?.email}</h2>

                    <div className="flex flex-col gap-3">
                      {
                        user?.status === 'fraud' ? <div>Fruad</div> : <button onClick={()=> handleAdmin(user?._id)} className="btn btn-active btn-accent ">
                        <i className="fa-solid fa-user-gear "></i>Make Admin
                      </button>
                      }

                      {
                        user?.status === 'fraud' ? <div>Fruad</div> : <button onClick={()=> handleUser(user?._id)} className="btn btn-active btn-accent">
                        <i className="fa-solid fa-user-tie "></i>Make User
                      </button>
                      }
                      
                      <button onClick={()=> handleFraud(user?._id)} className="btn btn-active btn-accent">
                        <i className="fa-solid fa-user-secret"></i>Make as Fraud
                      </button>
                      <button onClick={()=> handleDelete(user?._id)} className="btn btn-active btn-accent">
                        <i className="fa-solid fa-person-circle-minus"></i>
                        Delete User
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </TabPanel>

          <TabPanel>
          {admins?.map((user) => (
              <div key={user?._id} className="">
                <h1 className="font-display text-xl p-6">Admin</h1>
                <div className="card w-96 bg-base-100  ">
                  <div className=" my-5 rounded-3xl p-6 bg-slate-100">
                    <h2 className="card-title">Name : {user?.name}</h2>
                    <h2 className="text-base font-semibold py-2">Email : {user?.email}</h2>

                    <div className="flex flex-col gap-3">
                      <button onClick={()=> handleUser(user?._id)} className="btn btn-active btn-accent ">
                        <i className="fa-solid fa-user-gear "></i>Make user
                      </button>
                      <button onClick={()=> handleAgent(user?._id)} className="btn btn-active btn-accent">
                        <i className="fa-solid fa-user-tie "></i>Make Agent
                      </button>
                     
                      <button onClick={()=> handleDelete(user?._id)} className="btn btn-active btn-accent">
                        <i className="fa-solid fa-person-circle-minus"></i>
                        Delete User
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ManageUsers;
