import BreadCumb from "../Components/Common/BreadCumb";
import {PaymentSuccess} from "../Components/Shop/PaymentSuccess.jsx";

const PaymentSuccessPage = () => {
    return (
        <div>
            <BreadCumb
                bgimg="/assets/img/bg/breadcumb.jpg"
                Title="Payment"
            ></BreadCumb>
            <PaymentSuccess ></PaymentSuccess>
        </div>
    );
};

export default PaymentSuccessPage;