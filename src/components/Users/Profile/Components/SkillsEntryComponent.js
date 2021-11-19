import React, { Fragment, useState, useEffect } from 'react';
import { Row, Col, Button, Modal, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { updateSkill, deleteSkill } from '../../../../actions/profileActions';

const SkillsEntryComponent = (props) => {
    const { _id, technology, expertise } = props;
    const [show, setShow] = useState(false);
    const [disabledButton, setDisabledButton] = useState(true);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch();

    const [ skillInfo, setSkillInfo ] = useState({
        "_id":"",
        "technology":"",
        "expertise":"",
    });

    useEffect(() => {
        setSkillInfo({
            "_id":_id,
            "technology":technology,
            "expertise":expertise
        });
    }, [_id, technology, expertise]);

    const onChangeHandler = e => {
        setSkillInfo({
            ...skillInfo,
            [e.target.name]:e.target.value
        });
        setDisabledButton(false);
    }

    const onSubmitHandler = e => {
        e.preventDefault()
        dispatch(updateSkill(skillInfo));
        handleClose();
        setSkillInfo({
            "_id":_id,
            "technology":technology,
            "expertise":expertise
        });
    }

    const deleteRegistry = () => {
        dispatch(deleteSkill(skillInfo._id));
    }

    return (
        <Fragment> 
            <Col className="d-flex justify-content-between pt-2">
            <div className="w-75 align-self-center">   
                <h3 className="ps-3 fw-bolder align-self-center mb-0">{technology}</h3>
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
                <Modal.Title className="text-white" > Edit skill registry</Modal.Title>
                </Modal.Header>
                <Modal.Body className="bg-modal-profile" >
                    <Row className="pb-3">
                        <Col>
                            <Form
                            onSubmit={ onSubmitHandler } 
                            className="mt-md-5 ps-md-5"
                            >
                                <Form.Group 
                                    as={Row} 
                                    className="mb-md-4 mb-3" 
                                    controlId="formPlaintextSkill"
                                >
                                    <Form.Label 
                                        column 
                                        sm="2" 
                                        className="text-md-end text-white ps-md-0"
                                    >
                                    Skill
                                    </Form.Label>
                                    <Col sm="8">
                                    <Form.Control
                                        onChange={e => onChangeHandler(e)}
                                        value={skillInfo.technology||""}   
                                        className="red" 
                                        name="technology" 
                                        type="text" 
                                        placeholder="Skill" 
                                    />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} >
                                    <Form.Label 
                                        column 
                                        sm="2" 
                                        className="text-md-end text-white ps-md-0"
                                    >
                                    Proficency
                                    </Form.Label>
                                    <Col sm="2">
                                        <Form.Select 
                                            className="red"
                                            onChange={e => onChangeHandler(e)}
                                            value={skillInfo.expertise}  
                                            name="expertise" 
                                            aria-label="Expertise"
                                        >
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                        </Form.Select>
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
 
export default SkillsEntryComponent;