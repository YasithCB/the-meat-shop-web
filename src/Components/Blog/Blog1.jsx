import { useRef } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { Rss } from 'lucide-react';
import {BLOG_ARTICLES} from "../../data/Constants.js";


const Blog1 = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 1399,
                settings: {
                    slidesToShow: 3,
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
        <section className="blog-section section-padding fix">
            <div className="burger-shape">
                <img src="/assets/img/blog/burger-shape.png" alt="img" />
            </div>
            <div className="pizza-shape">
                <img src="/assets/img/blog/pizza-shape.png" alt="img" />
            </div>
            <div className="blog-wrapper style1">
                <div className="container">
                    <div className="blog-card-wrap style1">
                        <div className="title-area">
                            <div className="sub-title text-center text-danger wow fadeInUp d-flex flex-row justify-content-center align-items-center" data-wow-delay="0.5s">
                                <Rss className="me-2 text-danger" size={22} />
                                <p className='pt-1'>LATEST NEWS</p>
                            </div>
                            <h2 className="title wow fadeInUp" data-wow-delay="0.7s">
                                Our Latest Foods News
                            </h2>
                        </div>
                        <div className="slider-area">
                            <div className="swiper blogSliderOne">
                                <div className="swiper-wrapper cs_slider_gap_301">

                                    <Slider ref={sliderRef} {...settings}>
                                        {BLOG_ARTICLES.map((item, i) => (
                                            <div key={i} className="swiper-slide">
                                                <div className="blog-card style1 wow fadeInUp" data-wow-delay="0.2s">
                                                    <div className="blog-thumb">
                                                        <img src={item.img} alt="thumb" height={300}/>
                                                    </div>
                                                    <div className="blog-content">
                                                        <div className="blog-meta">
                                                            <div className="item1">
                                                                <h6>15</h6>
                                                                <p>Dec</p>
                                                            </div>

                                                            <div>
                                                                <div className="item2 mb-1">
                                                                    <div className="icon">
                                                                    <img src="/assets/img/icon/user.svg" alt="icon" />
                                                                    <span>By {item.author}</span></div>
                                                                </div>
                                                                <div className="item3">
                                                                    <div className="icon">
                                                                        <img src="/assets/img/icon/tag.svg" alt="icon" />
                                                                        <span>{item.source.name}</span></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <Link to="/blog/blog-details">
                                                            <h3>{item.title}</h3>
                                                        </Link>
                                                        <Link to="/blog/blog-details" className="link-btn">
                                                            <span>Read More</span> <i className="bi bi-arrow-up-right"></i>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </Slider>

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
        </section>
    );
};

export default Blog1;