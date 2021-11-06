/* eslint-disable import/no-anonymous-default-export */
import {
    GET_USER,
    GET_USER_SUCCESS,
    GET_USER_FAILED,
    GET_STACK,
    GET_STACK_SUCCES,
    GET_STACK_FAILED,
    GET_SOCIAL,
    GET_SOCIAL_SUCCESS,
    GET_SOCIAL_FAILED,
    GET_EDUCATION,
    GET_EDUCATION_SUCCESS
} from '../types/';
const initialState = {
    user: [],
    stack: [],
    social: [],
    loading: false,
    error: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_USER:
        case GET_STACK:   
        case GET_SOCIAL:
        case GET_EDUCATION:    
            return ({
                ...state,
                loading: action.payload
            });
        case GET_USER_SUCCESS:
            return ({
                ...state,
                user: action.payload,
                error: false
            });
        case GET_STACK_SUCCES:
            return ({
                ...state,
                stack: action.payload,
                error: false
            });
        case GET_SOCIAL_SUCCESS:
            return({
                ...state,
                social: action.payload,
                error: false
            }); 
        case GET_EDUCATION_SUCCESS:
            return({
                ...state,
                education: action.payload,
                error: false
            })       
        case GET_USER_FAILED:
        case GET_STACK_FAILED:
        case GET_SOCIAL_FAILED:
            return ({
                ...state,
                error: true
            });
        default:
            return state;
    }
}