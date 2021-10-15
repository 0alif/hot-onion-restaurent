import React from 'react';
import './ChooseUs.css';
import { Col, Row } from 'react-bootstrap';
import first from '../../Image/adult-blur-blurred-background-687824.png';
import second from '../../Image/chef-cook-food-33614.png';
import third from '../../Image/architecture-building-city-2047397.png';
import group204 from '../../Image/ICON/Group 204.png';
import group1133 from '../../Image/ICON/Group 1133.png';
import group245 from '../../Image/ICON/Group 245.png';
import arrow from '../../Image/ICON/arrow_right.png';


const ChooseUs = () => {
    return (
        <div className="container">
            <div className="choose-us">
                <h1>Why you choose us</h1>
                <p>Barton waited twenty repair in within we do. An delighted offending curiously my is dashwoods at. Boy prosperous increasing surround</p>
            </div>
            <div>
                <Row xs={1} lg={3} md={2} sm={1} className="g-5">
                    <Col>
                        <div className="cards">
                            <img width="100%" src={first} alt="" />
                            <div className="d-flex mt-3">
                                <img className="mx-3" height="40px" src={group204} alt="" />
                                <div className="pb-3">
                                    <h4 className="pb-2">First Delivery</h4>
                                    <p>Keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about our future.</p>
                                    <a className="see-more" href="/">See more <img width="30px" src={arrow} alt="" /></a>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="cards">
                            <img width="100%" src={second} alt="" />
                            <div className="d-flex mt-3">
                                <img className="mx-3" height="40px" src={group1133} alt="" />
                                <div className="pb-3">
                                    <h4 className="pb-2">A Good Auto Responder</h4>
                                    <p>Keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about our future.</p>
                                    <a className="see-more" href="/">See more <img width="30px" src={arrow} alt="" /></a>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="cards">
                            <img width="100%" src={third} alt="" />
                            <div className="d-flex mt-3">
                                <img className="mx-3" height="40px" src={group245} alt="" />
                                <div className="pb-3">
                                    <h4 className="pb-2">Home Delivery</h4>
                                    <p>Keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about our future.</p>
                                    <a className="see-more" href="/">See more <img width="30px" src={arrow} alt="" /></a>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default ChooseUs;