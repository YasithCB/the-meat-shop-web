import BreadCumb from "../Components/Common/BreadCumb";
import Cart from "../Components/Shop/Cart";

const CartPage = () => {
    return (
        <div>
             <BreadCumb
                bgimg="/assets/img/bg/breadcumb.jpg"
                Title="Confirm Checkout"
            ></BreadCumb>    
            <Cart></Cart>         
        </div>
    );
};

export default CartPage;