
import { createBrowserRouter } from 'react-router-dom';
import Login from '../Authentication/Login';
import PrivateRoute from '../Authentication/PrivateRoute';
import SignIn from '../Authentication/SignIn';
import Dashboard from '../Dashboard/Dashboard';
import MyProfile from '../Dashboard/Dashpage/MyProfile';
import MyReview from '../Dashboard/MyReview';
import ProBrought from '../Dashboard/ProBrought';
import Whishlist from '../Dashboard/Whishlist';
import AllProperties from '../pages/AllProperties.jsx/AllProperties';
import PropertyDetail from '../pages/Home/Advertise/PropertyDetail';
import Home from '../pages/Home/Home';
import Main from './../Main/Main';

const router = createBrowserRouter([
    {
        path: "/",
        element:<Main></Main> ,
        children:[
            {
                path:'/',
                element:<Home></Home>,
            },
            {
                path:'/propertyDetail',
                element:<PropertyDetail></PropertyDetail> ,
            },
            {
                path:'/allProperty',
                element:<PrivateRoute><AllProperties></AllProperties></PrivateRoute>  ,
            },
            {
                path:'/login',
                element:<Login></Login>,
            },
            {
                path:'/signin',
                element:<SignIn></SignIn> ,
            },
          
        ]
    },
    {
        path:'dashboard',
        element: <Dashboard></Dashboard>,
        children:[
            {
                path:'MyProfile',
                element:<MyProfile></MyProfile>,
            },
            {
                path:'whishlist',
                element:<Whishlist></Whishlist> ,
            },
            {
                path:'propertyBrought',
                element:<ProBrought></ProBrought> ,
            },
            {
                path:'myReview',
                element:<MyReview></MyReview> ,
            },
        ]
    }
])

export default router;