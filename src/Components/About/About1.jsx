import {Link} from "react-router-dom";
import { UserRoundPen } from 'lucide-react';
import {ABOUT_US_DESCRIPTION, ABOUT_US_TITLE} from "../../data/Constants.js";

const About1 = () => {

    const aboutContent = {
        img1: '/assets/img/shape/aboutShape1_1.png',
        img2: '/assets/img/shape/aboutShape1_3.png',
        img3: '/assets/img/shape/aboutShape1_4.png',
        img4: '/assets/img/shape/aboutShape1_6.png',
        subtitle: "About US",
        title: 'Premium Quality Meat, Straight from the Farm to Your Table',
        content: 'Experience premium quality meat in Abu Dhabi. From farm-fresh beef and lamb to poultry and specialty cuts, we bring you flavors that make every meal extraordinary.',
        btnName: 'ORDER NOW',
        btnUrl: '/menu2',
    }

    return (
        <section className="about-us-section fix section-padding pb-0">
            <div className="about-wrapper style1">
                <div className="shape1 d-none d-xxl-block"><img src={aboutContent.img1} alt="shape"/></div>
                <div className="shape2 d-none d-xxl-block"><img src="/assets/img/shape/aboutShape1_2.png" alt="shape"/>
                </div>
                <div className="shape3 d-none d-xxl-block"><img className="cir36" src={aboutContent.img2}
                                                                alt="shape"/></div>
                <div className="shape4 d-none d-xxl-block"><img src={aboutContent.img3} alt="shape"/></div>
                <div className="shape5 d-none d-xxl-block"><img src="/assets/img/shape/aboutShape1_5.png" alt="shape"/>
                </div>
                <div className="shape6 d-none d-xxl-block"><img className="cir36" src={aboutContent.img4}
                                                                alt="shape"/></div>
                <div className="container">
                    <div className="about-us section-padding">
                        <div className="row">
                            <div className="col-12">
                                <div className="title-area">
                                    <div
                                        className="sub-title text-center wow fadeInUp d-flex flex-row justify-content-center align-items-center"
                                        data-wow-delay="0.5s">
                                        <UserRoundPen className="me-2 text-danger" size={22}/>
                                        <p className='pt-1 text-danger'>{aboutContent.subtitle}</p>
                                    </div>
                                    <h2 className="title wow fadeInUp" data-wow-delay="0.7s">
                                        {ABOUT_US_TITLE}
                                    </h2>
                                    <div className="text wow fadeInUp"
                                         data-wow-delay="0.8s">{ABOUT_US_DESCRIPTION}</div>
                                    <div className="btn-wrapper wow fadeInUp" data-wow-delay="0.9s">
                                        <Link className="theme-btn" to={aboutContent.btnUrl}>
                                            {aboutContent.btnName}
                                            <i className="bi bi-arrow-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About1;