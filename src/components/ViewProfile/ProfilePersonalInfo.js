import React from 'react';
import profilepic from "./../../assets/img/profile.jpg";
import { Col } from "react-bootstrap";
import { useSelector } from "react-redux";

const ProfilePersonalInfo = () => {

    const { name, lastname, title, email } = useSelector(state => state.view.profile);
    return (
        <Col>
            <Col className="d-flex my-4">              
                    <img src={profilepic} className="profile-pic" alt="" />
            </Col>
            <Col className="description">
                <h5 className="text-light">Personal information</h5>
                <p className="text-light mb-2">{`${name} ${lastname}`} <span className="fw-bold"></span></p>
                <p className="text-light mb-2">{title}</p>
                <p className="text-light mb-2">{email}</p>
            </Col>
            <hr className="divisor" />
        </Col>
     );
}
 
export default ProfilePersonalInfo;