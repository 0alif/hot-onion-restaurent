import React from 'react';
import { useHistory, useParams } from 'react-router';
import './FoodDetails.css';

const FoodDetails = () => {


    const { foodId } = useParams();
    const history = useHistory();
    const foodDetails = () => {
        console.log(foodId)
    }


    return (
        <div>
            <h2>This is food</h2>
        </div>
    );
};

export default FoodDetails;