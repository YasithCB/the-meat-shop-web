import { useRef } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { Rss } from 'lucide-react';


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

    const blogItems = [
        {
            img: 'https://www.foodandwine.com/thmb/2k2Kq24_fMvHCyLMPRSNrpg5QdE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/beef-wellington-FT-RECIPE0321-c9a63fccde3b45889ad78fdad078153f.jpg',
            title: 'Exploring Gourmet Meat Dishes in Abu Dhabi',
            description: 'Discover the best gourmet meat recipes and restaurants in Abu Dhabi. From lamb to veal, indulge in flavors you cannot resist.',
            author: 'John Smith',
            source: { name: 'Gourmet Times' },
            publishedAt: '2025-11-01T10:30:00Z',
            link: 'https://www.gourmettimes.com/abu-dhabi-meat-dishes'
        },
        {
            img: 'https://simmerandsage.com/wp-content/uploads/2023/07/Korean-Fried-Chicken-Soy-Garlic1.jpg',
            title: 'Top 10 Chicken Recipes You Must Try',
            description: 'From crispy fried chicken to creamy casseroles, explore the top 10 chicken recipes that are perfect for family dinners.',
            author: 'Emily Brown',
            source: { name: 'Food Daily' },
            publishedAt: '2025-11-02T15:45:00Z',
            link: 'https://www.fooddaily.com/top-10-chicken-recipes'
        },
        {
            img: 'https://cdn.tasteatlas.com//images/dishes/5dd8d8db50b5430482e4da8722c10aea.jpg?w=375&h=280',
            title: 'Beef Delicacies from Around the World',
            description: 'A culinary journey featuring beef dishes from different cultures. Learn to make classic steaks, roasts, and traditional beef stews.',
            author: 'Michael Lee',
            source: { name: 'Culinary Explorer' },
            publishedAt: '2025-11-03T09:20:00Z',
            link: 'https://www.culinaryexplorer.com/beef-delicacies-world'
        },
        {
            img: 'https://img.delicious.com.au/M6DbT7bN/del/2020/05/easy-carve-lamb-oregano-garlic-and-feta-potatoes-131400-3.jpg',
            title: 'Lamb Recipes for Festive Occasions',
            description: 'Celebrate special occasions with these lamb recipes. From roasted lamb to lamb curry, perfect for family gatherings.',
            author: 'Sara Johnson',
            source: { name: 'Festive Eats' },
            publishedAt: '2025-11-04T12:00:00Z',
            link: 'https://www.festiveeats.com/lamb-recipes'
        },
        {
            img: 'https://www.licious.in/blog/wp-content/uploads/2023/02/shutterstock_2205168763.jpg',
            title: 'Mutton Recipes That Will Wow Your Guests',
            description: 'From slow-cooked mutton curries to spicy grilled mutton, these recipes will impress every meat lover at your table.',
            author: 'David Williams',
            source: { name: 'Meat Lovers Hub' },
            publishedAt: '2025-11-04T17:15:00Z',
            link: 'https://www.meatlovershub.com/mutton-recipes'
        },
        {
            img: 'https://www.howtocook.recipes/wp-content/uploads/2021/11/Steak-recipe.jpg',
            title: 'Perfect Steak Recipes for Home Cooking',
            description: 'Learn how to cook the perfect steak at home with these easy-to-follow recipes, tips on seasoning, and cooking techniques.',
            author: 'Laura Martinez',
            source: { name: 'Home Chef Magazine' },
            publishedAt: '2025-11-05T11:45:00Z',
            link: 'https://www.homechefmag.com/perfect-steak-recipes'
        }
    ];

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
                                        {blogItems.map((item, i) => (
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