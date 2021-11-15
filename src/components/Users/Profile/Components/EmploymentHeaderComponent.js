import React, {Fragment, useState } from 'react'
import { Row, Col, Form, Card, Button, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { createJob } from '../../../../actions/profileActions';

const EmploymentHeaderComponent = () => {
    //Bootstrap's modal
    const [show, setShow] = useState(false);
    const [disabledButton, setDisabledButton] = useState(true);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch();

    const [ jobInfo, setJobInfo ] = useState({
        "role":"",
        "company": "",
        "period_start": "",
        "period_end": ""
    });

    const onChangeHandler = e => {
        setJobInfo({
            ...jobInfo,
            [e.target.name]:e.target.value
        });
        setDisabledButton(false);
    }

    const onSubmitHandler = e => {
        e.preventDefault();
        dispatch(createJob(jobInfo));
        setJobInfo(
        {
            "role":"",
            "company": "",
            "period_start": "",
            "period_end": ""
        }
        );
        handleClose();
    }

    return ( 
    <Fragment>
        <Card.Header>
            <Row>
                <Col className="d-flex justify-content-between">
                <h2 className="mb-0 text-white align-self-center"> Employment History</h2>
                <Button 
                    variant="transparent" 
                    onClick={ handleShow }
                >
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
                <Modal.Title className="text-white" > New employ registry</Modal.Title>
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
                                controlId="formPlaintextPosition"
                            >
                                <Form.Label 
                                    column 
                                    sm="2" 
                                    className="text-md-end text-white ps-md-0"
                                >
                                Position
                                </Form.Label>
                                <Col sm="8">
                                <Form.Control 
                                    className="red"
                                    onChange={e => onChangeHandler(e)}
                                    value={jobInfo.role||""}  
                                    name="role" 
                                    type="text" 
                                    placeholder="Position" 
                                />
                                </Col>
                            </Form.Group>
                            <Form.Group 
                                as={Row} 
                                className="mb-md-4 mb-3" 
                                controlId="formPlaintextCompany"
                            >
                                <Form.Label 
                                    column 
                                    sm="2" 
                                    className="text-md-end text-white ps-md-0"
                                >
                                Company
                                </Form.Label>
                                <Col sm="8">
                                <Form.Control 
                                    className="red"
                                    onChange={e => onChangeHandler(e)}
                                    value={jobInfo.company||""}   
                                    name="company" 
                                    type="text" 
                                    placeholder="Company" 
                                />
                                </Col>
                            </Form.Group>
                            <Form.Group 
                                as={Row} 
                                className="mb-3" 
                                controlId="formPlaintextTwitter"
                            >
                                <Form.Label 
                                    column sm="2" 
                                    className="text-md-end text-white ps-md-0"
                                >
                                Start date
                                </Form.Label>
                                <Col sm="8">
                                <Form.Control 
                                    name="period_start"
                                    onChange={e => onChangeHandler(e)}
                                    value={jobInfo.period_start||""}                                        
                                    className="red" 
                                    type="date"
                                />
                                </Col>
                            </Form.Group>
                            <Form.Group 
                                as={Row} 
                                className="mb-3" 
                                controlId="formPlaintextTwitter"
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
                                    value={jobInfo.period_end||""}                                    
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
export default EmploymentHeaderComponent;
