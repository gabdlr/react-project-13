import React from 'react';
import { Card, Form, Row, Col, Button } from 'react-bootstrap';
const HobbiesBodyComponent = () => {
    return ( 
        <Card.Body>
            <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label className="text-white">Short description about you</Form.Label>
                <Form.Control as="textarea" rows={2} className="red" />
            </Form.Group>
                <Row className="py-2">
                    <Col className="d-flex justify-content-md-end">
                        <Button variant="outline-danger" className="px-5" >Save</Button>
                    </Col>
                </Row>
            </Form>
        </Card.Body>
     );
}
 
export default HobbiesBodyComponent;