import React,{ useState } from 'react';
import {Container, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
//Redux
import { authenticate } from '../../actions/userActions'
import { useDispatch } from 'react-redux';
import './users.css';
const Login = () => {

    const [ user, setUser ] = useState({
        "email": "",
        "password": ""
    });

    const onChangeHandler = e => {
        setUser({
          ...user,  
          [ e.target.name]: e.target.value 
        });
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        fireAuthentication(user);
    }

    const dispatch = useDispatch();
    const fireAuthentication = (userInfo) => dispatch(authenticate(userInfo))
    return (
        <Container className="d-flex flex-column login-container">
            <Col className="bg-primary px-5 pt-5 pb-3 rounded mt-5 login">
                <h3 className="text-white text-center mb-4">User's login</h3>
                <Form>
                    <fieldset>
                        <legend>
                            <Form.Group 
                                className="mb-3" 
                                controlId="formBasicEmail"
                            >
                                <Form.Label className="text-white">Email address</Form.Label>
                                <Form.Control 
                                    name="email" 
                                    onChange={onChangeHandler} 
                                    type="email" 
                                    placeholder="Enter email" 
                                />
                            </Form.Group>

                            <Form.Group 
                                className="mb-3" 
                                controlId="formBasicPassword"
                            >
                                <Form.Label 
                                className="text-white"
                                >
                                    Password
                                </Form.Label>
                                <Form.Control
                                    name="password" 
                                    type="password"
                                    onChange={onChangeHandler} 
                                    placeholder="Password" 
                                />
                            </Form.Group>
                        </legend>
                    </fieldset>
                    <Button 
                        type="submit" 
                        onClick={onSubmitHandler} 
                        className="d-block w-100 mt-2" 
                        variant="outline-primary" 
                        size="lg"
                    >
                    Login
                    </Button>
                    <Link 
                    to="/" 
                    className="d-inline-block mt-2 text-decoration-none fw-bold register"
                    >
                        Sign up
                    </Link>
                </Form>
            </Col>
        </Container>
     );
}
 
export default Login;
