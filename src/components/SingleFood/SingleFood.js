import React from 'react';

const SingleFood = ({ meal }) => {
    console.log(meal)
    return (
        <div>
            <h2>{meal.name}</h2>
        </div>
    );
};

export default SingleFood;