import React from 'react';
import { Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Dinner.css';

const Dinner = ({ food }) => {
    const { id, name, details, img, price } = food;
    const history = useHistory();

    const handleDinner = (id) => {
        history.push(`/foodDetails/${id}`)
    }
    return (
        <div onClick={() => handleDinner(id)}>
            <Col>
                <div className="food-card">
                    <img className="pt-3" src={img} alt="" />
                    <div className="pt-3">
                        <h5>{name}</h5>
                        <p>{details}</p>
                        <p><b>${price}</b></p>
                    </div>
                </div>
            </Col>
        </div>
    );
};

export default Dinner;