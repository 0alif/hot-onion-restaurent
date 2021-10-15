import React from 'react';
import { Form } from 'react-bootstrap';
import './Login.css';
import logo from './../../Image/logo2.png';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';

const Login = () => {
    const { loginUser, error } = useAuth();

    return (
        <div className="login d-flex justify-content-center">
            <div>
                <img className="mt-5" width="200px" src={logo} alt="" />
                <Form onSubmit={loginUser} className="mt-5 text-center">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" required />
                    </Form.Group>
                    <p className="text-danger">{error}</p>
                    <button className="btn button" type="submit">
                        Login
                    </button>
                    <p className="text-danger"><Link to="/register">Don't have any account?</Link></p>
                </Form>
            </div>
        </div>
    );
};

export default Login;