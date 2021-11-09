import {
    USER_AUTH,
    USER_AUTH_SUCCESS,
    USER_AUTH_FAILED
} from '../types';
import axiosClient from "../config/axiosClient";

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

export function authenticate(data) {
    return async (dispatch) => {
        dispatch(authUser());
        try {
            console.log(data);
            const response = await axiosClient.post('api/v1/auth', data);
            //dispatch(authUserSuccess(response.data)); 
            console.log(response);
        } catch (error) {
            console.log(error);
            dispatch(authUserFailure(true));
        }
    }
}