import FoodItemCard from "../Card/FoodItemCard";
import React from "react";
import { Notebook } from 'lucide-react';
import {MEAT_DETAILS} from "../../data/Constants.js";

const FoodItem1 = () => {
    return (
<section className="food-menu-section fix section-padding">
        <div className="burger-shape">
            <img src="/assets/img/shape/burger-shape.png" alt="img" />
        </div>
        <div className="fry-shape">
            <img src="/assets/img/shape/fry-shape.png" alt="img" />
        </div>
        <div className="food-menu-wrapper style1">
            <div className="container">
                <div className="food-menu-tab-wrapper style-bg">
                    <div className="title-area">
                        <div className="sub-title text-center text-danger wow fadeInUp d-flex flex-row justify-content-center align-items-center" data-wow-delay="0.5s">
                            <Notebook className="me-2 text-danger" size={22} />
                            <p className='pt-1'>MEAT MENU</p>
                        </div>
                        <h2 className="title wow fadeInUp" data-wow-delay="0.7s">
                            The Meat Shop Menu
                        </h2>
                    </div>

                    <div className="food-menu-tab">
                        <div className="tab-content" id="pills-tabContent">
                            <div className='tab-pane active' id="pills-FastFood" role="tabpanel"
                                aria-labelledby="pills-FastFood-tab" tabIndex="0">
                                <div className="row gx-60">
                                    {MEAT_DETAILS.map((item, index) => (
                                        <div className="col-lg-6" key={index}>
                                            <FoodItemCard
                                                img={item.img}
                                                title={item.title}
                                                content={item.content}
                                                price={`$${item.price}`}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div className="marquee-wrapper style-1 text-slider section-padding pt-0 mt-5">
            <div className="marquee-inner to-left">
                <ul className="marqee-list d-flex">
                    <li className="marquee-item style1">
                        {MEAT_DETAILS.map((item, index) => (
                            <React.Fragment key={index}>
                                <span className="text-slider"></span>
                                <span className="text-slider text-style">{item.title}</span>
                            </React.Fragment>
                        ))}
                    </li>
                </ul>
            </div>
        </div>
    </section>
    );
};

export default FoodItem1;