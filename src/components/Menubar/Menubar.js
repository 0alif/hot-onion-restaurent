import React from 'react';
import './Menubar.css';
import logo2 from '../../Image/logo2.png';
import path1 from '../../Image/ICON/Path 1.png';

const Menubar = () => {
    return (
        <div className="row container m-4">
            <div className="col-md-2">
                <img className="img-fluid" src={logo2} alt="" />
            </div>
            <div className="menu col-md-10 d-flex justify-content-end">
                <li className="ms-5"><img src={path1} alt="" /></li>
                <li className="ms-5">Login</li>
                <li className="ms-5"><button className="regular-btn btn  rounded-pill px-4">Sign up</button></li>
            </div>
        </div>
    );
};

export default Menubar;