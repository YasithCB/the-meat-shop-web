import {SERVICE_DETAILS} from "../../data/Constants.js";
import {Flame} from "lucide-react";

const Service1 = () => {

    return (
        <div className="services-section style1 section-padding pb-0 fix">
        <div className="services-wrapper style2">
            <div className="container">
                <div className="title-area mb-5">
                    <div
                        className="sub-title text-center wow fadeInUp d-flex flex-row justify-content-center align-items-center"
                        data-wow-delay="0.5s">
                        <Flame className="me-2 text-danger" size={22}/>
                        <p className='pt-1 text-danger'>Top quality. Trusted names. Total reliability</p>
                    </div>
                    <h2 className="title wow fadeInUp" data-wow-delay="0.7s">
                        Your Needs, Our Priority
                    </h2>
                </div>

                <div className="row gy-5 gx-30">
                {SERVICE_DETAILS.map((item, i) => {
                    const Icon = item.icon;

                    return (
                        <div key={i} className="col-lg-4">
                            <div className="services-card style2">
                                <div className="services-card_icon">
                                    <Icon className="text-danger services-card_icon-inner"/>
                                </div>
                                <h4 className="services-card_title">
                                    <p>{item.title}</p>
                                    {/*<Link to="/service/service-details">{item.title}</Link>*/}
                                </h4>
                                <p className="services-card_text">{item.content}</p>
                                <div className="shape1"><img src="/assets/img/shape/servicesShape1_1.png" alt="shape"/>
                                </div>
                                <div className="shape2"><img src="/assets/img/shape/servicesShape1_2.png" alt="shape"/>
                                </div>
                                <div className="shape3"><img src="/assets/img/shape/servicesShape1_3.png" alt="shape"/>
                                </div>
                                <div className="shape4"><img src="/assets/img/shape/servicesShape1_4.png" alt="shape"/>
                                </div>
                            </div>
                        </div>
                    )
                })}

                </div>
            </div>
        </div>
    </div>
    );
};

export default Service1;