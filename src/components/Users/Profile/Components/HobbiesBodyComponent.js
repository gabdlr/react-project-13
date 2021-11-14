import React, { useEffect, useState } from 'react';
import { Card, Form, Row, Col, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { updateHobbies } from '../../../../actions/profileActions';
const HobbiesBodyComponent = () => {

    const hobbies  = useSelector (state => state.view.profile.hobbies);
    const [ hobbiesInfo, setHobbiesInfo ] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        //This could be avoided if we start this field as empty string when creating user
        if(hobbies){
        setHobbiesInfo(
            hobbies
        )}
        },[hobbies]
    );
    
    const onChangeHandler = (e) => {
        setHobbiesInfo(
            [e.target.name] = e.target.value
        );
    }
    const onSubmitHandler = e => {
        e.preventDefault();
        dispatch(updateHobbies({"hobbies":hobbiesInfo}));
    }

    return ( 
        <Card.Body>
            <Form
            onSubmit={onSubmitHandler}
            >
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label className="text-white">Share your hobbies and interests</Form.Label>
                <Form.Control
                onChange={(e) => onChangeHandler(e)}
                value={hobbiesInfo||""} 
                as="textarea" 
                rows={2} 
                className="red" 
                />
            </Form.Group>
                <Row className="py-2">
                    <Col className="d-flex justify-content-md-end">
                        <Button
                            type="submit" 
                            variant="outline-danger" 
                            className="px-5 btn-fix" 
                        >
                        Save
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Card.Body>
     );
}
 
export default HobbiesBodyComponent;