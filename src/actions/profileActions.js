import {
    GET_PROFILE,
    GET_PROFILE_SUCCESS,
    GET_PROFILE_FAILED
} from '../types';
import axiosClient from "../config/axiosClient";

//Get user personal info
const getProfileInfo = () => ({
    type: GET_PROFILE,
    payload: true
});
const getProfileInfoSuccess = user => ({
    type: GET_PROFILE_SUCCESS,
    payload: user,
});
const getProfileFailure = state => ({
    type: GET_PROFILE_FAILED,
    payload: state,
});

//User personal info
export function profileInfo() {
    return async (dispatch) => {
        dispatch(getProfileInfo());
        try {
            const response = await axiosClient.get('api/v1/profile/61884778ba53dbaa421ed744');
            dispatch(getProfileInfoSuccess(response.data)); 
        } catch (error) {
            console.log(error);
            dispatch(getProfileFailure(true));
        }
    }
}
