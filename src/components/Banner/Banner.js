import React from 'react';
import './Banner.css';
import banner from '../../Image/bannerbackground.png';

const Banner = () => {
    return (
        <div className="mb-5">
            <img className="hero-img" src={banner} alt="" />
            <div className="hero-text">
                <h1 className="mb-4">Best food waiting for your belly</h1>
                <div className="d-flex justify-content-center">
                    <input className="w-50 rounded-pill form-control" type="search" placeholder="Search food items" />
                    <button className="regular-src px-4 btn rounded-pill" type="submit">Search</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;