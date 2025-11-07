import BestSelling1 from "../Components/BestSelling/BestSelling1";
import ShopDetails from "../Components/ShopDetails/ShopDetails";
import {useLocation} from "react-router-dom";

const ShopDetailsPage = () => {
    const location = useLocation();
    const { product } = location.state || {};

    return (
        <div>
            <ShopDetails product={product}></ShopDetails>
            <BestSelling1></BestSelling1>   
        </div>
    );
};

export default ShopDetailsPage;