import React, { useRef, useState } from "react";
import Slider from "react-slick";
import VideoModal from "../VideoModal/VideoModal";
import {MEAT_DETAILS} from "../../data/Constants.js";

const Testimonial1 = () => {

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

    const tesItems = [
        {
            img: "/assets/img/testimonial/testimonialProfile3_2.png",
            title: "Omar Al Mansoori",
            designation: "Restaurant Owner, Abu Dhabi",
            content:
                "Bemet Meat Shop has become my trusted supplier. Their quality and freshness are unmatched — every cut is tender and perfectly packed. I highly recommend them to anyone who values premium halal meat.",
        },
        {
            img: "/assets/img/testimonial/testimonialProfile1_1.png",
            title: "Sarah Johnson",
            designation: "Home Chef, Dubai",
            content:
                "I love how fresh the chicken and mutton are every time! Their delivery is quick, and the packaging is very clean. I’ve stopped buying from supermarkets completely — Bemet is my go-to.",
        },
        {
            img: "/assets/img/testimonial/testimonialProfile2_1.png",
            title: "Mohammed Rahman",
            designation: "Catering Business Owner",
            content:
                "We run a busy catering service, and consistency matters most. Bemet never fails to deliver on time with excellent quality. The staff is professional and courteous too.",
        },
        {
            img: "/assets/img/testimonial/testimonialProfile2_2.png",
            title: "Aisha Khalid",
            designation: "Food Blogger, Sharjah",
            content:
                "From marinated meat to fresh lamb, everything I’ve tried has been exceptional. The flavor and texture make my recipes come alive — a must-try for food enthusiasts in the UAE!",
        },
        {
            img: "/assets/img/testimonial/testimonialProfile3_1.png",
            title: "James Carter",
            designation: "Executive Chef, Dubai Marina",
            content:
                "I rely on Bemet for premium cuts used in our fine dining menu. The attention to detail in selection and freshness is truly professional — a perfect partner for restaurants.",
        },
    ];


    return (
    <section className="testimonial-section fix bg-color3">
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
                            <div className="sub-title text-center wow fadeInUp" data-wow-delay="0.5s">
                                <img className="me-1" src="/assets/img/icon/titleIcon.svg" alt="icon" />Testimonials<img
                                    className="ms-1" src="/assets/img/icon/titleIcon.svg" alt="icon" />
                            </div>
                            <h2 className="title text-white wow fadeInUp" data-wow-delay="0.7s">
                                What our Clients Say
                            </h2>
                        </div>
                        <div className="slider-area">
                            <div className="swiper testmonialSliderOne">
                                <div className="swiper-wrapper">
                                <Slider ref={sliderRef} {...settings}>
                                {tesItems.map((item, i) => (
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
            <div className="btn-wrap">
                <div onClick={previous} className="arrow-prev"><i className="bi bi-arrow-left"></i></div>
                <div onClick={next} className="arrow-next"><i className="bi bi-arrow-right"></i></div>
            </div>
        </div>

        <div className="marquee-wrapper style-2 text-slider section-padding">
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

export default Testimonial1;