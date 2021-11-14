/* eslint-disable import/no-anonymous-default-export */
import {
    GET_PROFILE,
    GET_PROFILE_SUCCESS,
    GET_PROFILE_FAILED,

    EDIT_EDUCATION,
    EDIT_EDUCATION_SUCCESS,
    EDIT_EDUCATION_FAILED,
    DELETE_EDUCATION,
    DELETE_EDUCATION_SUCCESS,
    DELETE_EDUCATION_FAILED,
    CREATE_EDUCATION,
    CREATE_EDUCATION_SUCCESS,
    CREATE_EDUCATION_FAILED,

    CREATE_JOB,
    CREATE_JOB_SUCCESS,
    CREATE_JOB_FAILED,
    EDIT_JOB,
    EDIT_JOB_SUCCESS,
    EDIT_JOB_FAILED,
    DELETE_JOB,
    DELETE_JOB_SUCCESS,
    DELETE_JOB_FAILED,

    CREATE_COURSE,
    CREATE_COURSE_SUCCESS,
    CREATE_COURSE_FAILED,
    EDIT_COURSE,
    EDIT_COURSE_SUCCESS,
    EDIT_COURSE_FAILED,
    DELETE_COURSE,
    DELETE_COURSE_SUCCESS,
    DELETE_COURSE_FAILED,

    CREATE_SKILL,
    CREATE_SKILL_SUCCESS,
    CREATE_SKILL_FAILED,
    EDIT_SKILL,
    EDIT_SKILL_SUCCESS,
    EDIT_SKILL_FAILED,
    DELETE_SKILL,
    DELETE_SKILL_SUCCESS,
    DELETE_SKILL_FAILED,

    UPDATE_PERSONAL,
    UPDATE_PERSONAL_SUCCESS,
    UPDATE_PERSONAL_FAILED,

    UPDATE_SOCIAL,
    UPDATE_SOCIAL_SUCCESS,
    UPDATE_SOCIAL_FAILED,

    UPDATE_HOBBIE,
    UPDATE_HOBBIE_SUCCESS,
    UPDATE_HOBBIE_FAILED,

    UPDATE_ABOUT,
    UPDATE_ABOUT_SUCCESS,
    UPDATE_ABOUT_FAILED,

    UPDATE_PICTURE,
    UPDATE_PICTURE_SUCCESS,
    UPDATE_PICTURE_FAILED

} from '../types';
const initialState = {
    profile: {
        name: "",
        lastname: "",
        picture: "/assets/img/profile/default.png",
        title: "",
        email: "",
        education: [],
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
                loading: false,
                error: false
            });       
        case GET_PROFILE_FAILED:            
            return ({
                ...state,
                error: action.payload,
                loading: false
            });

        //Editing profile  (basically just checking current action on redux)
        case UPDATE_PERSONAL:
        case UPDATE_SOCIAL:
        case UPDATE_HOBBIE:
        case UPDATE_ABOUT:
        case CREATE_EDUCATION:  
        case EDIT_EDUCATION:
        case DELETE_EDUCATION:
        case CREATE_JOB:
        case EDIT_JOB:
        case DELETE_JOB: 
        case CREATE_COURSE:
        case EDIT_COURSE:
        case DELETE_COURSE:
        case CREATE_SKILL:
        case EDIT_SKILL:
        case DELETE_SKILL:
        case UPDATE_PICTURE:                                
            return({
                ...state
            });
        case UPDATE_PERSONAL_SUCCESS:
            return({
                ...state,
                profile: { ...state.profile, 
                "name" : action.payload.name,
                "lastname": action.payload.lastname,
                "title": action.payload.title }
            });    
        case UPDATE_SOCIAL_SUCCESS:
            return({
                ...state,
                profile:  { ...state.profile, 
                "social" : action.payload }
            });
        case UPDATE_HOBBIE_SUCCESS:
            return({
                ...state,
                profile:  { ...state.profile, 
                "hobbie" : action.payload }                
            });
        case UPDATE_ABOUT_SUCCESS:
            return({
                ...state,
                profile:  { ...state.profile, 
                    "about" : action.payload }   
            });
        case UPDATE_PICTURE_SUCCESS:
            return({
                ...state,
                profile:  { ...state.profile, 
                "picture" : action.payload }   
            });                                 
        case CREATE_EDUCATION_SUCCESS:
            return({
                ...state,
                profile: { ...state.profile, 
                "education" : [action.payload, ...state.profile.education]}
            });
        case EDIT_EDUCATION_SUCCESS:
            return({
                ...state,
                //I know this is uggly as fuck but I'll fix this I promise :3
                profile: { ...state.profile, 
                "education" : 
                state.profile.education.map(registry => registry._id === action.payload._id ? action.payload : registry)}
            });
        case DELETE_EDUCATION_SUCCESS:
            return({
                ...state,
                profile: { ...state.profile, 
                "education" : 
                state.profile.education.filter(registry => registry._id !== action.payload)}
            });
        case CREATE_JOB_SUCCESS:
            return({
                ...state,
                profile: { ...state.profile, 
                "jobs" : [action.payload, ...state.profile.jobs]}
            });
        case EDIT_JOB_SUCCESS:
            return({
                ...state,
                profile: { ...state.profile, 
                "jobs" : 
                state.profile.jobs.map(registry => registry._id === action.payload._id ? action.payload : registry)}
            });
        case DELETE_JOB_SUCCESS:
            return({
                ...state,
                profile: { ...state.profile, 
                "jobs" : 
                state.profile.jobs.filter(registry => registry._id !== action.payload)}                
            });
        case CREATE_COURSE_SUCCESS:
            return ({
                ...state,
                profile: { ...state.profile, 
                "courses" : [action.payload, ...state.profile.courses]}
            });
        case EDIT_COURSE_SUCCESS:
            return({
                ...state,
                profile: { ...state.profile, 
                "courses" : 
                state.profile.courses.map(registry => registry._id === action.payload._id ? action.payload : registry)}
            });
        case DELETE_COURSE_SUCCESS:
            return({
                ...state,
                profile: { ...state.profile, 
                "courses" : 
                state.profile.courses.filter(registry => registry._id !== action.payload)}                   
            });
        case CREATE_SKILL_SUCCESS:
            return ({
                ...state,
                profile: { ...state.profile, 
                "stack" : [action.payload, ...state.profile.stack]}
            });
        case EDIT_SKILL_SUCCESS:
            return({
                ...state,
                profile: { ...state.profile, 
                "stack" : 
                state.profile.stack.map(registry => registry._id === action.payload._id ? action.payload : registry)}
            });
        case DELETE_SKILL_SUCCESS:
            return({
                ...state,
                profile: { ...state.profile, 
                "stack" : 
                state.profile.stack.filter(registry => registry._id !== action.payload)}                   
            });
        case UPDATE_PERSONAL_FAILED:                                         
        case CREATE_EDUCATION_FAILED:                   
        case DELETE_EDUCATION_FAILED:    
        case EDIT_EDUCATION_FAILED:
        case CREATE_JOB_FAILED:
        case EDIT_JOB_FAILED:
        case DELETE_JOB_FAILED:
        case CREATE_COURSE_FAILED:
        case EDIT_COURSE_FAILED:
        case DELETE_COURSE_FAILED:
        case CREATE_SKILL_FAILED:
        case EDIT_SKILL_FAILED:
        case DELETE_SKILL_FAILED:
        case UPDATE_SOCIAL_FAILED:
        case UPDATE_HOBBIE_FAILED:
        case UPDATE_ABOUT_FAILED:
        case UPDATE_PICTURE_FAILED:                    
            return({
                ...state,
                error: true
            });
        default:
            return state;
    }
}
