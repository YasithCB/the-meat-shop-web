import BreadCumb from "../Components/Common/BreadCumb";
import Checkout from "../Components/Shop/Checkout";
import {useLocation} from "react-router-dom";
import {useContextElement} from "../context/Context.jsx";
import { useEffect} from "react";

const CheckoutPage = () => {
    const location = useLocation();
    const { product, quantity } = location.state || {};

    const { addProductToCart } = useContextElement();

    useEffect(() => {
        addProductToCart(product)
    }, []);

    return (
        <div>
              <BreadCumb
                bgimg="/assets/img/bg/breadcumb.jpg"
                Title="Checkout"
            ></BreadCumb>   
            <Checkout product={product} quantity={quantity}></Checkout>
        </div>
    );
};

export default CheckoutPage;