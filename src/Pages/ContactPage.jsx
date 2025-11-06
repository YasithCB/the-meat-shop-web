import BreadCumb from "../Components/Common/BreadCumb";
import Contact3 from "../Components/Contact/Contact3";
import {useEffect} from "react";
import {scrollToTop} from "../utils/util.js";

const ContactPage = () => {
    useEffect(() => {
        scrollToTop();
    })

    return (
        <div>
             <BreadCumb
                bgimg="/assets/img/bg/breadcumb.jpg"
                Title="Contact Us"
            ></BreadCumb> 
            <Contact3></Contact3>            
        </div>
    );
};

export default ContactPage;