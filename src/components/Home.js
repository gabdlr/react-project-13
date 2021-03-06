import React, { useLayoutEffect, useEffect, Fragment } from 'react'
import { Row, Col } from "react-bootstrap";
import Header from './Header';
import Footer from './Footer';
//Sidebar
import ProfilePersonalInfo from "./ViewProfile/SideBar/ProfilePersonalInfo";
import ProfileStack from "./ViewProfile/SideBar/ProfileStack";
import ProfileSocial from "./ViewProfile/SideBar/ProfileSocial";
//Main
import NavBar from './ViewProfile/Main/NavBar';
import MainEducationSection from "./ViewProfile/Main/MainEducationSection";
import MainEmploymentSection from "./ViewProfile/Main/MainEmploymentSection";
import MainCoursesSection from "./ViewProfile/Main/MainCoursesSection";
import MainStackSection from "./ViewProfile/Main/MainStackSection";
import MainToolsSection from "./ViewProfile/Main/MainToolsSection";
import MainHobbiesSection from "./ViewProfile/Main/MainHobbiesSection";
import MainAboutSection from './ViewProfile/Main/MainAboutSection';
//Redux
import { useDispatch, useSelector } from 'react-redux';
import { profileInfo } from '../actions/profileActions'
import { getAuthenticatedUser } from '../actions/userActions'
const Home = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const loading = useSelector(state => state.view.loading);

    useEffect(() => {
      const token = localStorage.getItem('token');
      //If user has token, token is set in header by the authToken fn,
      //and authentication is triggered
      if(token){
          const authenticate = () => dispatch(getAuthenticatedUser());
          authenticate();
      }
      
    },[dispatch,]);
    
    useLayoutEffect(() => {
          const loadUser = () => dispatch(profileInfo("61884778ba53dbaa421ed744"));
          loadUser();
          return;
      },[dispatch]);
    //Resolve the container issue in the future
    return (
      <div>
      { loading ? (<div className="loader"></div> ) : 
        user.loading  ? <div className="loader"></div> :
      ( <Fragment>
          <Header Home={false}/>
            <div className="container-lg pt-5">
              <Row className="mt-md-3">
                <Col md={4} lg={ 3 } className="bg-primary">
                      <Row className="flex-column">
                        <ProfilePersonalInfo/>
                        <ProfileStack/>
                        <ProfileSocial/>
                      </Row>
                  </Col>
                  <Col md={8} lg={ 9 } className="bg-secondary p-3 pt-2">
                    <NavBar myProfile={true}/>
                    <MainAboutSection/>
                    <MainEducationSection/>
                    <MainEmploymentSection/>
                    <MainCoursesSection/>
                    <MainStackSection/>
                    <MainToolsSection/>
                    <MainHobbiesSection/>
                  </Col>
              </Row>
            </div>
          <Footer/>
        </Fragment>
      ) }   
    </div>);
}
 
export default Home;
