import React, { useEffect } from 'react';
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
            const loadUser = () => dispatch(profileInfo(user.id));
            loadUser();
        }
    },[dispatch]);
    
    const user = useSelector(state => state.user);
    //We load user data after token auth
    const loading = useSelector(state => state.view.loading)
    return(
    <div>
    {loading ?  (<div className="loader"></div>) :
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