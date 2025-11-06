import About1 from "../Components/About/About1";
import BestSelling1 from "../Components/BestSelling/BestSelling1";
import Blog1 from "../Components/Blog/Blog1";
import CtaBanner1 from "../Components/CtaBanner/CtaBanner1";
import ShopShowcase from "../Components/ShopShowcase/ShopShowcase.jsx";
import ProductsIconSlider from "../Components/Products/ProductsIconSlider.jsx";
import Gallery1 from "../Components/Gallery/Gallery1";
import HeroBanner1 from "../Components/HeroBanner/HeroBanner1";
import Offer1 from "../Components/Offer/Offer1";
import Testimonial1 from "../Components/Testimonial/Testimonial1";
import Timer1 from "../Components/Timer/Timer1";
import SuppliersSlider from "../Components/Custom/SuppliersSlider.jsx";
import {useEffect} from "react";
import {scrollToTop} from "../utils/util.js";

const Home = () => {

    useEffect(() => {
        scrollToTop();
    })

    return (
        <div className="bg-color2">
            <HeroBanner1></HeroBanner1>
            <ProductsIconSlider></ProductsIconSlider>
            <Offer1></Offer1>
            <About1></About1>
            <BestSelling1></BestSelling1>
            <SuppliersSlider />
            <CtaBanner1></CtaBanner1>
            <ShopShowcase></ShopShowcase>
            <Timer1></Timer1>
            <Testimonial1 className=''></Testimonial1>
            <Blog1></Blog1>
            <Gallery1></Gallery1>
        </div>
    );
};

export default Home;