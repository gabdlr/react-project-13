import {
    USER_AUTH,
    USER_AUTH_SUCCESS,
    USER_AUTH_FAILED,
    GET_AUTHENTICATED_USER,
    GET_AUTHENTICATED_USER_SUCCESS,
    GET_AUTHENTICATED_USER_FAILED,
    CREATE_USER,
    CREATE_USER_SUCCESS,
    CREATE_USER_FAILED,
    USER_LOGOUT,
    USER_CONTACT,
    USER_CONTACT_SUCCESS,
    USER_CONTACT_FAILED
} from '../types';
import axiosClient from "../config/axiosClient";
import authToken from '../config/authToken';
import useAlertHandler from '../hooks/useAlertHandler';

//Authenticate user
//Authentication
const authUser = () => ({
    type: USER_AUTH,
    payload: true
})
//Authetication succeeded
const authUserSuccess = user => ({
    type: USER_AUTH_SUCCESS,
    payload: user
});
//Authetication failed
const authUserFailure = state => ({
    type: USER_AUTH_FAILED,
    payload: state
});

//Retrive data of authenticated user
const getAuthUser = () => ({
    type: GET_AUTHENTICATED_USER,
    payload: true
});
//Success
const getAuthUserSuccess = userData => ({
    type: GET_AUTHENTICATED_USER_SUCCESS,
    payload: userData
});
//Failed
const getAuthUserFailure = state => ({
    type: GET_AUTHENTICATED_USER_FAILED,
    payload: state
});

//New registers
const createUser = () => ({
    type: CREATE_USER,
    payload: true
});
const createUserSuccess = userData => ({
    type: CREATE_USER_SUCCESS,
    payload: userData,
});
const createUserFailure = state => ({
    type: CREATE_USER_FAILED,
    payload: state
});

const userLogOut = () => ({
    type: USER_LOGOUT
});

//Contact
const newContact = () => ({
    type: USER_CONTACT,
    payload: false
});
const contactSuccess = response => ({
    type: USER_CONTACT_SUCCESS,
    payload: response
});
const contactFailure = state => ({
    type: USER_CONTACT_FAILED,
    payload: true
});
//User authentication
export function authenticate(userData) {
    return async (dispatch) => {
        dispatch(authUser());
        try {
            const response = await axiosClient.post('/api/v1/auth/', userData);
            dispatch(authUserSuccess(response.data));
        } catch (error) {
            dispatch(authUserFailure(true));
            useAlertHandler(error.response.data, "error");  
        }
    }
}

//Not the cleanest solution to split it into 2 different steps
//may be I'll refactor this when done
export function getAuthenticatedUser() {
    return async (dispatch) => {
        dispatch(getAuthUser());
        const token = localStorage.getItem('token');
        if(token){
            //Pass the token from the storage to the function that adds it to the req header
            authToken(token);
        }
        try {
            const response = await axiosClient.get('/api/v1/auth');
            dispatch(getAuthUserSuccess(response.data))
        } catch (error) {
            dispatch(getAuthUserFailure(true));
        }
    }
}

//Logout function which I think can't virtually fail
export function logout() {
    return (dispatch) => {
        dispatch(userLogOut());
    }
} 

//New user registration
export function createNewUser(userData){
    return async (dispatch) => {
       dispatch(createUser(true));
       try {
           const response = await axiosClient.post('/api/v1/user/', userData);
           dispatch(createUserSuccess(response.data));
       } catch (error) {
        dispatch(createUserFailure(true));
        //useAlertHandler(error.response.data, "error");   
       } 
    }
}

//Contact
export function contact(contactData){
    return async (dispatch) => {
        dispatch(newContact(contactData));
        try{
            const response = await axiosClient.post('/api/v1/contact/', contactData);
            dispatch(contactSuccess());
            useAlertHandler(response.data.msg, "success");
        } catch(error){
            dispatch(contactFailure(true));
            //useAlertHandler(error.response.data, "error");   
        }
    }
}