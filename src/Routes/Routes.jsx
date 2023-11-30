
import { createBrowserRouter } from 'react-router-dom';
import Login from '../Authentication/Login';
import PrivateRoute from '../Authentication/PrivateRoute';
import SignIn from '../Authentication/SignIn';
import Whishlist from '../Dashboard/AddWhishlist/Whishlist';
import Dashboard from '../Dashboard/Dashboard';
import Brought from '../Dashboard/Dashpage/Brought';
import MyProfile from '../Dashboard/Dashpage/MyProfile';
import Review from '../Dashboard/Dashpage/Review';
import AllProperties from '../pages/AllProperties.jsx/AllProperties';
import PropertyDetail from '../pages/Home/Advertise/PropertyDetail';
import Home from '../pages/Home/Home';
import MakeAnOffer from './../Dashboard/AddWhishlist/MakeAnOffer';
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
                element:<Brought></Brought> ,
            },
            {
                path:'myReview',
                element:<Review></Review> ,
            },
            {
                path:'makeOffer',
                element:<MakeAnOffer></MakeAnOffer> ,
            },
        ]
    }
])

export default router;