import React, { useRef } from "react";
import Slider from "react-slick";
import {TESTIMONIALS} from "../../data/Constants.js";
import {MessageCircle} from "lucide-react";

const Testimonial2 = () => {

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


    return (
        <section className="testimonial-section fix section-padding bg-white">
        <div className="vagetable-shape">
            <img src="/assets/img/testimonial/vagetable-shape.png" alt="img" />
        </div>
        <div className="chili-shape">
            <img src="/assets/img/testimonial/chili-shape.png" alt="img" />
        </div>
        <div className="testimonial-wrapper style2">
            <div className="container">

                <div className="testimonial-wrap style2">
                    <div className="row gx-80 gy-5">
                        <div className="col-xl-7 order-2 order-xl-1">
                            <div className="title-area">
                                <div
                                    className="sub-title text-center wow fadeInUp d-flex flex-row align-items-center"
                                    data-wow-delay="0.5s">
                                    <MessageCircle className="me-2 text-danger" size={22}/>
                                    <p className='pt-1 text-danger'>TESTIMONIALS</p>
                                </div>
                                <h2 className="title  text-start wow fadeInUp" data-wow-delay="0.7s">
                                    what have lots of happy customer feedback
                                </h2>
                            </div>

                            <div className="slider-area">
                                <div className="swiper testimonialSliderTwo">
                                    <div className="swiper-wrapper">
                                    <Slider ref={sliderRef} {...settings}>
                                    {TESTIMONIALS.map((item, i) => (
                                        <div key={i} className="swiper-slide">
                                            <div className="testimonial-card style2">
                                                <div className="quote"><img src="/assets/img/icon/quote.svg" alt="icon" />
                                                </div>
                                                <p>{item.content}</p>
                                                <div className="profile-box">
                                                    <div className="one"><img
                                                            src={item.img}
                                                            alt="thumb" /></div>
                                                </div>
                                            </div>
                                        </div>
                                ))}
                                </Slider>

                                    </div>

                                    <div className="btn-wrap">
                                        <div onClick={previous} className="arrow-prev"><i className="bi bi-arrow-left"></i></div>
                                        <div onClick={next} className="arrow-next"><i className="bi bi-arrow-right"></i></div>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div className="col-xl-5 order-1 order-xl-2">
                            <div className="testimonial-thumb">
                                <img src="/assets/img/testimonial/testimonialThumb2_1.png" alt="thumb" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    );
};

export default Testimonial2;