import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Footer from '../Footer/Footer';
import Menubar from '../Menubar/Menubar';
import './FoodDetails.css';

const FoodDetails = () => {
    const [meal, setMeal] = useState([]);

    const { foodId } = useParams();

    useEffect(() => {
        fetch('/breakfastData.json')
            .then(res => res.json())
            .then(data => {
                const details = data.find(product => product.id == foodId)
                setMeal(details);
            })
    }, [foodId])

    return (
        <div>
            <Menubar></Menubar>
            <div>
                <h2>{meal.name}</h2>
                <img src={meal.img} alt="" width="200px" />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default FoodDetails;