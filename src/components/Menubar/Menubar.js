import React from 'react';
import './Menubar.css';
import logo2 from '../../Image/logo2.png';
import path1 from '../../Image/ICON/Path 1.png';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Menubar = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="row container m-4">
            <div className="col-md-2">
                <Link to="/"><img className="img-fluid" src={logo2} alt="" /></Link>
            </div>
            <div className="menu col-md-10 d-flex justify-content-end">
                <li className="ms-5"><img src={path1} alt="" /></li>
                {
                    user.email ? <button onClick={logOut} className="logout ms-5 btn rounded-pill">Logout</button>
                        :
                        <li className="ms-5"><Link to="/login">Login</Link></li>
                }
                <li className="ms-5"><Link to="/register"><button className="regular-btn btn  rounded-pill px-4">Sign up</button></Link></li>
            </div>
        </div>
    );
};

export default Menubar;
