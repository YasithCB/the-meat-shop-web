import { Link } from "react-router-dom";
import {getImageUrl} from "../../utils/util.js";
import { Store } from 'lucide-react';

const ShopCard = ({product}) => {
    return (
        <div className="dishes-card style2 wow fadeInUp" data-wow-delay="0.2s">
            <div className="dishes-thumb">
                <div className='item-thumb'>
                    <img src={getImageUrl(product.img)} className='item-thumb-img' alt="thmb"/>
                </div>
                <div className="circle-shape">
                    <img className="cir36" src="/assets/img/food-items/circleShape.png" alt="shape" />
                </div>
            </div>
            <div className="dishes-content pt-2">
                <Link to="/shop/shop-details">
                    <h3>{product.name}</h3>
                </Link>
                <div className="star"><img src="/assets/img/icon/star2.svg" alt="icon" /></div>
                <div className="text">{product.subtitle}</div>
                <h6>{product.price} AED</h6>

                <div className='d-flex gap-1 justify-content-center align-items-center'>
                    <Store size={15} className='ms-1' />
                    <p className='text-secondary fw-bold fs-7'>Supplier</p>
                </div>

                <p className='text-secondary text-uppercase fs-7 fw-bold'>{product.supplier.name}</p>
                <Link to="/shop/shop-details" state={{ product }} className="theme-btn style6"> Order Now <i className="bi bi-basket2"></i></Link>
            </div>
        </div>
    );
};

export default ShopCard;