import { useEffect, useState } from "react";
import {formatDate, getImageUrl, scrollToTop} from "../utils/util.js";
import { useContextElement } from "../context/Context.jsx";
import { Store, ShieldCheck  } from "lucide-react";
import LoadingDots from "../Components/Custom/loadingDots.jsx";
import { Link } from "react-router-dom";
import CtaBanner4 from "../Components/CtaBanner/CtaBanner4.jsx";

const SuppliersPage = () => {
    const { suppliers, fetchSuppliersFromDB } = useContextElement();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        scrollToTop();

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
        <div>
            <section className="popular-dishes-section fix section-padding pt-4">
                <div className="popular-dishes-wrapper style1">
                    <div className="shape1 d-none d-xxl-block">
                        <img src="/assets/img/shape/popularDishesShape1_1.png" alt="shape" />
                    </div>
                    <div className="shape2 float-bob-y d-none d-xxl-block">
                        <img src="/assets/img/shape/popularDishesShape1_2.png" alt="shape" />
                    </div>

                    <div className="container mt-5">
                        <div className="title-area">
                            <div
                                className="sub-title text-center text-danger wow fadeInUp d-flex flex-row justify-content-center align-items-center"
                                data-wow-delay="0.5s"
                            >
                                <Store  className="me-2 text-danger" size={22} />
                                <p className="pt-1">EXPLORE</p>
                            </div>
                            <h2 className="title wow fadeInUp" data-wow-delay="0.7s">
                                SUPPLIERS
                            </h2>
                        </div>

                        <div className="dishes-card-wrap style1">
                            {suppliers.map((item, i) => (
                                <div key={i} className="dishes-card supplier-card style1 wow fadeInUp" data-wow-delay="0.2s">
                                    <div className="dishes-thumb">
                                        <img src={getImageUrl(item.logo)} alt="thmb" />
                                    </div>
                                    <Link to="/menu">
                                        <h3>{item.name}</h3>
                                    </Link>
                                    <p>Joined in {formatDate(item.created_at)}</p>
                                    <span className='fs-9 fw-bold text-danger'>ACTIVE LISTINGS : {item.product_count} </span>
                                    <p>{item.email} </p>

                                    { item.verified ?
                                        <div className="social-profile">
                                            <span className="plus-btn">
                                                 <ShieldCheck />
                                            </span>
                                        </div>
                                        :
                                        null
                                    }
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <CtaBanner4></CtaBanner4>
        </div>
    );
};

export default SuppliersPage;
