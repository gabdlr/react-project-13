import React, { Fragment, useState, useEffect } from 'react';
import { Row, Col, Button, Modal, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { updateJob, deleteJob } from '../../../../actions/profileActions';
const EmploymentEntryComponent = (props) => {

    const {role, company, period_end, period_start, _id} = props;
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch();
    const [ jobInfo, setJobInfo ] = useState({
        "_id":"",
        "role":"",
        "company":"",
        "period_start":"",
        "period_end":""
    });

    useEffect(() => {
        setJobInfo({
            "_id":_id,
            "role":role,
            "company":company,
            "period_start":period_start,
            "period_end":period_end
        });
    }, [role, company, period_end, period_start, _id]);

    const onChangeHandler = e => {
        setJobInfo({
            ...jobInfo,
            [e.target.name]:e.target.value
        });
    }

    const onSubmitHandler = e => {
        e.preventDefault()
        dispatch(updateJob(jobInfo));
        handleClose();
        setJobInfo({
            "_id":_id,
            "role":role,
            "company":company,
            "period_start":period_start,
            "period_end":period_end
        });
    }
    const deleteRegistry = () => {
        dispatch(deleteJob(jobInfo._id))
    }
    return (
        <Fragment> 
            <Col className="d-flex justify-content-between pt-2">
            <div className="w-75 align-self-center">   
                <h3 className="ps-3 fw-bolder align-self-center mb-0">{company}</h3>
                <h3 className="ps-3 fw-bolder align-self-center mb-0">{role}</h3>
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
            <Modal.Title className="text-white" > Employ registry</Modal.Title>
            </Modal.Header>
            <Modal.Body className="bg-modal-profile" >
                <Row className="pb-3">
                    <Col>
                        <Form 
                        className="mt-md-5 ps-md-5"
                        onSubmit={ onSubmitHandler }
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
                                    name="role"
                                    value={jobInfo.role||""} 
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
                                    name="company"
                                    value={jobInfo.company||""} 
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
                                    className="red" 
                                    onChange={e => onChangeHandler(e)} 
                                    name="period_start"
                                    value={jobInfo.period_start||""} 
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
                                    className="red"
                                    onChange={e => onChangeHandler(e)} 
                                    name="period_end"
                                    value={jobInfo.period_end||""} 
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
 
export default EmploymentEntryComponent;