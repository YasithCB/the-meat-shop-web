import { Link } from "react-router-dom";
import {Flame} from "lucide-react";
import {useContextElement} from "../../context/Context.jsx";
import LoadingDots from "../Custom/loadingDots.jsx";
import {getImageUrl} from "../../utils/util.js";

const BestSelling1 = () => {
    const { products } = useContextElement();

    if (products.length === 0) return <LoadingDots />

    return (
        <section className="popular-dishes-section fix section-padding">
        <div className="popular-dishes-wrapper style1">
            <div className="shape1 d-none d-xxl-block"><img src="/assets/img/shape/popularDishesShape1_1.png" alt="shape" />
            </div>
            <div className="shape2 float-bob-y d-none d-xxl-block"><img src="/assets/img/shape/popularDishesShape1_2.png"
                    alt="shape" /></div>
            <div className="container">
                <div className="title-area">
                    <div
                        className="sub-title text-center wow fadeInUp d-flex flex-row justify-content-center align-items-center"
                        data-wow-delay="0.5s">
                        <Flame className="me-2 text-danger" size={22}/>
                        <p className='pt-1 text-danger'>WHATS POPULAR</p>
                    </div>
                    <h2 className="title wow fadeInUp" data-wow-delay="0.7s">
                        Most Moving Meats
                    </h2>
                </div>
                <div className="dishes-card-wrap style1">
                {products.slice(0,5).map((item, i) => (
                    <div key={i} className="dishes-card style1 wow fadeInUp" data-wow-delay="0.2s">
                        <div className="dishes-thumb">
                            <img src={getImageUrl(item.img)} alt="thmb" />
                        </div>
                        <Link to="/menu">
                            <h3>{item.name}</h3>
                        </Link>
                        <p>Price/KG</p>
                        <h6>{item.price} AED</h6>
                        <div className="social-profile">
                            <span className="plus-btn"> <Link to="/shop/wishlist"> <i className="bi bi-heart"></i></Link></span>
                            <ul>
                                <li><Link to="/shop/cart"><i className="bi bi-basket2"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                    ))}
                </div>
                <div className="btn-wrapper  wow fadeInUp" data-wow-delay="0.9s">
                    <Link className="theme-btn" to="/menu2">VIEW ALL PRODUCTS <i className="bi bi-arrow-right"></i></Link>
                </div>
            </div>
        </div>

    </section>

    );
};

export default BestSelling1;