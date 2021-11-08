import React from 'react';
import { Row, Col } from 'react-bootstrap';
//Redux
import { useSelector } from 'react-redux';

const MainAboutSection = () => {
    const aboutText = useSelector( state => state.view.profile.about)
    if(aboutText) {
        return ( 
            <Row className="mx-auto about">
                <Col className="p-3">
                <h3 className="my-0 text-light">About me:</h3>
                <p className="text-light mt-2">{aboutText}</p>
                </Col>
            </Row>
        );
    } else {
        return null;
    }
}
 
export default MainAboutSection;