import { Link } from "react-router-dom";
import {getImageUrl, getRandomRating} from "../../utils/util.js";

const ShopListCard = ({product}) => {
    const randomRating = getRandomRating();

    return (
        <div className="dishes-card style4 wow fadeInUp" data-wow-delay="0.2s">
        <div className="dishes-thumb">
            <img
                src={getImageUrl(product.img)}
                alt="thumb"
                height={155}
                width={155}
                style={{
                    borderRadius: "50%",
                    objectFit: "cover"
                }}
            />


            <div className="circle-shape">
                <img
                    className="cir36"
                    src="/assets/img/food-items/circleShape.png"
                    alt="shape"
                />
            </div>
        </div>
        <div className="dishes-content">
            <Link to="/shop/shop-details">
                <h3>{product.title}</h3>
            </Link>
            <div className="icon">
                <a href="#"> <i className="fa-regular fa-heart"></i></a>
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

            <div className="text">{product.content}</div>
            <h6>{product.price} AED</h6>
            <Link to="/shop/shop-details" state={{product}} className="theme-btn style6"> Order Now <i className="bi bi-basket2"></i></Link>
        </div>
    </div>
    );
};

export default ShopListCard;