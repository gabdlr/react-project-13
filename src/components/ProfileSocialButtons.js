import React,{Fragment} from 'react';
import { Col, Button } from "react-bootstrap";
import 'bootstrap-icons/font/bootstrap-icons.css';
const ProfileSocialButtons = (props) => {
    const handleClick = (url) => {
        window.open(url,'_blank');
    }

    const { linkedin_url, github_url, twitter_url } = props;
    return (
        <Fragment>
            <Col className="my-2 ps-md-4 text-center text-md-start">
                <Button className="social" variant="transparent" onClick={() => {handleClick(linkedin_url)}}>
                    <i className="bi bi-linkedin" style={{ fontSize: 30, color: 'white' }}></i>
                </Button>
            </Col>
            <Col className="my-2 ps-md-4 text-center text-md-start">
                <Button className="social" variant="transparent" onClick={() => {handleClick(github_url)}}>
                    <i className="bi bi-github" style={{ fontSize: 30, color: 'white' }}></i>
                </Button>
            </Col>
            <Col className="my-2 ps-md-4 text-center text-md-start">
                <Button className="social" variant="transparent" onClick={() => {handleClick(twitter_url)}}>
                    <i className="bi bi-twitter" style={{ fontSize: 30, color: 'white' }}></i>
                </Button>
            </Col>
        </Fragment> 
     );
}
 
export default ProfileSocialButtons;