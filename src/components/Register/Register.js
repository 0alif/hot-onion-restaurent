import React from 'react';
import { Form } from 'react-bootstrap';
import './Register.css';
import logo2 from '../../Image/logo2.png';
import initializeAuthentication from '../../firebase/firebase.init';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';
import Menubar from '../Menubar/Menubar';
import Footer from '../Footer/Footer';

initializeAuthentication();

const Register = () => {
    const { handleName, handleEmail, handlePassword, createUser, error, signInUsingGoogle } = useAuth();

    return (

        <div>
            <Menubar></Menubar>
            <div className="register d-flex justify-content-center">
                <div>
                    <img className="mt-5" width="200px" src={logo2} alt="" />
                    <Form onSubmit={createUser} className="mt-5 text-center">
                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Control onBlur={handleName} type="text" placeholder="Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control onBlur={handleEmail} type="email" placeholder="Email" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control onBlur={handlePassword} type="password" placeholder="Password" required />
                        </Form.Group>
                        <p className="text-danger">{error}</p>
                        <button className="btn button" type="submit">
                            Sign in
                        </button>
                        <p className="text-danger"><Link to="/login">Already have an account?</Link></p>
                        <button onClick={signInUsingGoogle}>Google</button>
                    </Form>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Register;