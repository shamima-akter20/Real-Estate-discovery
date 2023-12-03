
import { createBrowserRouter } from 'react-router-dom';
import Login from '../Authentication/Login';
import PrivateRoute from '../Authentication/PrivateRoute';
import SignIn from '../Authentication/SignIn';
import Whishlist from '../Dashboard/AddWhishlist/Whishlist';
import AdminProfile from '../Dashboard/Admin/AdminProfile';
import ManageProperties from '../Dashboard/Admin/ManageProperties';
import ManageReview from '../Dashboard/Admin/ManageReview';
import ManageUsers from '../Dashboard/Admin/ManageUsers';
import Dashboard from '../Dashboard/Dashboard';
import Brought from '../Dashboard/Dashpage/Brought';
import MyProfile from '../Dashboard/Dashpage/MyProfile';
import Review from '../Dashboard/Dashpage/Review';
import AddProperty from '../Dashboard/agent/AddProperty';
import AgentAddedProperties from '../Dashboard/agent/AgentAddedProperties';
import AgentProfile from '../Dashboard/agent/AgentProfile';
import AgentSoldProperties from '../Dashboard/agent/AgentSoldProperties';
import RequestedProperties from '../Dashboard/agent/RequestedProperties';
import Update from '../Dashboard/agent/Update';
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
                path:'/propertyDetail/:id',
                element:<PrivateRoute><PropertyDetail></PropertyDetail></PrivateRoute> ,
            },
            {
                path:'/allProperty',
                element:<PrivateRoute><AllProperties></AllProperties></PrivateRoute>  ,
            },
            {
                path:'/login',
                element:<Login></Login> ,
            },
            {
                path:'/signin',
                element:<SignIn></SignIn> ,
            },
            {
                path:'addReview',
                element: <PrivateRoute></PrivateRoute> ,
            },
          
        ]
    },
    {
        path:'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute> ,
        children:[
            /*********** user routes ************* */
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
                path:'makeOffer/:id',
                element:<MakeAnOffer></MakeAnOffer> ,
            },
            /**********  agent routes ************** */
           {
            path: 'agentProfile',
            element: <AgentProfile/>,
           },
           {
            path: 'agentAddedProperties',
            element: <AgentAddedProperties></AgentAddedProperties>,
           },
           {
            path: 'AgentSoldProperties',
            element: <AgentSoldProperties></AgentSoldProperties>,
           },
           {
            path: 'requestedProperties',
            element: <RequestedProperties></RequestedProperties>
           },
           {
            path: 'update/:id',
            element:<Update></Update>
           },
           {
            path: 'addProperty',
            element:<AddProperty></AddProperty>
           },
        //++++++++++++++++++++++++++++++++  admin betar route  +++++++++++++++++++++++++++++++
           {
            path: 'adminProfile',
            element: <AdminProfile></AdminProfile>  ,
           },
           {
            path: 'manageProperties',
            element: <ManageProperties></ManageProperties>  ,
           },
           {
            path: 'manageReview',
            element: <ManageReview></ManageReview> ,
           },
           {
            path: 'manageUsers',
            element: <ManageUsers></ManageUsers> ,
           },
         
        ]
    }
])

export default router;