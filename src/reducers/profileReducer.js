/* eslint-disable import/no-anonymous-default-export */
import {
    GET_PROFILE,
    GET_PROFILE_SUCCESS,
    GET_PROFILE_FAILED,

} from '../types';
const initialState = {
    profile: {
        name: "",
        lastname: "",
        title: "",
        email: "",
        stack: [],
        social: {},
        jobs: [],
        courses: [],
        tools: [],
        hobbies: "",
    },
    loading: false,
    error: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_PROFILE:            
            return ({
                ...state,
                loading: action.payload
            });
        case GET_PROFILE_SUCCESS:
            return ({
                ...state,
                profile: action.payload,
                error: false
            });       
        case GET_PROFILE_FAILED:            
            return ({
                ...state,
                error: action.payload
            });
        default:
            return state;
    }
}