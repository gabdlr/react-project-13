
/* eslint-disable import/no-anonymous-default-export */
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

const initialState = {
    data: {
        id: null,
        name: "Guest",
        lastname: ""
    },
    auth: false,
    loading: false,
    error: null
}

export default function (state = initialState, action) {
    switch(action.type){
        case USER_AUTH:
        case GET_AUTHENTICATED_USER:
        case CREATE_USER:
            return({
                ...state,
                loading: action.payload
            });
        case USER_AUTH_SUCCESS:
        case CREATE_USER_SUCCESS:
            localStorage.setItem('token', action.payload);
            return{
                ...state,
                loading: false,
                auth:true
            }
        case GET_AUTHENTICATED_USER_SUCCESS:
            return{
                ...state,
                loading: false,
                data: action.payload,
                auth: true
            }  
        case USER_AUTH_FAILED:
        case GET_AUTHENTICATED_USER_FAILED:
            localStorage.removeItem('token')    
            return{
                ...state,
                error: action.payload,
                loading: false
            }
        case CREATE_USER_FAILED:
            return{
                ...state,
                error: action.payload,
                loading: false
            }
        case USER_LOGOUT:
            localStorage.removeItem('token');
            //Forgive me for my sins 🤦‍♂️
            return initialState;
        default:
            return state;
    }
}