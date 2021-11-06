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
    GET_EDUCATION_SUCCESS,
    GET_EDUCATION_FAILED
} from '../types/';
import axiosClient from "./../config/axiosClient";

//Get user personal info
const getUserPersonalInfo = () => ({
    type: GET_USER,
    payload: true
});
const getUserPersonalInfoSuccess = user => ({
    type: GET_USER_SUCCESS,
    payload: user
});
const getUserPersonalInfoFailure = state => ({
    type: GET_USER_FAILED,
    payload: state
});

//Get user stack
const getUserStack = () => ({
    type: GET_STACK,
    payload: true
});
const getUserStackSuccess = stack => ({
    type: GET_STACK_SUCCES,
    payload: stack
});
const getUserStackFailure = state => ({
    type: GET_STACK_FAILED,
    payload: state
})

//Get user social
const getUserSocial = () => ({
    type: GET_SOCIAL,
    payload: true
});
const getUserSocialSuccess = social => ({
    type: GET_SOCIAL_SUCCESS,
    payload: social
});
const getUserSocialFailure = state => ({
    type: GET_SOCIAL_FAILED,
    payload: state
});

//Get user education
const getUserEducation = () => ({
    type: GET_EDUCATION,
    payload: true
});
const getUserEducationSuccess = education => ({
    type: GET_EDUCATION_SUCCESS,
    payload: education
});
const getUserEducationFailure = state => ({
    type: GET_EDUCATION_FAILED,
    payload: state
})


//User personal info
export function userPersonalInfo() {
    return async (dispatch) => {
        dispatch(getUserPersonalInfo());
        try {
            const response = await axiosClient.get('/users');
            dispatch(getUserPersonalInfoSuccess(response.data[0]));
        } catch (error) {
            console.log(error);
            dispatch(getUserPersonalInfoFailure(true));
        }
    }
}

//User stack
export function userStackInfo() {
    return async (dispatch) => {
        dispatch(getUserStack());
        try {
            const response = await axiosClient.get('/stack');
            dispatch(getUserStackSuccess(response.data));
        } catch (error) {
            console.log(error);
            dispatch(getUserStackFailure());
        }
    }
}

//User social networks
export function userSocialInfo() {
    return async (dispatch) => {
        dispatch(getUserSocial());   
        try {
            const response = await axiosClient.get('/social');
            dispatch(getUserSocialSuccess(response.data[0]));
        } catch (error) {
            console.log(error);
            dispatch(getUserSocialFailure());
        }
    }
}

//User education
export function userEducationInfo() {
    return async (dispatch) => {
        dispatch(getUserEducation());
        try {
            const response = await axiosClient.get('/education');
            dispatch(getUserEducationSuccess(response.data));
        } catch (error) {
            console.log(error);
            dispatch(getUserEducationFailure())
        }
    }
}