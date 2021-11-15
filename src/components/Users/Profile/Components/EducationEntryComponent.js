import React, { Fragment, useState, useEffect } from 'react';
import { Row, Col, Button, Modal, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { updateEducation, deleteEducation } from '../../../../actions/profileActions';

const EducationEntryComponent = (props) => {
    const {degree, institution, period_end, period_start, state, _id} = props;
    const [show, setShow] = useState(false);
    const [disabledButton, setDisabledButton] = useState(true);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch();

    const [ educationInfo, setEducationInfo ] = useState({
        "_id": "",
        "institution":"",
        "period_end": "",
        "period_start": "",
        "state": ""
    });
    
    useEffect(() => {
        setEducationInfo({
            "_id": _id,
            "degree": degree,
            "institution": institution,
            "period_end": period_end,
            "period_start": period_start,
            "state": state
        });
    }, [degree, institution, period_end, period_start, state, _id]);
    const onChangeHandler = e => {
        setEducationInfo({
            ...educationInfo,
            [e.target.name]:e.target.value
        });
        setDisabledButton(false);
    }
    
    const onSubmitHandler = e => {
        e.preventDefault()
        dispatch(updateEducation(educationInfo));
        handleClose();
        setEducationInfo({
            "_id": _id,
            "degree": degree,
            "institution": institution,
            "period_end": period_end,
            "period_start": period_start,
            "state": state
        });
    }
    const deleteRegistry = () => {
        dispatch(deleteEducation(educationInfo._id))
    }
    
    return (
        <Fragment> 
            <Col className="d-flex justify-content-between pt-2">
            <div className="w-75 align-self-center">    
                <h3 className="ps-3 fw-bolder align-self-center mb-0">{institution}</h3>
                <h3 className="ps-3 fw-bolder align-self-center mb-0">{degree}</h3>
            </div>
            <div className="my-auto text-end">
                <Button 
                    onClick={handleShow} 
                    className="me-md-2" 
                    variant="transparent"
                >
                    <i className="bi bi-pencil" style={{ fontSize: 25, color: 'white' }}></i>
                </Button>
                <Button
                    onClick={ deleteRegistry } 
                    variant="transparent"
                >
                    <i className="bi bi-dash-circle" style={{ fontSize: 25, color: 'white' }}></i>
                </Button>
            </div>
            </Col>
            <hr className="mb-0"/>
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
                <Modal.Title className="text-white" > Education registry</Modal.Title>
                </Modal.Header>
                <Modal.Body className="bg-modal-profile" >
                    <Row className="pb-3">
                        <Col>
                            <Form 
                                className="mt-md-5 ps-md-5"
                                onSubmit={ e => onSubmitHandler(e)}
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
                                        name="degree" 
                                        type="text" 
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
                                        name="period_start" 
                                        className="red" 
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
                                        Save
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
        </Fragment>
     );
}
 
export default EducationEntryComponent;