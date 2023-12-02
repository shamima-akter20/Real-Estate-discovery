import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ManageUsers = () => {
  const [tabIndex, setTabIndex] = useState(0);

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
            <Tab><h1 className="font-display text-slate-500">User</h1></Tab>
            <Tab><h1 className="font-display text-slate-500">Agent</h1></Tab>
            <Tab><h1 className="font-display text-slate-500">Admin</h1></Tab>
          </TabList>
          <TabPanel>
            <div className="">
              <h1 className="font-display text-xl p-6">User</h1>
              <div className="card w-96 bg-base-100  ">
                <div className=" my-5 rounded-3xl p-6 bg-slate-100">
                  <h2 className="card-title">Name :</h2>
                  <h2 className="text-base font-semibold py-2">Email :</h2>

                  <div className="flex flex-col gap-3">
                    <button className="btn btn-active btn-accent ">
                      <i className="fa-solid fa-user-gear "></i>Make Admin
                    </button>
                    <button className="btn btn-active btn-accent">
                      <i className="fa-solid fa-user-tie "></i>Make Agent
                    </button>
                    <button className="btn btn-active btn-accent">
                      <i className="fa-solid fa-user-secret"></i>Make as Fraud
                    </button>
                    <button className="btn btn-active btn-accent">
                      <i className="fa-solid fa-person-circle-minus"></i>Delete
                      User
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
          
          <TabPanel>
            <div className="">
            <h1 className="font-display text-xl p-6">Agent</h1>
              <div className="card w-96 bg-base-100  ">
                <div className=" my-5 rounded-3xl p-6 bg-slate-100">
                  <h2 className="card-title">Name :</h2>
                  <h2 className="text-base font-semibold py-2">Email :</h2>

                  <div className="flex flex-col gap-3">
                    <button className="btn btn-active btn-accent ">
                      <i className="fa-solid fa-user-gear "></i>Make Admin
                    </button>
                    <button className="btn btn-active btn-accent">
                      <i className="fa-solid fa-user-tie "></i>Make Agent
                    </button>
                    <button className="btn btn-active btn-accent">
                      <i className="fa-solid fa-user-secret"></i>Make as Fraud
                    </button>
                    <button className="btn btn-active btn-accent">
                      <i className="fa-solid fa-person-circle-minus"></i>Delete
                      User
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>

          <TabPanel>
            <div className="">
            <h1 className="font-display text-xl p-6">Admin</h1>
              <div className="card w-96 bg-base-100  ">
                <div className=" my-5 rounded-3xl p-6 bg-slate-100">
                  <h2 className="card-title">Name :</h2>
                  <h2 className="text-base font-semibold py-2">Email :</h2>

                  <div className="flex flex-col gap-3">
                    <button className="btn btn-active btn-accent ">
                      <i className="fa-solid fa-user-gear "></i>Make Admin
                    </button>
                    <button className="btn btn-active btn-accent">
                      <i className="fa-solid fa-user-tie "></i>Make Agent
                    </button>
                    <button className="btn btn-active btn-accent">
                      <i className="fa-solid fa-user-secret"></i>Make as Fraud
                    </button>
                    <button className="btn btn-active btn-accent">
                      <i className="fa-solid fa-person-circle-minus"></i>Delete
                      User
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ManageUsers;
