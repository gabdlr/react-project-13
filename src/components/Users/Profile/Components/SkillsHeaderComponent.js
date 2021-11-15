import React, {Fragment, useState } from 'react'
import { Row, Col, Form, Card, Button, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { createSkill } from '../../../../actions/profileActions';
const SkillsHeaderComponents = () => {

     //Bootstrap's modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch();
    
    const [ skillInfo, setSkillInfo ] = useState({
        "technology":"",
        "expertise": "1"
    });

    const onChangeHandler = e => {
        setSkillInfo({
            ...skillInfo,
            [e.target.name]:e.target.value
        });
    }
    const onSubmitHandler = e => {
        e.preventDefault();
        dispatch(createSkill(skillInfo));
        setSkillInfo(
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
                <h2 className="mb-0 text-white align-self-center">Skills</h2>
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
                <Modal.Title className="text-white" > New skill registry</Modal.Title>
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
                                    className="red"
                                    onChange={e => onChangeHandler(e)}
                                    value={skillInfo.technology||""}  
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
                                        value={skillInfo.expertise||""}   
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
 
export default SkillsHeaderComponents;