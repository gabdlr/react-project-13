import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { updateAbout } from '../../../actions/profileActions';

const AboutSection = () => {

    const about  = useSelector (state => state.view.profile.about);
    const dispatch = useDispatch();
    const [disabledButton, setDisabledButton] = useState(true);
    const [ aboutInfo, setAboutInfo ] = useState("");
    useEffect(() => {
        if (about){
            setAboutInfo(about);
        }
     }, [about]);

    const onChangeHandler = (e) => {
        setAboutInfo(
            [e.target.name] = e.target.value
        );
        setDisabledButton(false);
    }

    const onSubmitHandler = e => {
        e.preventDefault();
        dispatch(updateAbout({"about":aboutInfo}));
    }

    return ( 
    <Container className="bg-primary mt-3 pt-3">
        <h2 className="text-white"> About</h2>
        <Row className="pb-3 mt-0 justify-content-start">
            <Col 
                md={10} 
                className="ps-md-5"
            >
            <Form 
                className="mt-2 ps-md-5"
                onSubmit= {onSubmitHandler }
            >
            <Form.Group 
                className="mb-3" 
                controlId="Form.ControlTextarea1"
            >
                <Form.Label className="text-white">Short description about you</Form.Label>
                <Form.Control
                    onChange={(e) => onChangeHandler(e)}
                    value={aboutInfo||""}
                    name="about" 
                    as="textarea" 
                    rows={2} 
                />
            </Form.Group>
                <Row className="py-2">
                    <Col className="d-flex justify-content-md-end">
                        <Button
                            disabled={disabledButton}
                            type="submit" 
                            variant="outline-primary" 
                            className="px-5" 
                        >
                        Save
                        </Button>
                    </Col>
                </Row>
            </Form>
            </Col>
        </Row>
    </Container> );
}
 
export default AboutSection;