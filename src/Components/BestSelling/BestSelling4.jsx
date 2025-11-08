import {Flame} from "lucide-react";
import { Link } from "react-router-dom";
import {useEffect, useState} from "react";
import LoadingDots from "../Custom/loadingDots.jsx";
import {getAllCategories} from "../../api/categoryAPI.js";
import {ICON_FOR_CATEGORY} from "../../data/Constants.js";

const BestSelling4 = () => {
    const [loading, setLoading] = useState(false);
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                // fetch categories
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
        return <LoadingDots/>;
    }

    return (
        <section className="popular-dishes-section fix section-padding">
            <div className="popular-dishes-wrapper style1">
                <div className="shape1 d-none d-xxl-block">
                    <img src="/assets/img/shape/popularDishesShape1_1.png" alt="shape"/>
                </div>
                <div className="shape2 float-bob-y d-none d-xxl-block">
                    <img src="/assets/img/shape/popularDishesShape1_2.png" alt="shape"/>
                </div>

                <div className="container">
                    <div className="title-area">
                        <div
                            className="sub-title text-center text-danger wow fadeInUp d-flex flex-row justify-content-center align-items-center"
                            data-wow-delay="0.5s">
                            <Flame className="me-2 text-danger" size={22}/>
                            <p className='pt-1'>EXPLORE</p>
                        </div>
                        <h2 className="title wow fadeInUp " data-wow-delay="0.7s">
                            MAIN CATEGORIES
                        </h2>
                    </div>
                    <div className="dishes-card-wrap style1 best-selling-area d-flex">
                        {categories.map((item, i) => (
                            <Link
                                to='/shop/category'
                                state={{categoryName : item.name, categoryId : item.id}}
                                key={i}
                            >
                                <div
                                    key={i}
                                    className="dishes-card style1 wow fadeInUp col-12 col-lg cs-pointer"
                                    data-wow-delay="0.2s"
                                >
                                    <div className="dishes-thumb">
                                        <img src={getImage(item.id)} alt="thmb" />
                                    </div>
                                    <h3>{item.name}</h3>

                                    <p>{item.subtitle}</p>
                                    <div className="social-profile"></div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

            </div>

        </section>

    );
};

export default BestSelling4;