import { Link } from "react-router-dom";
import {Flame} from "lucide-react";

const BestSelling1 = () => {

    const foodItems = [
        {img:'/assets/img/dishes/dishes1_1.png', title:'Chicken', content:'The registration fee', price:'7.99'},
        {img:'/assets/img/dishes/dishes1_2.png', title:'Beef', content:'The registration fee', price:'15.99'},
        {img:'/assets/img/dishes/dishes1_3.png', title:'Mutton', content:'The registration fee', price:'18.99'},
        {img:'/assets/img/dishes/dishes1_4.png', title:'Camel', content:'The registration fee', price:'29.00'},
        {img:'/assets/img/dishes/dishes1_5.png', title:'Buffalo', content:'The registration fee', price:'18.99'},
      ]; 

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
                        <p className='pt-1 text-danger'>WHATS POPULAR</p>
                    </div>
                    <h2 className="title wow fadeInUp" data-wow-delay="0.7s">
                        Most Moving Meats
                    </h2>
                </div>
                <div className="dishes-card-wrap style1">
                {foodItems.map((item, i) => (
                    <div key={i} className="dishes-card style1 wow fadeInUp" data-wow-delay="0.2s">
                        <div className="dishes-thumb">
                            <img src={item.img} alt="thmb" />
                        </div>
                        <Link to="/menu">
                            <h3>{item.title}</h3>
                        </Link>
                        <p>Price/KG</p>
                        <h6>{item.price} AED</h6>
                        <div className="social-profile">
                            <span className="plus-btn"> <Link to="/shop/wishlist"> <i className="bi bi-heart"></i></Link></span>
                            <ul>
                                <li><Link to="/shop/cart"><i className="bi bi-basket2"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                    ))}
                </div>
                <div className="btn-wrapper  wow fadeInUp" data-wow-delay="0.9s">
                    <Link className="theme-btn" to="/menu2">VIEW ALL ITEM <i className="bi bi-arrow-right"></i></Link>
                </div>
            </div>
        </div>

    </section>

    );
};

export default BestSelling1;