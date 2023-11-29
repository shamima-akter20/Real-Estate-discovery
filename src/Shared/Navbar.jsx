import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Authentication/AuthProvider";

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext);
  const handleLogOut = () =>{
    logOut()
    .then(() =>{})
    .catch(error => console.log(error));
  }

  const navLink = (
    <>
      <div className="flex lg:flex-row flex-col lg:py-0 ">
        <Link
          to="/"
          className="lg:py-0 text-center lg:px-3 hover:text-slate-400 rounded-3xl  py-1 font-bold text-teal-600"
        >
          Home
        </Link>
        <Link
          to="/allProperty"
          className="lg:py-0 text-center lg:px-3 hover:text-slate-400 rounded-3xl  py-1 font-bold text-teal-600"
        >
          All Properties
        </Link>
        <Link
          to='/dashboard'
          className="lg:py-0 text-center lg:px-3 hover:text-slate-400 rounded-3xl  py-1 font-bold text-teal-600"
        >
          Dashboard
        </Link>
  
      </div>
    </>
  );


  return (
    <div className="mr-6 md:mx-12 lg:mx-32">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <i className="fa-solid fa-bars text-teal-600 text-2xl"></i>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLink}
            </ul>
          </div>
          
          {/* ----------------------------------------- */}
          {/*                   LOGO                    */}
          {/* ----------------------------------------- */}
          <div className="flex justify-center items-center">
            <img className="h-5 md:h-10" src="https://i.ibb.co/jLtcMKC/teal.png" alt="" />
            <div className="font-bold  ">
                <h1 className="text-teal-600 font-display md:font-extrabold text-[9px] md:text-xl">Elite Estate</h1>
                <h1 className="text-slate-700 -mt-2 text-[8px] md:text-base">Discoveries</h1>
            </div>
          </div>

        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLink}</ul>
        </div>

       
        
        <div className="navbar-end">

          {/* User Image and name */}
          {user && (
            <div
              className="flex justify-center items-center 
      px-2 rounded-3xl  gap-2"
            >
              <img
                className="h-6 w-6 rounded-full"
                src={user?.photoURL
                }
                alt=""
              />
              {/* <h5 className="hidden md:inline  justify-center items-center">
                {user.displayName}
              </h5> */}
            </div>
          )}


         {
          user ?
          <button onClick={handleLogOut} className="btn btn-outline btn-accent btn-sm">logOut</button>
          :
          <Link to="/login">
          <button className="btn btn-outline btn-accent btn-sm">login</button>
          </Link>
         }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
