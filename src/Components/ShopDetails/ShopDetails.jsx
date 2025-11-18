import {Link} from "react-router-dom";
import {getImageUrl, scrollToTop} from "../../utils/util.js";
import {Star, StarOff , ShoppingCart } from "lucide-react";
import {useEffect, useState} from "react";
import ReviewForm from "../Custom/ReviewForm.jsx";
import {useContextElement} from "../../context/Context.jsx";

const ShopDetails = ({product}) => {
    const supplier = product.supplier;
    const reviewsList = product.reviews;

    const [quantity, setQuantity] = useState(1);

    const handleChange = (e) => {
        const value = parseInt(e.target.value, 10);
        if (!isNaN(value) && value >= 1 && value <= 100) {
            setQuantity(value);
        }
    };

    useEffect(() => {
        scrollToTop();
    })

    return (
        <div className="shop-details-section section-padding py-0 fix">
            <div className="shop-details-wrapper style1">
                <div className="container">
                    <div className="shop-details bg-white">
                        <div className="container">
                            <div className="row gx-60">
                                <div className="col-lg-6">
                                    <div className="full-img-box">
                                        <img
                                            src={getImageUrl(product.img)}
                                            alt="thumb"
                                            className="full-img"
                                        />
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="product-about">
                                        <div className="title-wrapper">
                                            <h2 className="product-title">{product.name}</h2>
                                            <div className="price">{product.price} AED</div>
                                        </div>

                                        <div className="product-rating">
                                            <div className="star-rating" role="img"
                                                 aria-label="Rated 5.00 out of 5">
                                                <span>Rated <strong className="rating">5.00</strong>
                                                    out of 5 based on
                                                <span className="rating">1</span> customer rating</span>
                                            </div>

                                            <a className='text-secondary'>
                                                <span className="count">{reviewsList.length} </span>
                                                customer reviews
                                            </a>
                                        </div>

                                        <p className="text">
                                            {product.subtitle}
                                        </p>

                                        <div className="actions">

                                            <div className="quantity">
                                                <p>Quantity</p>

                                                <div className="qty-wrapper d-flex align-items-center gap-2">
                                                    <input
                                                        type="number"
                                                        className="qty-input form-control text-center"
                                                        step="1"
                                                        min="1"
                                                        max="100"
                                                        name="quantity"
                                                        value={quantity}
                                                        onChange={handleChange}
                                                        style={{ width: "70px" }}
                                                    />
                                                </div>
                                                <p className='text-black-50 fs-7'>{product.stock}KG Available</p>

                                            </div>

                                            <Link to="/shop/checkout"
                                                  state={{product: product, quantity : quantity}}
                                                  className="theme-btn cart-btn0 text-uppercase"
                                            >
                                                Order Now
                                                <ShoppingCart className='mb-1 ms-2' />
                                            </Link>
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
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="product-description">
                                        <h3>product Description</h3>
                                        <div className="desc">
                                            <p>
                                                {product.description}
                                            </p>
                                        </div>
                                    </div>


                                    <div className='row d-flex gap-5'>
                                        {/* SUPPLIER */}
                                        <div className='col-12 col-lg'>
                                            <h3 className='title'>Supplier</h3>
                                            <div className="d-flex gap-4 my-5">
                                                {/* Supplier Logo */}
                                                <img
                                                    src={getImageUrl(supplier.logo)}
                                                    alt={supplier.name}
                                                    className="border border-gray-200"
                                                    height="200px"
                                                />

                                                {/* Supplier Info */}
                                                <div className="flex-1 py-3">
                                                    <h3 className="text-lg font-semibold text-gray-800 text-uppercase mb-3">{supplier.name}</h3>
                                                    <p className="text-sm text-gray-500">{supplier.email}</p>
                                                    <p className="text-sm text-gray-500">{supplier.phone}</p>
                                                    <p className="text-xs text-gray-400">
                                                        Joined: {new Date(supplier.created_at).toLocaleDateString()}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* REVIEWS / COMMENTS */}
                                        <div className="product-review col-12 col-lg">
                                            <h3>{reviewsList.length} Reviews</h3>
                                            <ul className="comment-list">
                                                {reviewsList.map((review) => (
                                                    <li key={review.id} className="review comment-item">
                                                        <div className="post-comment">

                                                            {/* Content */}
                                                            <div className="comment-content">
                                                                <h4 className="name">{review.user_name}</h4>
                                                                <div className="commented-on">
                                                                    {new Date(review.created_at).toLocaleString()}
                                                                </div>

                                                                {/* Star rating */}
                                                                <div className="star d-flex">
                                                                    {Array.from({length: 5}).map((_, i) => (
                                                                        <span key={i} className="me-1">
                                                                          {i < review.rating ? (
                                                                              <Star size={16} color="#FFC107"/>   // filled star
                                                                          ) : (
                                                                              <StarOff size={16} color="#E0E0E0"/> // empty star
                                                                          )}
                                                                        </span>
                                                                    ))}
                                                                </div>


                                                                {/* Comment text */}
                                                                <p className="text">{review.comment}</p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* ADD REVIEW */}
                                    <ReviewForm productId={product.id}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopDetails;