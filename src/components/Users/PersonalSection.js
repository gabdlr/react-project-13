import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const PersonalSection = () => {
    return ( 
        <Container className="bg-primary mt-5">
                <h2 className="text-white"> Personal information</h2>
                <Row className="pb-3">
                    <Col md={3} className="text-center col-md-3 d-md-flex align-items-center pb-md-4">
                        {/*TODO add camera icon over the image when hover */}
                        <div className="p-lg-3 p-xl-4 picture-edit">
                        <label htmlFor="file-input">
                            <img alt="profile" className="profile-pic picture" src="/assets/img/default.png">
                            </img>
                        </label>
                        <input id="file-input" type="file" />    
                        </div>
                    </Col>
                    <Col md={9} >
                    <Form className="mt-md-4 mt-xl-5 ps-md-5">
                        <Form.Group as={Row} className="mb-md-4 mb-3" controlId="formPlaintextName">
                            <Form.Label column sm="1" className="text-white ps-md-0">
                            Name
                            </Form.Label>
                            <Col className="ps-md-5" sm="8">
                            <Form.Control name="name" type="text" placeholder="Name" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-md-4 mb-3" controlId="formPlaintextLastname">
                            <Form.Label column sm="1" className="text-white ps-md-0">
                            Lastname
                            </Form.Label>
                            <Col className="ps-md-5" sm="8">
                            <Form.Control name="lastname" type="text" placeholder="Lastname" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextProfession">
                            <Form.Label name="title" column sm="1" className="text-white ps-md-0">
                            Profession
                            </Form.Label>
                            <Col className="ps-md-5" sm="8">
                            <Form.Control type="text" placeholder="Profession" />
                            </Col>
                        </Form.Group>
                        <Row className="py-2">
                            <Col sm="9" className="d-flex justify-content-md-end">
                                <Button variant="outline-primary" className="px-5" >Save</Button>
                            </Col>
                        </Row>
                    </Form>
                    </Col>
                </Row>
            </Container>
     );
}
 
export default PersonalSection;