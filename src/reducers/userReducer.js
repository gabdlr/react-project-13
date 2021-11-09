
/* eslint-disable import/no-anonymous-default-export */
import {
    USER_AUTH,
    USER_AUTH_SUCCESS,
    USER_AUTH_FAILED
} from '../types';

const initialState = {
    user: {
        id: "",
        token: "",
        name: "",
        lastname: ""
    },
    loading: false,
    error: null
}

export default function (state = initialState, action) {
    switch(action.type){
        case USER_AUTH:
            return({
                ...state,
                loading: action.payload
            });
        default:
            return state;
    }
}