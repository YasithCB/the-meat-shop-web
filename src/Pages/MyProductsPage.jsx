import Testimonial2 from "../Components/Testimonial/Testimonial2";
import { useEffect, useState } from "react";
import { getImageUrl, scrollToTop } from "../utils/util.js";
import { useContextElement } from "../context/Context.jsx";
import { Flame, SquarePen } from "lucide-react";
import LoadingDots from "../Components/Custom/loadingDots.jsx";
import { Link } from "react-router-dom";
import EditProductModal from "../Components/Modals/EditProductModal.jsx";

const MyProductsPage = () => {
    const { products, currentUser, fetchProductsFromDB } = useContextElement();
    const [selectedProduct, setSelectedProduct] = useState(null); // store product object
    const [showEditProduct, setShowEditProduct] = useState(false); // modal visibility
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        scrollToTop();

        const fetchData = async () => {
            setLoading(true);
            try {
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
                                <Flame className="me-2 text-danger" size={22} />
                                <p className="pt-1">PRODUCTS</p>
                            </div>
                            <h2 className="title wow fadeInUp" data-wow-delay="0.7s">
                                {currentUser.name}
                            </h2>
                        </div>

                        <div className="dishes-card-wrap style1 best-selling-area">
                            {products
                                .filter((item) => item.supplier_id === currentUser.id)
                                .map((product, i) => (
                                    <div
                                        key={i}
                                        className="dishes-card style2 wow fadeInUp"
                                        data-wow-delay="0.2s"
                                    >
                                        <div className="dishes-thumb">
                                            <div className="item-thumb">
                                                <img
                                                    src={getImageUrl(product.img)}
                                                    className="item-thumb-img"
                                                    alt="thumb"
                                                />
                                            </div>
                                            <div className="circle-shape">
                                                <img
                                                    className="cir36"
                                                    src="/assets/img/food-items/circleShape.png"
                                                    alt="shape"
                                                />
                                            </div>
                                        </div>
                                        <div className="dishes-content pt-2">
                                            <Link to="/shop/shop-details">
                                                <h3>{product.name}</h3>
                                            </Link>
                                            <div className="star">
                                                <img src="/assets/img/icon/star2.svg" alt="icon" />
                                            </div>
                                            <div className="text">{product.subtitle}</div>
                                            <h6>{product.price} AED</h6>
                                            <div
                                                className="theme-btn style6"
                                                onClick={() => {
                                                    setSelectedProduct(product);
                                                    setShowEditProduct(true);
                                                }}
                                                style={{ cursor: "pointer" }}
                                            >
                                                <SquarePen className="me-2" />
                                                Edit Details
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </section>

            {showEditProduct && selectedProduct && (
                <EditProductModal
                    product={selectedProduct}
                    setShowEditProduct={setShowEditProduct}
                />
            )}

            <Testimonial2 />
        </div>
    );
};

export default MyProductsPage;
