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
            </div>

            <div className="dishes-card-wrap style1 best-selling-area mx-5 px-lg-5">
                {categories.map((category, i) => (
                    <div key={i} className="dishes-card style1 wow fadeInUp" data-wow-delay="0.2s">
                        <div className="dishes-thumb">
                            <div className='item-thumb'>
                                <img src={getImage(category.id)} className='item-thumb-img' alt="thmb"/>
                            </div>
                            <div className="circle-shape">
                                <img className="cir36" src="/assets/img/food-items/circleShape.png" alt="shape" />
                            </div>
                        </div>
                        <div className="dishes-content pt-2">
                            <Link to="/shop/category">
                                <h3>{category.name}</h3>
                            </Link>
                            <Link to="/shop/category" state={{ categoryName: category.name, categoryId: category.id }} className="theme-btn style6">
                                <span>Shop Now</span>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
    );
};

export default ProductsIconSlider;