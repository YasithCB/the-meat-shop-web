import BreadCumb from "../Components/Common/BreadCumb";
import {useLocation} from "react-router-dom";
import Payment from "../Components/Shop/Payment.jsx";

const PaymentPage = () => {
    const location = useLocation();
    const { totalPrice, method, product } = location.state || {};

    return (
        <div>
            <BreadCumb
                bgimg="/assets/img/bg/breadcumb.jpg"
                Title="Payment"
            ></BreadCumb>
            <Payment method={method} totalPrice={totalPrice} product={product} ></Payment>
        </div>
    );
};

export default PaymentPage;