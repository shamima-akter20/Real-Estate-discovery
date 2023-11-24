
import { createBrowserRouter } from 'react-router-dom';
import Login from '../Authentication/Login';
import SignIn from '../Authentication/SignIn';
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
                path:'/login',
                element:<Login></Login>,
            },
            {
                path:'/signin',
                element:<SignIn></SignIn> ,
            },
          
        ]
    },
])

export default router;