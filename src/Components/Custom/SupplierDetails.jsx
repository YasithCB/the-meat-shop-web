import {useLocation} from "react-router-dom";
import {getImageUrl, getRandomRating, scrollToTop} from "../../utils/util.js";
import {useEffect} from "react";
import ShopListCard from "../Card/ShopListCard.jsx";
import {useContextElement} from "../../context/Context.jsx";

const SupplierDetails = () => {
    const { products } = useContextElement();

    const location = useLocation();
    const { supplier } = location.state || {};
    const supplierProducts = products.filter(item => item.supplier_id === supplier.id);

    const randomRating = getRandomRating();

    useEffect(() => {
        scrollToTop();
    })

    if (!supplier) {
        return (
            <div className="text-center py-5">
                <h5 className="text-danger fw-semibold">
                    ⚠️ Something went wrong while loading supplier data.
                </h5>
                <p className="text-muted">Please go back and try again.</p>
            </div>
        );
    }

    return (
        <div className="shop-details-section section-padding py-0 fix">
            <div className="shop-details-wrapper style1">
                <div className="container">
                    <div className="shop-details bg-white">
                        <div className="container">
                            <div className="d-flex gap-5 gx-60">

                                <div className="mb-5">
                                    {/* Supplier Logo */}
                                    <img
                                        src={getImageUrl(supplier.logo)}
                                        alt={supplier.name}
                                        className="border border-gray-200 h-100"
                                        height="200px"
                                    />
                                </div>

                                <div className="product-about">
                                    <div className="title-wrapper">
                                        <h2 className="product-title text-uppercase">{supplier.name}</h2>
                                    </div>

                                    {/* RATING | REVIEW */}
                                    <div className="d-flex flex-column align-items-start mb-2">
                                        <div className="d-flex align-items-center mb-1">
                                            {/* Stars */}
                                            {[...Array(5)].map((_, i) => (
                                                <i
                                                    key={i}
                                                    className={`bi ${
                                                        i + 1 <= Math.floor(randomRating)
                                                            ? "bi-star-fill text-warning"
                                                            : i + 0.5 <= randomRating
                                                                ? "bi-star-half text-warning"
                                                                : "bi-star text-warning"
                                                    } me-1`}
                                                ></i>
                                            ))}
                                            <span className="fw-semibold ms-1">{randomRating}</span>
                                        </div>
                                    </div>

                                    <p className="text">
                                        {supplier.subtitle}
                                    </p>

                                    {/* Supplier Info */}
                                    <div className="flex-1 py-3">
                                        <p className="text-sm text-gray-500">{supplier.email}</p>
                                        <p className="text-sm text-gray-500">{supplier.phone}</p>
                                        <p className="text-xs text-gray-400">
                                            Joined: {new Date(supplier.created_at).toLocaleDateString()}
                                        </p>
                                    </div>

                                    <div className="share">
                                        <h6>share with friends</h6>
                                        <ul className="social-media">
                                            <li><a href="https://www.facebook.com" target='_blank'>
                                                <i
                                                    className="bi bi-facebook"></i> </a></li>
                                            <li><a href="https://www.youtube.com" target='_blank'><i className="bi bi-youtube"></i>
                                            </a></li>
                                            <li><a href="https://www.x.com" target='_blank'> <i className="bi bi-twitter-x"></i>
                                            </a>
                                            </li>
                                            <li><a href="https://www.linkedin.com" target='_blank'> <i
                                                className="bi bi-linkedin"></i> </a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-12">

                                    <div className='row d-flex gap-5'>
                                        {/* SUPPLIER */}
                                        <div className='col-12 col-lg'>
                                            <h3 className='title mb-4'>Supplier Products</h3>

                                            <div className="row gy-4">
                                                {supplierProducts.length > 0 ? (
                                                    supplierProducts.map((item, i) => (
                                                        <div className="col-6" key={i}>
                                                            <ShopListCard
                                                                product={item}
                                                            />
                                                        </div>
                                                    ))
                                                ) : (
                                                    <p>No products yet from this supplier.</p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SupplierDetails;