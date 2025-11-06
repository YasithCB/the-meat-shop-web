import { Link } from "react-router-dom";
import Slider from "react-slick";
import { Flame } from "lucide-react";
import {useContextElement} from "../../context/Context.jsx";
import {useEffect, useState} from "react";
import LoadingDots from "../Custom/loadingDots.jsx";
import {getImageUrl} from "../../utils/util.js";

const ProductsIconSlider = () => {
    const { products, fetchProductsFromDB } = useContextElement();
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
        return <LoadingDots />;
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 4000,        
        responsive: [
          {
            breakpoint: 1399,
            settings: {
              slidesToShow: 4,
            }
          },
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 2,
            }
          },{
            breakpoint: 575,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      }; 

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
                        EXPLORE VARIETIES
                    </h2>
                </div>
                <div className="slider-area mb-n40">
                    <div className="swiper bestFoodItems-slider">
                        <div className="swiper-wrapper cs_slider_gap_301 food-slider-item">
                        <Slider {...settings}>
                        {products.map((item, i) => (
                            <div key={i} className="swiper-slide">
                                <div className="single-food-items">
                                    <div className="item-thumb">
                                        <img src={getImageUrl(item.iconImg)} alt="thmb" />
                                        <div className="circle-shape"><img className="cir36"
                                                                           src="/assets/img/food-items/circleShape.png" alt="shape" /></div>
                                    </div>
                                    <div className="item-content">
                                        <Link to="/menu">
                                            <h3>{item.name}</h3>
                                        </Link>
                                        <div className="text">Price/KG</div>
                                        <h6>{item.price} AED</h6>
                                    </div>
                                </div>
                            </div>
                            ))}
                            </Slider>
                           
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