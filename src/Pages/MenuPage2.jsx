import BestSelling4 from "../Components/BestSelling/BestSelling4";
import BreadCumb from "../Components/Common/BreadCumb";
import Testimonial2 from "../Components/Testimonial/Testimonial2";
import {useEffect} from "react";
import {scrollToTop} from "../utils/util.js";

const MenuPage2 = () => {
    useEffect(() => {
        scrollToTop();
    })

    return (
        <div>
             <BreadCumb
                bgimg="/assets/img/bg/breadcumb.jpg"
                Title="Shop"
            ></BreadCumb>  
            <BestSelling4></BestSelling4>   
            <Testimonial2></Testimonial2>
        </div>
    );
};

export default MenuPage2;