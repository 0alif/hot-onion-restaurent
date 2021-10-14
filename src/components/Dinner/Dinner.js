import React from 'react';
import { Col } from 'react-bootstrap';
import './Dinner.css';

const Dinner = ({ food }) => {
    const { name, details, img, price } = food;
    return (
        <div>
            <Col>
                <div className="food-card">
                    <img className="pt-3" src={img} alt="" />
                    <div className="pt-3">
                        <h5>{name}</h5>
                        <p>{details}</p>
                        <p><b>{price}</b></p>
                    </div>
                </div>
            </Col>
        </div>
    );
};

export default Dinner;