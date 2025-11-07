import { Link } from "react-router-dom";
import {getImageUrl} from "../../utils/util.js";

const ShopCard = ({product}) => {
    return (
        <div className="dishes-card style2 wow fadeInUp" data-wow-delay="0.2s">
        <div className="dishes-thumb">
            <img src={getImageUrl(product.img)} alt="thmb"/>
            <div className="circle-shape"><img className="cir36"
                    src="/assets/img/food-items/circleShape.png" alt="shape" /></div>
        </div>
        <div className="dishes-content pt-2">
            <Link to="/shop/shop-details">
                <h3>{product.name}</h3>
            </Link>
            <div className="star"><img src="/assets/img/icon/star2.svg" alt="icon" /></div>
            <div className="text">{product.subtitle}</div>
            <h6>{product.price} AED</h6>
            <Link to="/shop/shop-details" state={{ product }} className="theme-btn style6"> Order Now <i className="bi bi-basket2"></i></Link>
        </div>
    </div>
    );
};

export default ShopCard;