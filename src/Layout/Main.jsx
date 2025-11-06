import { Outlet } from 'react-router-dom';
import Header1 from '../Components/Header/Header1';
import Footer1 from '../Components/Footer/Footer1';
import {ToastContainer} from "react-toastify";

const Main = () => {
    return (
        <div className='main-page-area bg-color2'>
            <Header1></Header1>
            <Outlet></Outlet>
            <Footer1></Footer1>

            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
};

export default Main;