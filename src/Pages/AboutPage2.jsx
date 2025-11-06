import About2 from "../Components/About/About2";
import Blog1 from "../Components/Blog/Blog1";
import BreadCumb from "../Components/Common/BreadCumb";
import Testimonial1 from "../Components/Testimonial/Testimonial1";
import CtaBanner4 from "../Components/CtaBanner/CtaBanner4.jsx";
import {useEffect} from "react";
import {scrollToTop} from "../utils/util.js";

const AboutPage2 = () => {
    useEffect(() => {
        scrollToTop();
    })

    return (
        <div>
             <BreadCumb
                bgimg="/assets/img/bg/breadcumb.jpg"
                Title="About Us"
            ></BreadCumb>   
            <About2></About2>
            <Testimonial1></Testimonial1>
            <CtaBanner4 className='pb-0' ></CtaBanner4>
            <Blog1></Blog1>
        </div>
    );
};

export default AboutPage2;