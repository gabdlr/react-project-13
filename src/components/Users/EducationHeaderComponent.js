import React, {Fragment, useState } from 'react'
import { Row, Col, Form, Card, Button, Modal } from 'react-bootstrap';

const EducationHeaderComponent = () => {
    //Bootstrap's modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return ( 
    <Fragment>
        <Card.Header>
            <Row>
                <Col className="d-flex justify-content-between">
                <h2 className="mb-0 text-white align-self-center">Education</h2>
                <Button variant="transparent" onClick={ handleShow }>
                        <i className="bi bi-plus-circle" style={{ fontSize: 30, color: 'white' }}></i>
                </Button>
                </Col>
            </Row>
        </Card.Header>
        <Modal centered size="lg" className="box" show={show} onHide={handleClose}>
            <Modal.Header className="bg-secondary" closeButton>
                <Modal.Title className="text-white" > New education registry</Modal.Title>
            </Modal.Header>
            <Modal.Body className="bg-modal-profile" >
                <Row className="pb-3">
                    <Col>
                        <Form className="mt-md-5 ps-md-5">
                            <Form.Group as={Row} className="mb-md-4 mb-3" controlId="formPlaintextInstitution">
                                <Form.Label column sm="2" className="text-end text-white ps-md-0">
                                Institution
                                </Form.Label>
                                <Col sm="8">
                                <Form.Control className="red" name="institution" type="text" placeholder="Institution" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-md-4 mb-3" controlId="formPlaintextDegree">
                                <Form.Label column sm="2" className="text-end text-white ps-md-0">
                                Degree
                                </Form.Label>
                                <Col sm="8">
                                <Form.Control className="red" name="degree" type="text" placeholder="Degree" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextStatus">
                                <Form.Label column sm="2" className="text-end text-white ps-md-0">
                                Status
                                </Form.Label>
                                <Col sm="8">
                                <Form.Control name="state" className="red" type="text" placeholder="Status" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextStartdate">
                                <Form.Label column sm="2" className="text-end text-white ps-md-0">
                                Start date
                                </Form.Label>
                                <Col sm="8">
                                <Form.Control name="period_start" className="red" type="date"/>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextFisnishdate">
                                <Form.Label column sm="2" className="text-end text-white ps-md-0">
                                Finish date
                                </Form.Label>
                                <Col sm="8">
                                <Form.Control name="period_end" className="red" type="date"/>
                                </Col>
                            </Form.Group>
                            <Row className="py-2">
                                <Col sm="10" className="d-flex justify-content-end">
                                    <Button variant="outline-danger" className="px-5" >Add</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer className="p-4 bg-secondary">
            </Modal.Footer>
        </Modal>
    </Fragment> );
}
export default EducationHeaderComponent;
