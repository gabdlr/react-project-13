import React, {Fragment, useState } from 'react'
import { Row, Col, Form, Card, Button, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { createEducation } from '../../../../actions/profileActions';

const EducationHeaderComponent = () => {
    //Bootstrap's modal
    const [show, setShow] = useState(false);
    const [disabledButton, setDisabledButton] = useState(true);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch();

    const [ educationInfo, setEducationInfo ] = useState({
        "institution":"",
        "period_end": "",
        "period_start": "",
        "state": ""
    });

    const onChangeHandler = e => {
        setEducationInfo({
            ...educationInfo,
            [e.target.name]:e.target.value
        });
        setDisabledButton(false);
    }
    const onSubmitHandler = e => {
        e.preventDefault();
        dispatch(createEducation(educationInfo));
        setEducationInfo(
        {
            "institution":"",
            "period_end": "",
            "period_start": "",
            "state": ""
        }
        );
        handleClose();
    }

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
        <Modal 
            centered 
            size="lg" 
            className="box" 
            show={show} 
            onHide={handleClose}
        >
            <Modal.Header 
                className="bg-secondary" 
                closeButton
            >
                <Modal.Title className="text-white" > New education registry</Modal.Title>
            </Modal.Header>
            <Modal.Body className="bg-modal-profile" >
                <Row className="pb-3">
                    <Col>
                        <Form
                            
                            className="mt-md-5 ps-md-5"
                            onSubmit={onSubmitHandler}
                        >
                            <Form.Group 
                                as={Row} 
                                className="mb-md-4 mb-3"
                                controlId="formPlaintextInstitution"
                            >
                                <Form.Label 
                                    column sm="2" 
                                    className="text-md-end text-white ps-md-0"
                                >
                                Institution
                                </Form.Label>
                                <Col sm="8">
                                <Form.Control 
                                    onChange={e => onChangeHandler(e)}
                                    value={educationInfo.institution||""} 
                                    className="red"
                                    name="institution" 
                                    type="text" 
                                    placeholder="Institution" 
                                />
                                </Col>
                            </Form.Group>
                            <Form.Group 
                                as={Row} 
                                className="mb-md-4 mb-3" 
                                controlId="formPlaintextDegree"
                            >
                                <Form.Label 
                                    column sm="2" 
                                    className="text-md-end text-white ps-md-0"
                                >
                                Degree
                                </Form.Label>
                                <Col sm="8">
                                <Form.Control
                                    onChange={e => onChangeHandler(e)}  
                                    value={educationInfo.degree||""}   
                                    className="red" 
                                    name="degree" type="text" 
                                    placeholder="Degree" 
                                />
                                </Col>
                            </Form.Group>
                            <Form.Group 
                                as={Row} 
                                className="mb-3" 
                                controlId="formPlaintextStatus"
                            >
                                <Form.Label 
                                    column sm="2" 
                                    className="text-md-end text-white ps-md-0"
                                >
                                Status
                                </Form.Label>
                                <Col sm="8">
                                <Form.Control
                                    onChange={e => onChangeHandler(e)}
                                    value={educationInfo.state||""}    
                                    className="red" 
                                    name="state" 
                                    type="text" 
                                    placeholder="Status" 
                                />
                                </Col>
                            </Form.Group>
                            <Form.Group 
                                as={Row} 
                                className="mb-3" 
                                controlId="formPlaintextStartdate"
                            >
                                <Form.Label 
                                    column sm="2" 
                                    className="text-md-end text-white ps-md-0"
                                >
                                Start date
                                </Form.Label>
                                <Col sm="8">
                                <Form.Control
                                    onChange={e => onChangeHandler(e)}
                                    value={educationInfo.period_start||""}    
                                    className="red" 
                                    name="period_start" 
                                    type="date"
                                />
                                </Col>
                            </Form.Group>
                            <Form.Group 
                                as={Row} 
                                className="mb-3" 
                                controlId="formPlaintextFisnishdate"
                            >
                                <Form.Label 
                                    column sm="2" 
                                    className="text-md-end text-white ps-md-0"
                                >
                                Finish date
                                </Form.Label>
                                <Col sm="8">
                                <Form.Control
                                    onChange={e => onChangeHandler(e)}
                                    value={educationInfo.period_end||""}   
                                    name="period_end" 
                                    className="red" 
                                    type="date"
                                />
                                </Col>
                            </Form.Group>
                            <Row className="py-2">
                                <Col 
                                    sm="10" 
                                    className="d-flex justify-content-end"
                                >
                                    <Button
                                    disabled={disabledButton}
                                    type="submit" 
                                    variant="outline-danger" 
                                    className="px-5" 
                                    >
                                    Add
                                    </Button>
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
