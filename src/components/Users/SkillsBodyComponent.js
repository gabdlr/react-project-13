import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
const SkillBodyComponent = () => {
    return (
        <Card.Body>
            <Col className="p-3 ps-3 pb-0 text-white main-desc">
            <p className="fw-bolder">Seems like you haven't add any skill yet, try adding a new one!</p>
            <hr className="mb-0"></hr>
            </Col>
            <Col className="p-3 ps-3 text-white main-desc">
                <Col className="d-flex justify-content-between">
                <h3 className="ps-3 fw-bolder align-self-center mb-0">Title</h3>
                <div>
                <Button className="me-2" variant="transparent">
                        <i className="bi bi-pencil" style={{ fontSize: 25, color: 'white' }}></i>
                </Button>
                <Button variant="transparent">
                        <i className="bi bi-dash-circle" style={{ fontSize: 25, color: 'white' }}></i>
                </Button>
                </div>
                </Col>
                <hr className="mb-0"></hr>
            </Col>
        </Card.Body>   
     );
}
 
export default SkillBodyComponent;