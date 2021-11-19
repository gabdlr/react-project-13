import React,{useState } from 'react';
import { Modal, Form, Row, Col, Button } from 'react-bootstrap';
const ContactForm = (props) => {
    const {show, setShow } = props;
    const [disabledButton, setDisabledButton] = useState(true);
    const [ contactInfo, setContactInfo ] = useState({
        "name": "",
        "email": "",
        "message": ""
    });

    const onChangeHandler = (e) => {
        setContactInfo({
            ...contactInfo,
            [e.target.name]:e.target.value
        });
        setDisabledButton(false);
    }
    const handleClose = () => setShow(false);

    return ( 
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
                <Modal.Title className="text-white" > Contact</Modal.Title>
            </Modal.Header>
            <Modal.Body className="bg-modal-profile justify-content-center" >
                <Row className="pb-3">
                    <Col>
                        <Form 
                            className="mt-md-5 ps-md-5"
                            // onSubmit={onSubmitHandler}
                        >
                            <Form.Group 
                                as={Row} 
                                className="mb-md-4 mb-3" 
                                controlId="formPlaintextName"
                            >
                                <Form.Label 
                                    column 
                                    sm="2" 
                                    className="text-md-end text-white ps-md-0"
                                >
                                Your name
                                </Form.Label>
                                <Col sm="8">
                                <Form.Control 
                                    className="red"
                                    onChange={e => onChangeHandler(e)}
                                    value={contactInfo.name||""}  
                                    name="name" 
                                    type="text" 
                                    placeholder="Your name" 
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
                                Your email
                                </Form.Label>
                                <Col sm="8">
                                <Form.Control 
                                    className="red"
                                    onChange={e => onChangeHandler(e)}
                                    value={contactInfo.email||""}   
                                    name="email" 
                                    type="email" 
                                    placeholder="Your email" 
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
                                Message
                                </Form.Label>
                                <Col sm="8">
                                <textarea
                                    name="message"
                                    onChange={e => onChangeHandler(e)}
                                    value={contactInfo.message||""}                                        
                                    className="contact-textarea" 
                                    type="text"
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
                                    Send
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
     );
}
 
export default ContactForm;