import { Link } from "react-router-dom";
import { Flame } from "lucide-react";
import {useEffect, useState} from "react";
import LoadingDots from "../Custom/loadingDots.jsx";
import {getAllCategories} from "../../api/categoryAPI.js";
import {ICON_FOR_CATEGORY} from "../../data/Constants.js";

const ProductsIconSlider = () => {
    const [loading, setLoading] = useState(false);
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const resp = await getAllCategories();
                console.log('categories')
                console.log(resp)
                setCategories(resp.data)
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const getImage = (id) => {
        return ICON_FOR_CATEGORY[id] || "/icons/default.png";
    };

    if (loading || categories.length === 0) {
        return <LoadingDots />;
    }

    return (
        <section className="best-food-items-section fix section-padding bg-color2">
        <div className="best-food-wrapper">
            <div className="shape1 float-bob-y d-none d-xxl-block"><img src="/assets/img/shape/bestFoodItemsShape1_1.png"
                    alt="shape" /></div>
            <div className="shape2 float-bob-x d-none d-xxl-block"><img src="/assets/img/shape/bestFoodItemsShape1_2.png"
                    alt="shape" /></div>
            <div className="container">
                <div className="title-area">
                    <div className="sub-title text-center text-danger wow fadeInUp d-flex flex-row justify-content-center align-items-center" data-wow-delay="0.5s">
                        <Flame className="me-2 text-danger" size={22} />
                        <p className='pt-1'>Fresh & Premium Cuts</p>
                    </div>
                    <h2 className="title wow fadeInUp " data-wow-delay="0.7s">
                        EXPLORE CATEGORIES
                    </h2>
                </div>
                <div className="slider-area mb-n40">
                    <div className="swiper bestFoodItems-slider">
                        <div className="swiper-wrapper d-flex gap-3 cs_slider_gap_301 food-slider-item">
                            {categories.map((item, i) => (
                                <div key={i} className="swiper-slide col">
                                    <div className="single-food-items">
                                        <div className="item-thumb">
                                            <img src={getImage(item.id)} alt="thmb" />
                                            <div className="circle-shape">
                                                <img className="cir36" src="/assets/img/food-items/circleShape.png" alt="shape" />
                                            </div>
                                        </div>
                                        <div className="item-content">
                                            <h3>{item.name}</h3>
                                            <Link to="/shop/category" state={{categoryId : item.id, categoryName: item.name}} className="theme-btn style6"> Shop Now </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bestFoodItems-pagination"></div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default ProductsIconSlider;