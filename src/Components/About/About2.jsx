import React, { useState } from "react";
import VideoModal from "../VideoModal/VideoModal";
import {UserRoundPen} from "lucide-react";
import {ABOUT_US_DESCRIPTION, ABOUT_US_TITLE, MEAT_DETAILS} from "../../data/Constants.js";

import { Beef } from 'lucide-react';
import { DollarSign } from 'lucide-react';

const About2 = () => {

        const [iframeSrc, setIframeSrc] = useState('about:blank');
        const [toggle, setToggle] = useState(false);
      
        const handelClick = () => {
          setIframeSrc("https://www.youtube.com/embed/rRid6GCJtgc");
          setToggle(!toggle);
        };
        const handelClose = () => {
          setIframeSrc('about:blank');
          setToggle(!toggle);
        };

    return (
<section className="about-us-section fix section-padding pt-0">
        <div className="about-wrapper style2">
            <div className="shape1 d-none d-xxl-block"><img src="/assets/img/shape/aboutShape2_1.png" alt="shape" /></div>
            <div className="container">
                <div className="about-us section-padding">
                    <div className="row d-flex align-items-center">
                        <div className="col-lg-6 d-flex align-items-center justify-content-center justify-content-xl-start">
                            <div className="about-thumb mb-5 mb-lg-0">
                                <img src="/assets/img/about/aboutThumb2_1.png" alt="thumb" />
                                <div className="video-wrap">
                                    <a onClick={handelClick} 
                                        className="play-btn popup-video"><img className="cir36"
                                            src="/assets/img/shape/player.svg" alt="icon" /></a>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-6">
                            <div className="title-area">
                                <div
                                    className="sub-title wow fadeInUp d-flex flex-row align-items-center"
                                    data-wow-delay="0.5s">
                                    <UserRoundPen className="me-2 text-danger" size={22}/>
                                    <p className='pt-1 text-danger'>About Us</p>
                                </div>
                                <h2 className="title text-start wow fadeInUp" data-wow-delay="0.7s">
                                    {ABOUT_US_TITLE}
                                </h2>
                                <div className="text text-start wow fadeInUp" data-wow-delay="0.8s">
                                    {ABOUT_US_DESCRIPTION}
                                </div>
                            </div>
                            <div className="fancy-box-wrapper">
                                <div className="fancy-box">
                                    <div className="item">
                                        <div className='d-flex gap-2'>
                                            <Beef className='text-danger' />
                                            <h6>Super Fresh Meat</h6>
                                        </div>
                                        <p>Enjoy premium cuts of fresh meat, prepared with care and served with authentic flavor.</p>
                                    </div>
                                </div>
                                <div className="fancy-box">
                                    <div className="item">
                                        <div className='d-flex gap-2'>
                                            <DollarSign className='text-danger' />
                                            <h6>Unbeatable Price</h6>
                                        </div>
                                        <p>Get top-quality food at prices that can’t be matched — delicious and affordable every time.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="marquee-wrapper style-1 text-slider section-padding pt-0">
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
        <VideoModal
            isTrue={toggle}
            iframeSrc={iframeSrc}
            handelClose={handelClose}        
        ></VideoModal> 

    </section>
    );
};

export default About2;