import {
    GET_PROFILE,
    GET_PROFILE_SUCCESS,
    GET_PROFILE_FAILED,

    CREATE_EDUCATION,
    CREATE_EDUCATION_SUCCESS,
    CREATE_EDUCATION_FAILED,
    EDIT_EDUCATION,
    EDIT_EDUCATION_SUCCESS,
    EDIT_EDUCATION_FAILED,
    DELETE_EDUCATION,
    DELETE_EDUCATION_SUCCESS,
    DELETE_EDUCATION_FAILED,

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
import axiosClient from "../config/axiosClient";
import useAlertHandler from '../hooks/useAlertHandler';

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

//Non createable nor deleteable
//Update personal info (name, lastname, title)
const updatePersonalInfo = () => ({
    type: UPDATE_PERSONAL,
});
const updatePersonalInfoSuccess = registry => ({
    type: UPDATE_PERSONAL_SUCCESS,
    payload: registry
});
const updatePersonalInfoFailure = state => ({
    type: UPDATE_PERSONAL_FAILED,
    payload: state
});
//Update social info
const updateSocialInfo = () => ({
    type: UPDATE_SOCIAL
});
const updateSocialInfoSuccess = registry => ({
    type: UPDATE_SOCIAL_SUCCESS,
    payload: registry
});
const updateSocialInfoFailure = state => ({
    type: UPDATE_SOCIAL_FAILED,
    payload: state
});
//Update hobbie info
const updateHobbieInfo = () => ({
    type: UPDATE_HOBBIE
});
const updateHobbieInfoSuccess = registry => ({
    type: UPDATE_HOBBIE_SUCCESS,
    payload: registry
});
const updateHobbieInfoFailure = state => ({
    type: UPDATE_HOBBIE_FAILED,
    payload: state
});
//Update about info
const updateAboutInfo = () => ({
    type: UPDATE_ABOUT
});
const updateAboutInfoSuccess = registry => ({
    type: UPDATE_ABOUT_SUCCESS,
    payload: registry
});
const updateAboutInfoFailure = state => ({
    type: UPDATE_ABOUT_FAILED,
    payload: state
});
//Update picture
const updatePictureInfo = () => ({
    type: UPDATE_PICTURE
});
const updatePictureInfoSuccess = registry => ({
    type: UPDATE_PICTURE_SUCCESS,
    payload: registry
});
const updatePictureInfoFailure = state => ({
    type: UPDATE_PICTURE_FAILED,
    payload: state
});



//Create education info
const createEducationInfo = () => ({
    type: CREATE_EDUCATION
})
const createEducationInfoSuccess = registry => ({
    type: CREATE_EDUCATION_SUCCESS,
    payload: registry
});
const createEducationInfoFailure = state => ({
    type: CREATE_EDUCATION_FAILED,
    payload: state
})
//Update education info
const updateEducationInfo = () => ({
    type: EDIT_EDUCATION,
});
const updateEducationInfoSuccess = registry => ({
    type: EDIT_EDUCATION_SUCCESS,
    payload: registry
});
const updateEducationInfoFailure = state => ({
    type: EDIT_EDUCATION_FAILED,
    payload: state
});
//Delete education info
const deleteEducationInfo = () => ({
    type: DELETE_EDUCATION
});
//TODO send only object id instead of full object
const deleteEducationInfoSuccess = registry => ({
    type: DELETE_EDUCATION_SUCCESS,
    payload: registry
});
const deleteEducationInfoFailure = state => ({
    type: DELETE_EDUCATION_FAILED,
    payload: state    
})

//Create job info
const createJobInfo = () => ({
    type: CREATE_JOB
});
const createJobInfoSuccess = registry => ({
    type: CREATE_JOB_SUCCESS,
    payload: registry
});
const createJobInfoFailure = state => ({
    type: CREATE_JOB_FAILED,
    payload: state
});
//Update job info
const updateJobInfo = () => ({
    type: EDIT_JOB
});
const updateJobInfoSuccess = registry => ({
    type: EDIT_JOB_SUCCESS,
    payload: registry
});
const updateJobInfoFailure = state => ({
    type: EDIT_JOB_FAILED,
    payload: true
});
//Delete job info
const deleteJobInfo = () => ({
    type: DELETE_JOB
});
const deleteJobInfoSuccess = registry => ({
    type: DELETE_JOB_SUCCESS,
    payload: registry
});
const deleteJobInfoFailure = state => ({
    type: DELETE_JOB_FAILED,
    payload: state
});

//Create course info
const createCourseInfo = () => ({
    type: CREATE_COURSE
});
const createCourseInfoSuccess = registry => ({
    type: CREATE_COURSE_SUCCESS,
    payload: registry
});
const createCourseInfoFailure = state => ({
    type: CREATE_COURSE_FAILED,
    payload: state
});
//Update course info
const updateCourseInfo = () => ({
    type: EDIT_COURSE
});
const updateCourseInfoSuccess = registry => ({
    type: EDIT_COURSE_SUCCESS,
    payload: registry
});
const updateCourseInfoFailure = state => ({
    type: EDIT_COURSE_FAILED,
    payload: state
});
//Delete course info
const deleteCourseInfo = () => ({
    type: DELETE_COURSE
});
const deleteCourseInfoSuccess = registry => ({
    type: DELETE_COURSE_SUCCESS,
    payload: registry    
});
const deleteCourseInfoFailure = state => ({
    type: DELETE_COURSE_FAILED,
    payload: state
});
//Create skill info
const createSkillInfo = () => ({
    type: CREATE_SKILL
});
const createSkillInfoSuccess = registry => ({
    type: CREATE_SKILL_SUCCESS,
    payload: registry
});
const createSkillInfoFailure = state => ({
    type: CREATE_SKILL_FAILED,
    payload: state
});
//Update skill info
const updateSkillInfo = () => ({
    type: EDIT_SKILL
});
const updateSkillInfoSuccess = registry => ({
    type: EDIT_SKILL_SUCCESS,
    payload: registry
});
const updateSkillInfoFailure = state => ({
    type: EDIT_SKILL_FAILED,
    payload: state
});
//Delete skill info
const deleteSkillInfo = () => ({
    type: DELETE_SKILL
});
const deleteSkillInfoSuccess = registry => ({
    type: DELETE_SKILL_SUCCESS,
    payload: registry
});
const deleteSkillInfoFailure = state => ({
    type: DELETE_SKILL_FAILED,
    payload: state
});

//Full Profile info get
export function profileInfo(id) {
    return async (dispatch) => {
        dispatch(getProfileInfo());
        try {
            const response = await axiosClient.get(`api/v1/profile/${id}`);
            dispatch(getProfileInfoSuccess(response.data)); 
        } catch (error) {
            dispatch(getProfileFailure(true));
        }
    }
}

//Personal info update
export function updatePersonal (registry) {
    return async (dispatch) => {
        dispatch(updatePersonalInfo())
        try {
            const response = await axiosClient.put('/api/v1/personal/personal/', registry);
            dispatch(updatePersonalInfoSuccess(response.data.registry));
            useAlertHandler(response.data.msg, "success");
        } catch (error) {
            console.log(error);
             dispatch(updatePersonalInfoFailure(true));
             useAlertHandler(error.response.data, "error");
        }
    }    
}
//Social info update
export function updateSocial (registry) {
    return async (dispatch) => {
        dispatch(updateSocialInfo())
        try {
            const response = await axiosClient.put('/api/v1/personal/social/', registry);
            dispatch(updateSocialInfoSuccess(response.data.registry));
            useAlertHandler(response.data.msg, "success");
        } catch (error) {
            console.log(error);
             dispatch(updateSocialInfoFailure(true));
             useAlertHandler(error.response.data, "error");
        }
    }
}
//Hobbie info update
export function updateHobbies (registry) {
    return async (dispatch) => {
        dispatch(updateHobbieInfo())
        try {
            const response = await axiosClient.put('/api/v1/personal/hobbies/', registry);
            dispatch(updateHobbieInfoSuccess(response.data.registry));
            useAlertHandler(response.data.msg, "success");
        } catch (error) {
            console.log(error);
             dispatch(updateHobbieInfoFailure(true));
             useAlertHandler(error.response.data, "error");
        }
    }
}
//About info update
export function updateAbout (registry) {
    return async (dispatch) => {
        dispatch(updateAboutInfo())
        try {
            const response = await axiosClient.put('/api/v1/personal/about/', registry);
            dispatch(updateAboutInfoSuccess(response.data.registry));
            useAlertHandler(response.data.msg, "success");
        } catch (error) {
            console.log(error);
             dispatch(updateAboutInfoFailure(true));
             useAlertHandler(error.response.data, "error");
        }
    }
}
//Profile picture update
export function updatePicture (registry) {
    return async (dispatch) => {
        dispatch(updatePictureInfo())
        try {
            const formData = new FormData();
            const config = { headers: {'content-type': 'multipart/form-data'}}
            formData.append('picture', registry);
            const response = await axiosClient.put('api/v1/pictures', formData, config );
            dispatch(updatePictureInfoSuccess(response.data.registry));
            useAlertHandler(response.data.msg, "success");
        } catch (error) {
            console.log(error);
             dispatch(updatePictureInfoFailure(true));
             useAlertHandler(error.response.data, "error");
        }
    }    
}



//Education info
export function createEducation(registry){
    return async (dispatch) => {
        dispatch(createEducationInfo())
        try {
            const response = await axiosClient.post('/api/v1/education/', registry);
            dispatch(createEducationInfoSuccess(response.data));
            useAlertHandler('New education registry sucessfuly added!', "success");
        } catch (error) {
            dispatch(createEducationInfoFailure(true));
            useAlertHandler(error.response.data, "error");
        }
    }
}

export function updateEducation(registry){
    return async (dispatch) => {
        dispatch(updateEducationInfo())
        try {
            const response = await axiosClient.put(`/api/v1/education/${registry._id}`, registry);
            dispatch(updateEducationInfoSuccess(response.data.registry));
            useAlertHandler(response.data.msg, "success");
        } catch (error) {
            console.log(error);
             dispatch(updateEducationInfoFailure(true));
             useAlertHandler(error.response.data, "error");
        }
    }
}

export function deleteEducation(id){
    return async (dispatch) => {
        dispatch(deleteEducationInfo())
        try {
            const response = await axiosClient.delete(`/api/v1/education/${id}`);
            dispatch(deleteEducationInfoSuccess(response.data._id));
            useAlertHandler(response.data.msg, "success");
        } catch (error) {
            dispatch(deleteEducationInfoFailure(true));
            useAlertHandler(error.response.data, "error");
        }
    }
}

//Job info
export function createJob(registry){
    return async (dispatch) => {
        dispatch(createJobInfo())
        try {
            const response = await axiosClient.post('/api/v1/jobs/', registry);
            dispatch(createJobInfoSuccess(response.data));
            useAlertHandler('New employ registry sucessfuly added!', "success");
        } catch (error) {
            dispatch(createJobInfoFailure(true));
            useAlertHandler(error.response.data, "error");
        }
    }
}

export function updateJob(registry){
    return async (dispatch) => {
        dispatch(updateJobInfo())
        try {
            const response = await axiosClient.put(`/api/v1/jobs/${registry._id}`, registry);
            dispatch(updateJobInfoSuccess(response.data.registry));
            useAlertHandler(response.data.msg, "success");
        } catch (error) {
             dispatch(updateJobInfoFailure(true));
             console.log(error.response);
             useAlertHandler(error.response.data, "error");
        }
    }
}

export function deleteJob(id){
    return async (dispatch) => {
        dispatch(deleteJobInfo())
        try {
            const response = await axiosClient.delete(`/api/v1/jobs/${id}`);
            dispatch(deleteJobInfoSuccess(response.data._id));
            useAlertHandler(response.data.msg, "success");
        } catch (error) {
            dispatch(deleteJobInfoFailure(true));
            useAlertHandler(error.response.data, "error");
        }
    }
}

//Courses info
export function createCourse(registry){
    return async (dispatch) => {
        dispatch(createCourseInfo())
        try {
            const response = await axiosClient.post('/api/v1/courses/', registry);
            dispatch(createCourseInfoSuccess(response.data));
            useAlertHandler('New certificate registry sucessfuly added!', "success");
        } catch (error) {
            dispatch(createCourseInfoFailure(true));
            useAlertHandler(error.response.data, "error");
        }
    }
}

export function updateCourse(registry){
    return async (dispatch) => {
        dispatch(updateCourseInfo())
        try {
            const response = await axiosClient.put(`/api/v1/courses/${registry._id}`, registry);
            dispatch(updateCourseInfoSuccess(response.data.registry));
            useAlertHandler(response.data.msg, "success");
        } catch (error) {
             dispatch(updateCourseInfoFailure(true));
             console.log(error.response);
             useAlertHandler(error.response.data, "error");
        }
    }    
}

export function deleteCourse(id){
    return async (dispatch) => {
        dispatch(deleteCourseInfo())
        try {
            const response = await axiosClient.delete(`/api/v1/courses/${id}`);
            dispatch(deleteCourseInfoSuccess(response.data._id));
            useAlertHandler(response.data.msg, "success");
        } catch (error) {
            dispatch(deleteCourseInfoFailure(true));
            useAlertHandler(error.response.data, "error");
        }
    }    
}

//Skills (aka stack) info
export function createSkill(registry){
    return async (dispatch) => {
        dispatch(createSkillInfo())
        try {
            const response = await axiosClient.post('/api/v1/stack/', registry);
            dispatch(createSkillInfoSuccess(response.data));
            useAlertHandler('New skill registry sucessfuly added!', "success");
        } catch (error) {
            dispatch(createSkillInfoFailure(true));
            useAlertHandler(error.response.data, "error");
        }
    }
}

export function updateSkill(registry){
    return async (dispatch) => {
        dispatch(updateSkillInfo())
        try {
            const response = await axiosClient.put(`/api/v1/stack/${registry._id}`, registry);
            dispatch(updateSkillInfoSuccess(response.data.registry));
            useAlertHandler(response.data.msg, "success");
        } catch (error) {
             dispatch(updateSkillInfoFailure(true));
             console.log(error.response);
             useAlertHandler(error.response.data, "error");
        }
    }   
}

export function deleteSkill(id){
    return async (dispatch) => {
        dispatch(deleteSkillInfo())
        try {
            const response = await axiosClient.delete(`/api/v1/stack/${id}`);
            dispatch(deleteSkillInfoSuccess(response.data._id));
            useAlertHandler(response.data.msg, "success");
        } catch (error) {
            dispatch(deleteSkillInfoFailure(true));
            useAlertHandler(error.response.data, "error");
        }
    }   
}
