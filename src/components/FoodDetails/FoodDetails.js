import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import './FoodDetails.css';

const FoodDetails = () => {
    const [food, setFood] = useState([]);

    const { foodId } = useParams();
    console.log(foodId);

    // load breakfast data
    useEffect(() => {
        fetch('./breakfastData.json')
            .then(res => res.json())
            .then(data => setFood(data));
    }, []);
    console.log(food);

    const xyz = food.find(f => f.id === foodId);
    console.log(xyz);


    return (
        <div>
            <h2>This is food</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quis distinctio voluptatum fugiat! Officiis maxime sit alias quos reiciendis amet nobis ad in voluptate numquam perferendis, sed dicta debitis laborum inventore ducimus esse recusandae tempora nesciunt vero accusantium. Eos illo non labore ratione officia impedit enim? Laboriosam doloremque aut similique.</p>
        </div>
    );
};

export default FoodDetails;