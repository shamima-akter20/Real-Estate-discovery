import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="flex mx-4 md:mx-8 lg:mx-16 xl:mx-36 ">
            <div className="w-46 min-h-full bg-teal-100 text-teal-600 font-bold rounded-b-2xl">
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
                        <i className="fa-regular fa-paste"></i>  My reviews
                        </NavLink>
                    </li>
                    
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/" >
                        <i className="fa-solid fa-house"></i> Home
                        </NavLink>
                    </li>
                    
                </ul>
            </div>
     

            <div className="flex">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;