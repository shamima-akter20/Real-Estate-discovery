
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';

const Main = () => {
    const location = useLocation();
    // console.log(location);
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signin') ;

    return (
        <div>
            {noHeaderFooter || <Navbar></Navbar>}
          <div className='mx-6 md:mx-16 lg:mx-32 '>
          <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
          </div>
        </div>
    );
};

export default Main;