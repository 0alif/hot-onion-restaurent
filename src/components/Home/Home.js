import React from 'react';
import Banner from '../Banner/Banner';
import ChooseUs from '../ChooseUs/ChooseUs';
import Food from '../Food/Food';
import Footer from '../Footer/Footer';
import Menubar from '../Menubar/Menubar';

const Home = () => {
    return (
        <div>
            <Menubar></Menubar>
            <Banner></Banner>
            <Food></Food>
            <ChooseUs></ChooseUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;