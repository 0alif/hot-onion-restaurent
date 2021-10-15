import React from 'react';
import Banner from '../Banner/Banner';
import ChooseUs from '../ChooseUs/ChooseUs';
import Food from '../Food/Food';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Food></Food>
            <ChooseUs></ChooseUs>
        </div>
    );
};

export default Home;