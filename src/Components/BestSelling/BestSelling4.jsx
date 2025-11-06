import { Link } from "react-router-dom";
import ShopCard from "../Card/ShopCard.jsx";
import { Flame } from "lucide-react";
import {useContextElement} from "../../context/Context.jsx";
import {useEffect, useState} from "react";
import LoadingDots from "../Custom/loadingDots.jsx";
import {getImageUrl} from "../../utils/util.js";

const BestSelling4 = () => {
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

    return (
        <section className="popular-dishes-section fix section-padding">
        <div className="popular-dishes-wrapper style1">
            <div className="shape1 d-none d-xxl-block"><img src="/assets/img/shape/popularDishesShape1_1.png" alt="shape" />
            </div>
            <div className="shape2 float-bob-y d-none d-xxl-block">
                <img src="/assets/img/shape/popularDishesShape1_2.png" alt="shape" />
            </div>

            <div className="container">
                <div className="title-area">
                    <div className="sub-title text-center text-danger wow fadeInUp d-flex flex-row justify-content-center align-items-center" data-wow-delay="0.5s">
                        <Flame className="me-2 text-danger" size={22} />
                        <p className='pt-1'>SPECIAL OFFERS</p>
                    </div>
                    <h2 className="title wow fadeInUp " data-wow-delay="0.7s">
                        BEST DEALS
                    </h2>
                </div>
                <div className="dishes-card-wrap style1 best-selling-area d-flex">
                    {products.slice(0,4).map((item, i) => (
                        <div key={i} className="dishes-card style1 wow fadeInUp col" data-wow-delay="0.2s">
                            <div className="dishes-thumb">
                                <img src={getImageUrl(item.img)} alt="thmb" />
                            </div>
                            <Link to="/menu">
                                <h3>{item.name}</h3>
                            </Link>
                            <p>{item.subtitle}</p>
                            <h6>{item.price} AED</h6>
                            <div className="social-profile">
                                <span className="plus-btn"> <Link href="#">
                                    <Flame/>
                                </Link></span>
                                <ul>
                                    <li><Link to="/cart"><i className="bi bi-basket2"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="container mt-5">
                <div className="title-area">
                    <div className="sub-title text-center text-danger wow fadeInUp d-flex flex-row justify-content-center align-items-center" data-wow-delay="0.5s">
                        <Flame className="me-2 text-danger" size={22} />
                        <p className='pt-1'>FRESH & PREMIUM CUTS</p>
                    </div>
                    <h2 className="title wow fadeInUp " data-wow-delay="0.7s">
                        SHOP
                    </h2>
                </div>
                <div className="dishes-card-wrap style1 best-selling-area">
                    {products.map((item, i) => (
                        <ShopCard
                            key={i}
                            img={getImageUrl(item.img)}
                            title={item.name}
                            content={item.subtitle}
                            price={item.price}
                        ></ShopCard>
                        ))}
                </div>
            </div>
        </div>

    </section>

    );
};

export default BestSelling4;