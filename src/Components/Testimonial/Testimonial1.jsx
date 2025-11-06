import React, { useRef, useState } from "react";
import Slider from "react-slick";
import VideoModal from "../VideoModal/VideoModal";
import {MEAT_DETAILS, TESTIMONIALS} from "../../data/Constants.js";
import { MessageCircle} from 'lucide-react';

const Testimonial1 = ({className = ''}) => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true,
        autoplay: false,
        autoplaySpeed: 4000,
        responsive: [
          {
            breakpoint: 1399,
            settings: {
              slidesToShow: 1,
            }
          },
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 1,
            }
          },{
            breakpoint: 575,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      }; 

      const sliderRef = useRef(null);

      const next = () => {
        sliderRef.current.slickNext();
      };
    
      const previous = () => {
        sliderRef.current.slickPrev();
      }; 

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
    <section className={`testimonial-section fix bg-color3 ${className}`}>
        <div className="testimonial-wrapper style1 section-padding ">
            <div className="shape"><img src="/assets/img/testimonial/testimonialThumb1_1.png" alt="thumb" /></div>
            <div className="shape2"><img src="/assets/img/shape/testimonialShape1_1.png" alt="shape" /></div>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-xl-5 d-flex align-items-center justify-content-center">
                        <div className="video-wrap cir36 ">
                            <a onClick={handelClick} className="play-btn popup-video"><img
                                    src="/assets/img/shape/player.svg" alt="icon" /></a>
                        </div>
                    </div>
                    <div className="col-xl-7">
                        <div className="title-area">
                            <div
                                className="sub-title text-center wow fadeInUp d-flex flex-row justify-content-center align-items-center"
                                data-wow-delay="0.5s">
                                <MessageCircle className="me-2 text-danger" size={22}/>
                                <p className='pt-1 text-danger'>TESTIMONIALS</p>
                            </div>
                            <h2 className="title text-white wow fadeInUp" data-wow-delay="0.7s">
                                What our Clients Say
                            </h2>
                        </div>
                        <div className="slider-area">
                            <div className="swiper testmonialSliderOne">
                                <div className="swiper-wrapper">
                                <Slider ref={sliderRef} {...settings}>
                                {TESTIMONIALS.map((item, i) => (
                                    <div key={i} className="swiper-slide ps-2">
                                        <div className="testimonial-card style1">
                                            <div className="testimonial-header">
                                                <div className="fancy-box">
                                                    <div className="item1"><img
                                                            src={item.img}
                                                            alt="thumb" /></div>
                                                    <div className="item2">
                                                        <h6>{item.title}</h6>
                                                        <p>{item.designation}</p>
                                                        <div className="icon"><img src="/assets/img/icon/star.svg"
                                                                alt="icon" /></div>
                                                    </div>
                                                    <div className="quote"><img src="/assets/img/icon/quote.svg" alt="icon" />
                                                    </div>
                                                </div>
                                            </div>

                                            <p>{item.content}</p>
                                        </div>
                                            </div>
                                ))}
                                </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="btn-wrap mt-5 pt-5">
                <div onClick={previous} className="arrow-prev"><i className="bi bi-arrow-left"></i></div>
                <div onClick={next} className="arrow-next"><i className="bi bi-arrow-right"></i></div>
            </div>
        </div>

        <div className="marquee-wrapper style-2 text-slider section-padding">
            <div className="marquee-inner to-left">
                <ul className="marqee-list d-flex">
                    <li className="marquee-item style-2">
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

export default Testimonial1;