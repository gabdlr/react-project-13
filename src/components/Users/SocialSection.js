import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const SocialSection = () => {
    return ( 
        <Container className="bg-secondary mt-3 pt-3">
                <h2 className="text-white"> Social Information</h2>
                <Row className="pb-3">
                    <Col>
                    <Form className="mt-md-5 ps-md-5">
                        <Form.Group as={Row} className="mb-md-4 mb-3" controlId="formPlaintextLinkedin">
                            <Form.Label column sm="2" className="text-md-center text-white ps-md-0">
                            LinkedIn URL
                            </Form.Label>
                            <Col sm="8">
                            <Form.Control className="red" name="linkedin" type="text" placeholder="LinkedIn URL" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-md-4 mb-3" controlId="formPlaintextGithub">
                            <Form.Label column sm="2" className="text-md-center text-white ps-md-0">
                            GitHub URL
                            </Form.Label>
                            <Col sm="8">
                            <Form.Control className="red" name="github" type="text" placeholder="GitHub URL" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextTwitter">
                            <Form.Label name="twitter" column sm="2" className="text-md-center text-white ps-md-0">
                            Twitter URL
                            </Form.Label>
                            <Col sm="8">
                            <Form.Control className="red" type="text" placeholder="Twitter URL" />
                            </Col>
                        </Form.Group>
                        <Row className="py-2">
                            <Col sm="10" className="d-flex justify-content-md-end">
                                <Button variant="outline-danger" className="px-5" >Save</Button>
                            </Col>
                        </Row>
                    </Form>
                    </Col>
                </Row>
            </Container>
     );
}
 
export default SocialSection;