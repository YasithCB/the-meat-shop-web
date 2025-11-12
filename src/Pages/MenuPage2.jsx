import BestSelling4 from "../Components/BestSelling/BestSelling4";
import BreadCumb from "../Components/Common/BreadCumb";
import {useEffect} from "react";
import {scrollToTop} from "../utils/util.js";
import CtaBanner4 from "../Components/CtaBanner/CtaBanner4.jsx";

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
            <CtaBanner4></CtaBanner4>
        </div>
    );
};

export default MenuPage2;