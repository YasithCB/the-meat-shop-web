import { Link } from "react-router-dom";
import { Flame } from "lucide-react";
import {useContextElement} from "../../context/Context.jsx";
import {useEffect, useState} from "react";
import LoadingDots from "../Custom/loadingDots.jsx";
import {formatDate, getImageUrl} from "../../utils/util.js";

const SuppliersSlider = () => {
    const { suppliers, fetchSuppliersFromDB } = useContextElement();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                // Delay to ensure context/user is ready
                await new Promise((res) => setTimeout(res, 1500));
                await fetchSuppliersFromDB();
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading || suppliers.length === 0) {
        return <LoadingDots />;
    }

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
                            <p className='pt-1 text-danger'>TOP 4</p>
                        </div>
                        <h2 className="title wow fadeInUp" data-wow-delay="0.7s">
                            Best Suppliers
                        </h2>
                    </div>
                    <div className="dishes-card-wrap style1">
                        {suppliers.slice(0,5).map((item, i) => (
                            <div key={i} className="dishes-card supplier-card style1 wow fadeInUp" data-wow-delay="0.2s">
                                <div className="dishes-thumb">
                                    <img src={getImageUrl(item.logo)} alt="thmb" />
                                </div>
                                <Link to="/menu">
                                    <h3>{item.name}</h3>
                                </Link>
                                <p>Joined in {formatDate(item.created_at)}</p>
                                <h6>{item.contact_email} </h6>
                                <div className="social-profile">
                                    <span className="plus-btn"> <Link to="/shop/wishlist"> <i className="bi bi-heart"></i></Link></span>
                                    <ul>
                                        <li><Link to="/shop/cart"><i className="bi bi-basket2"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="btn-wrapper wow fadeInUp d-flex justify-content-center" data-wow-delay="0.9s">
                        <Link className="theme-btn" to="/suppliers">VIEW ALL SUPPLIERS <i className="bi bi-arrow-right"></i></Link>
                    </div>
                </div>
            </div>

        </section>
    )
};

export default SuppliersSlider;