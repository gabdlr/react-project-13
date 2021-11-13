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
    USER_LOGOUT
} from '../types';
import axiosClient from "../config/axiosClient";
import authToken from '../config/authToken';
import useAlertHandler from '../hooks/useAlertHandler';


//TODO when erroring pass errors as payload

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

//User authentication
export function authenticate(userData) {
    return async (dispatch) => {
        dispatch(authUser());
        try {
            const response = await axiosClient.post('/api/v1/auth/', userData);
            dispatch(authUserSuccess(response.data));
        } catch (error) {
            console.log(error.response);
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
        if (error.response) {
            // Request made and server responded
            // console.log(error.response.data);
            // console.log(error.response.status);
        } else if (error.request) {
            // The request was made but no response was received
            // console.log(error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            // console.log('Error', error.message);
        }
        dispatch(createUserFailure(true));  
       } 
    }
}