import BreadCumb from "../Components/Common/BreadCumb";
import Testimonial2 from "../Components/Testimonial/Testimonial2";
import {useEffect} from "react";
import {scrollToTop} from "../utils/util.js";
import {useLocation} from "react-router-dom";
import ShopSubCategories from "../Components/Custom/ShopSubCategories.jsx";

const ShopSubCategoriesPage = () => {
    const location = useLocation();
    const { categoryName, categoryId } = location.state || {};

    useEffect(() => {
        scrollToTop();
    })

    return (
        <div>
            <ShopSubCategories categoryId={categoryId} categoryName={categoryName} ></ShopSubCategories>
            <Testimonial2></Testimonial2>
        </div>
    );
};

export default ShopSubCategoriesPage;