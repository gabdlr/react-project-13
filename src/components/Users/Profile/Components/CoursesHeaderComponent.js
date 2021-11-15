import React,{ Fragment, useState } from 'react';
import { Row, Col, Form, Card, Button, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { createCourse } from '../../../../actions/profileActions';

const CoursesHeaderComponent = () => {
    //Bootstrap's modal
    const [show, setShow] = useState(false);
    const [disabledButton, setDisabledButton] = useState(true);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch();

    const [ courseInfo, setCourseInfo ] = useState({
        "title":"",
        "url": "",
        "institution": "",
        "date": ""
    });

    const onChangeHandler = e => {
        setCourseInfo({
            ...courseInfo,
            [e.target.name]:e.target.value
        });
        setDisabledButton(false);
    }

    const onSubmitHandler = e => {
        e.preventDefault();
        dispatch(createCourse(courseInfo));
        setCourseInfo(
        {
            "title":"",
            "url": "",
            "institution": "",
            "date": ""
        }
        );
        handleClose();
    }        
    return ( 
    <Fragment>
        <Card.Header>
            <Row>
                <Col className="d-flex justify-content-between">
                <h2 className="mb-0 text-white align-self-center">Certifications</h2>
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
                <Modal.Title className="text-white"> New certificate</Modal.Title>
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
                                controlId="formPlaintextInstitution"
                            >
                                <Form.Label 
                                column 
                                sm="2" 
                                className="text-md-end text-white ps-md-0"
                                >
                                Institution
                                </Form.Label>
                                <Col sm="8">
                                <Form.Control 
                                    className="red"
                                    onChange={e => onChangeHandler(e)}
                                    value={courseInfo.institution||""}   
                                    name="institution" 
                                    type="text" 
                                    placeholder="Institution" 
                                />
                                </Col>
                            </Form.Group>
                            <Form.Group 
                                as={Row} 
                                className="mb-md-4 mb-3" 
                                controlId="formPlaintextTitle"
                            >
                                <Form.Label 
                                column 
                                sm="2" 
                                className="text-md-end text-white ps-md-0"
                                >
                                Title
                                </Form.Label>
                                <Col sm="8">
                                <Form.Control 
                                    className="red"
                                    onChange={e => onChangeHandler(e)}
                                    value={courseInfo.title||""}                                     
                                    name="title" 
                                    type="text" 
                                    placeholder="Certificate title" 
                                />
                                </Col>
                            </Form.Group>
                            <Form.Group 
                                as={Row} 
                                className="mb-3" 
                                controlId="formPlaintextTwitter"
                            >
                                <Form.Label 
                                    name="twitter" 
                                    column sm="2" 
                                    className="text-md-end text-white ps-md-0"
                                >
                                Url
                                </Form.Label>
                                <Col sm="8">
                                <Form.Control
                                    className="red" 
                                    onChange={e => onChangeHandler(e)}
                                    value={courseInfo.url||""}                                    
                                    name="url" 
                                    type="text" 
                                    placeholder="Certificate URL" 
                                />
                                </Col>
                            </Form.Group>
                            <Form.Group 
                                as={Row} 
                                className="mb-3" 
                                controlId="formPlaintextIssued"
                            >
                                <Form.Label 
                                    name="twitter" 
                                    column sm="2" 
                                    className="text-md-end text-white ps-md-0"
                                >
                                Issued on
                                </Form.Label>
                                <Col sm="8">
                                    <Form.Control
                                    className="red" 
                                    onChange={e => onChangeHandler(e)}
                                    value={courseInfo.date||""}    
                                    name="date" 
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
 
export default CoursesHeaderComponent;