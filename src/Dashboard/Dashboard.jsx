import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../Authentication/AuthProvider";
import useGetUserRole from "../hooks/useGetUserRole";

const Dashboard = () => {
  // const role = "agent"; 
  const {user} = useContext(AuthContext)

  const role = useGetUserRole(user?.email || '')

  console.log(role);
  
  return (
    <div className="flex mx-4 md:mx-8 lg:mx-16 xl:mx-36 ">
      <div className="w-46 min-h-full bg-teal-100 text-teal-600 font-bold rounded-b-2xl">
        {role === "admin" ? (
          /****** admin buirar route********** */
          <ul className="menu text-xs md:text-base lg:text-lg p-4">
            <li>
              <NavLink to="/dashboard/adminProfile">
                <i className="fa-solid fa-user"></i> Admin Profile
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/manageProperties">
                <i className="fa-solid fa-list-ul"></i> Manage Properties
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/manageReview">
                <i className="fa-solid fa-cart-shopping"></i> Manage Review
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/manageUsers">
                <i className="fa-regular fa-paste"></i> Manage Users
              </NavLink>
            </li>

            <div className="divider"></div>
            <li>
              <NavLink to="/">
                <i className="fa-solid fa-house"></i> Home
              </NavLink>
            </li>
          </ul>
        ) : role === "agent" /******** agent Route********* */ ? (
          <ul className="menu text-xs md:text-base lg:text-lg p-4">
            <li>
              <NavLink to="/dashboard/agentProfile">
                <i className="fa-solid fa-user"></i> Agent Profile
              </NavLink>
            </li>

            <li>
              <NavLink to="/dashboard/addProperty">
                <i className="fa-solid fa-plus"></i> Add Property
              </NavLink>
            </li>
            
            <li>
              <NavLink to="/dashboard/agentAddedProperties">
                <i className="fa-solid fa-list-ul"></i> My Added Properties
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/AgentSoldProperties">
                <i className="fa-solid fa-cart-shopping"></i> My Sold Properties
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/requestedProperties">
                <i className="fa-regular fa-paste"></i> Requested Properties
              </NavLink>
            </li>

            <div className="divider"></div>
            <li>
              <NavLink to="/">
                <i className="fa-solid fa-house"></i> Home
              </NavLink>
            </li>
          </ul>
        ) : (
          /******** user Route********* */
          <ul className="menu text-xs md:text-base lg:text-lg p-4">
            <li>
              <NavLink to="/dashboard/MyProfile">
                <i className="fa-solid fa-user"></i> My Profile
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/whishlist">
                <i className="fa-solid fa-list-ul"></i> Wishlist
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/propertyBrought">
                <i className="fa-solid fa-cart-shopping"></i> Property bought
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/myReview">
                <i className="fa-regular fa-paste"></i> My reviews
              </NavLink>
            </li>

            <div className="divider"></div>
            <li>
              <NavLink to="/">
                <i className="fa-solid fa-house"></i> Home
              </NavLink>
            </li>
          </ul>
        )}
      </div>

      <div className="flex">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
