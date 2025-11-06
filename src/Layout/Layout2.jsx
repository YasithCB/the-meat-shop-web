import { Outlet } from 'react-router-dom';
import Header2 from '../Components/Header/Header2';
import Footer1 from '../Components/Footer/Footer1';

const Layout2 = () => {
    return (
        <div className='main-page-area2 bg-color2'>
            <Header2 />
            <Outlet />
            <Footer1 />
        </div>
    );
};

export default Layout2;
