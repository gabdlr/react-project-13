import React, { Fragment, useState, useEffect } from 'react';
import { Row, Col, Button, Modal, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { updateCourse, deleteCourse } from '../../../../actions/profileActions';

const CoursesEntryComponent = (props) => {
    const {title, url, institution, date, _id} = props;
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch();

    const [ courseInfo, setCourseInfo ] = useState({
        "_id": "",
        "title":"",
        "url": "",
        "institution": "",
        "date": ""
    });

    useEffect(() => {
        setCourseInfo({
            "_id": _id,
            "title": title,
            "url": url,
            "institution": institution,
            "date": date
        });
    }, [title, url, institution, date, _id]);

    const onChangeHandler = e => {
        setCourseInfo({
            ...courseInfo,
            [e.target.name]:e.target.value
        });
    }

    const onSubmitHandler = e => {
        e.preventDefault()
        dispatch(updateCourse(courseInfo));
        handleClose();
        setCourseInfo({
            "_id": _id,
            "title": title,
            "url": url,
            "institution": institution,
            "date": date
        });
    }

    const deleteRegistry = () => {
        dispatch(deleteCourse(courseInfo._id));
    }

    return (
        <Fragment> 
            <Col className="d-flex justify-content-between pt-2">
            <div className="w-75 align-self-center">   
                <h3 className="ps-3 fw-bolder align-self-center mb-0">{title}</h3>
                <h3 className="ps-3 fw-bolder align-self-center mb-0">{institution}</h3>
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
                <Modal.Title className="text-white"> Certificate registry</Modal.Title>
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
                                    onChange={e => onChangeHandler(e)}
                                    value={courseInfo.institution||""}    
                                    name="institution" 
                                    className="red" 
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
                                    onChange={e => onChangeHandler(e)}
                                    value={courseInfo.title||""}     
                                    name="title" 
                                    className="red" 
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
                                    onChange={e => onChangeHandler(e)}
                                    value={courseInfo.url||""}     
                                    name="url" 
                                    className="red" 
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
                                    onChange={e => onChangeHandler(e)}
                                    value={courseInfo.date||""}     
                                    name="date" 
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
        </Fragment>  );
}
 
export default CoursesEntryComponent;