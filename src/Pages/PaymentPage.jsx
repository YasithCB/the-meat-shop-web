import BreadCumb from "../Components/Common/BreadCumb";
import {useLocation} from "react-router-dom";
import Payment from "../Components/Shop/Payment.jsx";

const PaymentPage = () => {
    const location = useLocation();
    const { totalPrice, method } = location.state || {};

    return (
        <div>
            <BreadCumb
                bgimg="/assets/img/bg/breadcumb.jpg"
                Title="Payment"
            ></BreadCumb>
            <Payment method={method} totalPrice={totalPrice} ></Payment>
        </div>
    );
};

export default PaymentPage;