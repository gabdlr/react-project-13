import React from 'react';
import { Card, Col } from 'react-bootstrap';
//Redux
import { useSelector } from "react-redux";

const MainHobbiesSection = () => { 
    const hobbie = useSelector(state => state.view.profile.hobbies);
    if(hobbie){
        return ( 
            <Card id="hobbies" className="bg-card mt-5">
                <Card.Header>
                    <h2 className="my-0 text-white">Hobbies and interests</h2>
                </Card.Header>
                <Card.Body>
                    <Col>
                        <p className="p-3 ps-5 text-white main-desc">{hobbie}</p>
                    </Col>
                </Card.Body>
            </Card> 
        );
    } else {
        return null;
    }
}
 
export default MainHobbiesSection;