import React, { useEffect, useLayoutEffect } from 'react';
import Header from '../../Header';
import 'bootstrap-icons/font/bootstrap-icons.css';
//Sections
import PersonalSection from './PersonalSection';
import SocialSection from './SocialSection';
import AboutSection from './AboutSection';
import ResumeSection from './ResumeSection';
//Redux
import { useDispatch, useSelector } from 'react-redux';
import { getAuthenticatedUser } from '../../../actions/userActions';
import { profileInfo } from '../../../actions/profileActions'

const EditProfile = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        const token = localStorage.getItem('token');
        //If user has token, token is set in header by the authToken fn,
        //and authentication is triggered
        if(token){
            const authenticate = () => dispatch(getAuthenticatedUser());
            authenticate();
        }
    },[dispatch,]);

    const loading =  useSelector(state => state.view.loading)
    
    const user = useSelector(state => state.user);
    const userId = user.data._id;
    
    useLayoutEffect(() => {
        if(userId){
            const loadUser = () => dispatch(profileInfo(userId));
            loadUser();
        }
    },[userId, dispatch]);


    return(
    <div>
    {loading ?  (<div className="loader"></div>) :
    user.loading ? (<div className="loader"></div>) :
    ( 
        <div className="pt-3">
            <Header
                EditProfile={true}
            />
            <PersonalSection/>
            <SocialSection/>
            <AboutSection/>
            <ResumeSection/>    
        </div>
    )}
    </div>);
}
 
export default EditProfile;