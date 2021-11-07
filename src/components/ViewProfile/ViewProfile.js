import React, { useEffect } from 'react'
import { Row, Col } from "react-bootstrap";
//Sidebar
import ProfilePersonalInfo from "./ProfilePersonalInfo";
import ProfileStack from "./ProfileStack";
import ProfileSocial from "./ProfileSocial";
//Main
import NavBar from './NavBar';
import MainEducationSection from "./MainEducationSection";
import MainEmploymentSection from "./MainEmploymentSection";
import MainCoursesSection from "./MainCoursesSection";
import MainStackSection from "./MainStackSection";
import MainToolsSection from "./MainToolsSection";
import MainHobbiesSection from "./MainHobbiesSection";
import MainAboutSection from './MainAboutSection';
//Redux
import { useDispatch } from 'react-redux';
import { profileInfo } from '../../actions/profileActions'

const ViewProfile = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const loadUser = () => dispatch(profileInfo());
        loadUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps    
    }, []);
    return ( 
    <div className="container-lg container-fluid">
        <Row>
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
    </div> );
}
 
export default ViewProfile;
