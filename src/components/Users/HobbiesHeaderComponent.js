import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
const HobbiesHeaderComponent = () => {

    return ( 
        <Card.Header>
            <Row>
                <Col className="d-flex justify-content-between">
                <h2 className="mb-0 text-white align-self-center">Hobbies & interests</h2>
                </Col>
            </Row>
        </Card.Header>
     );
}
 
export default HobbiesHeaderComponent;