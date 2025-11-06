import Blog3 from "../Components/Blog/Blog3";
import BreadCumb from "../Components/Common/BreadCumb";
import {useEffect} from "react";
import {scrollToTop} from "../utils/util.js";

const BlogPage = () => {
    useEffect(() => {
        scrollToTop();
    })

    return (
        <div>
             <BreadCumb
                bgimg="/assets/img/bg/breadcumb.jpg"
                Title="Blog"
            ></BreadCumb>   
            <Blog3></Blog3>         
        </div>
    );
};

export default BlogPage;