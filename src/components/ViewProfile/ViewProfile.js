import React, { Fragment, useLayoutEffect, useEffect } from 'react'
import { Row, Col } from "react-bootstrap";
import { useParams, useNavigate } from 'react-router';
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
import MainHobbiesSection from "./Main/MainHobbiesSection";
import MainAboutSection from './Main/MainAboutSection';
import MainSkillsSection from './Main/MainSkillsSection';
//Redux
import { useDispatch, useSelector } from 'react-redux';
import { profileInfo } from '../../actions/profileActions'
import { getAuthenticatedUser } from '../../actions/userActions'
import Footer from '../Footer';
const ViewProfile = () => {
    const params = useParams();
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
  
    const user = useSelector(state => state.user);
    const profile = useSelector(state => state.view);

    useLayoutEffect(() => {
      if(params.id){
        const loadUser = () => dispatch(profileInfo(params.id));
        loadUser();
        return;
      } 
    },[dispatch, user, params.id]);
    
    const userId = user.data._id;
    
    const navigate = useNavigate();
    useLayoutEffect(() => {
        if(userId&&!params.id){
          navigate('/ViewProfile/'+userId)
          return;
        }
    },[userId, navigate, params, user]);
    return (
      <div>
      { profile.loading ? (<div className="loader"></div> ) : 
        user.loading  ? <div className="loader"></div> :
      ( <Fragment>
          <Header Home={true}/>
            <div className="container-lg pt-5">
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
                    {profile.profile.about === "" ? null : <MainAboutSection/>}
                    {!profile.profile.education.length ? null : <MainEducationSection/>}
                    {!profile.profile.jobs.length ? null : <MainEmploymentSection/>}
                    {!profile.profile.courses.length ? null : <MainCoursesSection/>}
                    {profile.profile.hobbies === "" ? null : <MainHobbiesSection/>}
                    {!profile.profile.stack.length ? null : <MainSkillsSection/> }
                  </Col>
              </Row>
            </div>
          <Footer/>
        </Fragment>
      ) }   
    </div>);
}
 
export default ViewProfile;
