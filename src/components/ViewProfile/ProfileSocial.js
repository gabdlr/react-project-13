import React from 'react';
import { Col, Row } from "react-bootstrap";
import ProfileSocialButtons from './ProfileSocialButtons';
//Redux
import { useSelector } from "react-redux";

const ProfileSocial = () => {

    const social = useSelector( state => state.view.profile.social);
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