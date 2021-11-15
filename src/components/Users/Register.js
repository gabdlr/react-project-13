import React, { useState, useEffect } from 'react';
import { Col, Form, Button, FormGroup } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './users.css';
//Redux
import { getAuthenticatedUser, createNewUser } from '../../actions/userActions'
import { useDispatch, useSelector } from 'react-redux';

const Register = () => {
        //Boostrap's form validation
        const [validated, setValidated] = useState(false);

        const [ user, setUser ] = useState({
            "name": "",
            "lastname": "",
            "email": "",
            "password": "",
            "about":"",
            "hobbies":"",
            "social":{
                "linkedin_url":"",
                "github_url": "",
                "twitter_url": ""
            }
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
            fireCreateUser(user);
        }
    
        const dispatch = useDispatch();
        const fireCreateUser = (userInfo) => dispatch(createNewUser(userInfo));
    
        //Listen for authentication
        const auth = useSelector(state => state.user.auth);
        const navigate = useNavigate();
        useEffect(() => {
            const userAuthenticated = () => dispatch(getAuthenticatedUser());
            if(auth){
                userAuthenticated();
                navigate('/Users/ViewProfile/');
            }
        },[auth, dispatch, navigate])

    return ( 
        <Col className="bg-primary px-5 pt-5 pb-3 rounded mt-4 box mb-5">
        <h3 className="text-white text-center mb-4">Registration</h3>
        <Form
            id="login-form"
            noValidate 
            validated={validated}
        >
            <fieldset>
                <legend>
                    <FormGroup
                    className="mb-3"
                    controlId="formBasicName"
                    >
                        <Form.Label 
                        className="text-white"
                        >
                            Name
                        </Form.Label>
                        <Form.Control
                            required 
                            name="name" 
                            onChange={onChangeHandler} 
                            type="text" 
                            placeholder="Enter name" 
                        />
                        <Form.Control.Feedback type="invalid">
                        Name can not be empty.
                        </Form.Control.Feedback>
                    </FormGroup>
                    <FormGroup
                    className="mb-3"
                    controlId="formBasicLastname"
                    >
                        <Form.Label 
                        className="text-white"
                        >
                            Lastname
                        </Form.Label>
                        <Form.Control
                            required 
                            name="lastname" 
                            onChange={onChangeHandler} 
                            type="text" 
                            placeholder="Enter lastname" 
                        />
                        <Form.Control.Feedback type="invalid">
                        Lastname can not be empty.
                        </Form.Control.Feedback>
                    </FormGroup>    
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
                        Password must be at least 6 characters long.
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
            Sign Up
            </Button>
            <Link 
            to="/Users" 
            className="d-inline-block mt-3 text-decoration-none fw-bold register"
            >
                Already registered? Login!
            </Link>
        </Form>
    </Col>
     );
}
 
export default Register;