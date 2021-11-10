import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const AboutSection = () => {
    return ( 
    <Container className="bg-primary mt-3 pt-3">
        <h2 className="text-white"> About</h2>
        <Row className="pb-3 mt-0 justify-content-start">
            <Col md={10} className="ps-md-5">
            <Form className="mt-2 ps-md-5">
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label className="text-white">Short description about you</Form.Label>
                <Form.Control as="textarea" rows={2} />
            </Form.Group>
                <Row className="py-2">
                    <Col className="d-flex justify-content-md-end">
                        <Button variant="outline-primary" className="px-5" >Save</Button>
                    </Col>
                </Row>
            </Form>
            </Col>
        </Row>
    </Container> );
}
 
export default AboutSection;