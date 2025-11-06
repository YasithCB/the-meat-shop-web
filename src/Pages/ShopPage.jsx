import BreadCumb from "../Components/Common/BreadCumb";
import Shop1 from "../Components/Shop/Shop1";
import {useEffect} from "react";
import {scrollToTop} from "../utils/util.js";

const ShopPage = () => {
    useEffect(() => {
        scrollToTop();
    })

    return (
        <div>
             <BreadCumb
                bgimg="/assets/img/bg/breadcumb.jpg"
                Title="Shop"
            ></BreadCumb>  
            <Shop1></Shop1>          
        </div>
    );
};

export default ShopPage;