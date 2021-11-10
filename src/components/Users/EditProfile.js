import React, { useEffect } from 'react';
import Header from '../Header';
import 'bootstrap-icons/font/bootstrap-icons.css';
//Sections
import PersonalSection from './PersonalSection';
import SocialSection from './SocialSection';
import AboutSection from './AboutSection';
import ResumeSection from './ResumeSection';
//Redux
import { useDispatch } from 'react-redux';
import { getAuthenticatedUser } from '../../actions/userActions';

const EditProfile = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        // const loadUser = () => dispatch(profileInfo());
        // loadUser();
        const token = localStorage.getItem('token');
        //If user has token, token is set in header by the authToken fn,
        //and authentication is triggered
        if(token){
          const authenticate = () => dispatch(getAuthenticatedUser());
          authenticate();
        }
    });

    return ( 
        <div className="pt-3">
            <Header
                EditProfile={true}
            />
            <PersonalSection/>
            <SocialSection/>
            <AboutSection/>
            <ResumeSection/>    
        </div>
     );
}
 
export default EditProfile;