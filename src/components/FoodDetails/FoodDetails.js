import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import Footer from '../Footer/Footer';
import Menubar from '../Menubar/Menubar';
import './FoodDetails.css';
import cart from '../../Image/ICON/cart.png';

const FoodDetails = () => {
    const [meal, setMeal] = useState({});

    const { foodId } = useParams();
    const history = useHistory();

    // load breakfast data
    useEffect(() => {
        fetch('/breakfastData.json')
            .then(res => res.json())
            .then(data => {
                const details = data.find(product => product.id == foodId)
                if (details) {
                    setMeal(details)
                }
            })
    }, [foodId])

    // load lunch data
    useEffect(() => {
        fetch('/lunchData.json')
            .then(res => res.json())
            .then(data => {
                const details = data.find(product => product.id == foodId)
                if (details) {
                    setMeal(details)
                }
            })
    }, [foodId])

    useEffect(() => {
        fetch('/dinnerData.json')
            .then(res => res.json())
            .then(data => {
                const details = data.find(product => product.id == foodId)
                if (details) {
                    setMeal(details)
                }
            })
    }, [foodId])

    // switch to delivery page
    const handleDelivery = () => {
        history.push(`/foodDetails/${foodId}/delivery`)
    }
    return (
        <div>
            <Menubar></Menubar>
            <div className="row py-5 m-0">
                <div className="col-6 single-details">
                    <h1>{meal?.name}</h1>
                    <p>{meal?.description}</p>
                    <p className="price">${meal?.price}</p>
                    <button onClick={handleDelivery} className="add-btn btn rounded-pill px-3"><img src={cart} alt="" /> Add</button>
                </div>
                <div className="col-6">
                    <img src={meal?.img} alt="" width="70%" />
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default FoodDetails;