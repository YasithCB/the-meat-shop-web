import Testimonial2 from "../Components/Testimonial/Testimonial2";
import {useEffect, useState} from "react";
import {scrollToTop} from "../utils/util.js";
import {useLocation} from "react-router-dom";
import {useContextElement} from "../context/Context.jsx";
import {Flame} from "lucide-react";
import ShopCard from "../Components/Card/ShopCard.jsx";
import LoadingDots from "../Components/Custom/loadingDots.jsx";

const ShopSubCategoriesPage = () => {
    const location = useLocation();
    const { categoryName, categoryId } = location.state || {};

    useEffect(() => {
        scrollToTop();
    })

    const {products, fetchProductsFromDB} = useContextElement();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                // Delay to ensure context/user is ready
                await new Promise((res) => setTimeout(res, 1500));
                await fetchProductsFromDB();
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading || products.length === 0) {
        return <LoadingDots/>;
    }

    return (
        <div>
            <section className="popular-dishes-section fix section-padding pt-4">
                <div className="popular-dishes-wrapper style1">
                    <div className="shape1 d-none d-xxl-block">
                        <img src="/assets/img/shape/popularDishesShape1_1.png" alt="shape"/>
                    </div>
                    <div className="shape2 float-bob-y d-none d-xxl-block">
                        <img src="/assets/img/shape/popularDishesShape1_2.png" alt="shape"/>
                    </div>

                    <div className="container mt-5">
                        <div className="title-area">
                            <div
                                className="sub-title text-center text-danger wow fadeInUp d-flex flex-row justify-content-center align-items-center"
                                data-wow-delay="0.5s">
                                <Flame className="me-2 text-danger" size={22}/>
                                <p className='pt-1'>FRESH & PREMIUM CUTS</p>
                            </div>
                            <h2 className="title wow fadeInUp" data-wow-delay="0.7s">
                                {categoryName}
                            </h2>
                        </div>
                        <div className="dishes-card-wrap style1 best-selling-area">
                            {products
                                .filter((item) => item.category_id === categoryId)
                                .map((item, i) => (
                                    <ShopCard key={i} product={item} />
                                ))}

                        </div>
                    </div>
                </div>

            </section>

            <Testimonial2></Testimonial2>
        </div>
    );
};

export default ShopSubCategoriesPage;