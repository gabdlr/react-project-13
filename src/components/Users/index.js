import React, { useState, useEffect } from 'react';
import { Col, Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './users.css';
//Redux
import { authenticate, getAuthenticatedUser } from '../../actions/userActions'
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {
        //Boostrap's form validation
        const [validated, setValidated] = useState(false);

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
            const form = document.getElementById('login-form');
            e.preventDefault();
            if (form.checkValidity() === false) {
            e.stopPropagation();
            }
            setValidated(true);
            fireAuthentication(user);
        }
    
        const dispatch = useDispatch();
        const fireAuthentication = (userInfo) => dispatch(authenticate(userInfo));

        //Listen for authentication
        const authenticatedUser = useSelector(state => state.user);
        const navigate = useNavigate();

        useEffect(() => {
            const userAuthenticated = () => dispatch(getAuthenticatedUser());
            if(authenticatedUser.auth){
                userAuthenticated();
                navigate('/Users/EditProfile');
            }
        },[authenticatedUser, dispatch, navigate])

    return ( 
        <Col className="bg-primary px-5 pt-5 pb-3 rounded mt-5 box">
        <h3 className="text-white text-center mb-4">User's login</h3>
        <Form
            id="login-form"
            noValidate 
            validated={validated}
        >
            <fieldset>
                <legend>
                    <Form.Group 
                        className="mb-3" 
                        controlId="formBasicEmail"
                    >
                        <Form.Label className="text-white">Email address</Form.Label>
                        
                        <Form.Control
                            required 
                            name="email" 
                            onChange={onChangeHandler} 
                            type="email" 
                            placeholder="Enter email" 
                        />
                        <Form.Control.Feedback type="invalid">
                        Email address is invalid.
                        </Form.Control.Feedback>
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
                            required
                            minLength="6"
                            name="password" 
                            type="password"
                            onChange={onChangeHandler} 
                            placeholder="Password" 
                        />
                        <Form.Control.Feedback type="invalid">
                        Password is invalid.
                        </Form.Control.Feedback>
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
            to="/Users/Register" 
            className="d-inline-block mt-2 text-decoration-none fw-bold register"
            >
                Sign up
            </Link>
        </Form>
    </Col>
     );
}

export default Login;