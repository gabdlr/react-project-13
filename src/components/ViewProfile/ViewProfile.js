import React, { useEffect } from 'react'
import { Row, Col } from "react-bootstrap";
import Header from '../Header';
//Sidebar
import ProfilePersonalInfo from "./SideBar/ProfilePersonalInfo";
import ProfileStack from "./SideBar/ProfileStack";
import ProfileSocial from "./SideBar/ProfileSocial";
//Main
import NavBar from './Main/NavBar';
import MainEducationSection from "./Main/MainEducationSection";
import MainEmploymentSection from "./Main/MainEmploymentSection";
import MainCoursesSection from "./Main/MainCoursesSection";
import MainStackSection from "./Main/MainStackSection";
import MainToolsSection from "./Main/MainToolsSection";
import MainHobbiesSection from "./Main/MainHobbiesSection";
import MainAboutSection from './Main/MainAboutSection';
//Redux
import { useDispatch, useSelector } from 'react-redux';
import { profileInfo } from '../../actions/profileActions'
import { getAuthenticatedUser } from '../../actions/userActions'
const ViewProfile = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const loadUser = () => dispatch(profileInfo());
        loadUser();
        const token = localStorage.getItem('token');
        //If user has token, token is set in header by the authToken fn,
        //and authentication is triggered
        if(token){
          const authenticate = () => dispatch(getAuthenticatedUser());
          authenticate();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps    
    }, []);
    const loading = useSelector(state => state.view.loading);
    return (
      <div>
      { loading ? (<div className="loader"></div> ):
      (<div className="container-lg container-fluid pt-5">
        <Header/>
        <Row className="mt-md-3">
          <Col md={ 3 } className="bg-primary">
                <Row className="flex-column">
                  <ProfilePersonalInfo/>
                  <ProfileStack/>
                  <ProfileSocial/>
                </Row>
            </Col>
            <Col md={ 9 } className="bg-secondary p-3 pt-2">
              <NavBar/>
              <MainAboutSection/>
              <MainEducationSection/>
              <MainEmploymentSection/>
              <MainCoursesSection/>
              <MainStackSection/>
              <MainToolsSection/>
              <MainHobbiesSection/>
            </Col>
        </Row>
      </div>) }
    </div>);
}
 
export default ViewProfile;
