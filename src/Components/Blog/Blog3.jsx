import { Link } from "react-router-dom";
import {BLOG_ARTICLES} from "../../data/Constants.js";

const Blog3 = () => {

    return (
        <section className="blog-section section-padding fix">
        <div className="blog-wrapper style3 mt-n30">
            <div className="container">
                <div className="blog-card-wrap style3">
                    {BLOG_ARTICLES.map((item, i) => (
                        <div key={i} className="swiper-slide">
                            <div className="blog-card style1 wow fadeInUp" data-wow-delay="0.2s">
                                <div className="blog-thumb">
                                    <img src={item.img} alt="thumb"/>
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
                </div>

            </div>
        </div>
    </section>
    );
};

export default Blog3;