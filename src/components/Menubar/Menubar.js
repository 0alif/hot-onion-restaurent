import React from 'react';
import './Menubar.css';
import logo2 from '../../Image/logo2.png';
import path1 from '../../Image/ICON/Path 1.png';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logout from '../../Image/ICON/logout.jpg';

const Menubar = () => {
    const { user, logOut } = useAuth();
    console.log(user)

    return (
        <div className="row sticky-top menubar">
            <div className="col-md-2">
                <Link to="/"><img className="img-fluid" src={logo2} alt="" /></Link>
            </div>
            <div className="menu col-md-10 d-flex justify-content-end">
                <li className="ms-4"><img src={path1} alt="" /></li>
                {user.displayName &&
                    <li className="ms-4"><img className="rounded-pill" src={user.photoURL} alt="" width="45px" /> <small>{user.displayName}</small></li>
                }
                {
                    user.email ? <button onClick={logOut} className="logout ms-2 btn rounded-pill">
                        <img className="" src={logout} alt="" width="40px" />
                    </button>
                        :
                        <li className="ms-4"><Link to="/login">Login</Link></li>
                }
                {
                    !user.email &&
                    <li className="ms-4"><Link to="/register"><button className="regular-btn btn  rounded-pill px-4">Register</button></Link></li>
                }
            </div>
        </div>
    );
};

export default Menubar;
