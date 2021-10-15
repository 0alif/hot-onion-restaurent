import React from 'react';
import './Footer.css';
import logo from '../../Image/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer mt-5">
            <div className="row container py-5">
                <div className="col-sm-12 col-md-6">
                    <Link to="/"><img width="200px" src={logo} alt="" /></Link>
                </div>
                <div className="col-sm-12 col-md-3">
                    <p>About Online food</p>
                    <p>Read our blog</p>
                    <p>Sign up to deliver</p>
                    <p>Add your restaurant</p>
                </div>
                <div className="col-sm-12 col-md-3">
                    <p>Get help</p>
                    <p>Read FAQs</p>
                    <p>View all cities</p>
                    <p>Restaurants near me</p>
                </div>
            </div>
            <div className="row container pb-3">
                <div className="col-sm-12 col-md-6">
                    <p>Copyright &copy; 2020 Online food</p>
                </div>
                <div className="col-sm-12 col-md-2">
                    <p>Privacy Policy</p>
                </div>
                <div className="col-sm-12 col-md-2">
                    <p>Terms of Use</p>
                </div>
                <div className="col-sm-12 col-md-2">
                    <p>Pricing</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;