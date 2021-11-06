import React, { useEffect } from 'react';
import { Col, Row } from "react-bootstrap";
import ProfileSocialButtons from './ProfileSocialButtons';
//Redux
import { useSelector, useDispatch } from "react-redux";
import { userSocialInfo } from "./../actions/userActions";


const ProfileSocial = () => {

    const dispatch = useDispatch();
    useEffect( () => {
        const loadSocial = () => dispatch(userSocialInfo());
        loadSocial();
    // eslint-disable-next-line react-hooks/exhaustive-deps    
    },[])
    const social = useSelector( state => state.user.social);
    return (
            <Col className="mb-md-5">
                <Col className="mb-2">
                    <h5 className="text-light ">Social Networks</h5>
                </Col>
                    <Col>
                    <Row className="flex-md-column">
                        <ProfileSocialButtons
                        key={social.id}
                        linkedin_url={social.linkedin_url}
                        github_url={social.github_url}
                        twitter_url={social.twitter_url}
                        />
                    </Row>
                </Col>
            </Col>
     );
}
 
export default ProfileSocial;