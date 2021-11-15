import React from 'react';
import { Col } from "react-bootstrap";
import { useSelector } from "react-redux";

const ProfilePersonalInfo = () => {

    const { name, lastname, title, email, picture } = useSelector(state => state.view.profile);
    return (
        <Col>
            <Col className="d-flex my-4 justify-content-center pic-container">              
                    <img src={picture} className="profile-pic profile-view" alt="" />
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