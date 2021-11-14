import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { updatePersonal, updatePicture } from '../../../actions/profileActions';

const PersonalSection = () => {

    const {name, lastname, title, picture } = useSelector (state => state.view.profile);
    const dispatch = useDispatch();
    
    const [ personalInfo, setPersonalInfo ] = useState({
        "name": "" ,
        "lastname": "",
        "title": ""
    });

    const [ filePicture , setPicture ] = useState(null);
    const pictureUpload = e => {
        setPicture(e.target.files[0]);
    }
    useEffect(()=>{
        if(filePicture){
            dispatch(updatePicture(filePicture));
            setPicture(null)
        }
    },[filePicture, dispatch])

    useEffect(() => {
        setPersonalInfo({
            "name": name ,
            "lastname": lastname,
            "title": title
        });  
    }, [name,lastname,title]);

    const onChangeHandler = (e) => {
        setPersonalInfo({
            ...personalInfo,
            [e.target.name]: e.target.value
        });
    }
    
    const onSubmitHandler = e => {
        e.preventDefault();
        dispatch(updatePersonal(personalInfo));
        setPersonalInfo({
            "name": name ,
            "lastname": lastname,
            "title": title
        });
    }

    return ( 
        <Container className="bg-primary mt-5">
                <h2 className="text-white"> Personal information</h2>
                <Row 
                    className="pb-3"
                >
                    <Col 
                        md={3} 
                        className="text-center col-md-3 d-md-flex align-items-center pb-md-4"
                    >
                        {/*TODO add camera icon over the image when hover */}
                        <div 
                            className="p-lg-3 p-xl-4 picture-edit"
                        >
                        <label 
                            htmlFor="file-input"
                        >
                            <img 
                                alt="profile" 
                                className="profile-pic picture" 
                                src={picture}
                            >
                            </img>
                        </label>
                        <input
                            onChange={ pictureUpload } 
                            id="file-input" 
                            type="file"
                            name="picture" 
                        />    
                        </div>
                    </Col>
                    <Col md={9} >
                    <Form 
                        className="mt-md-4 mt-xl-5 ps-md-5"
                        onSubmit={ onSubmitHandler }
                    >
                        <Form.Group 
                            as={Row} 
                            className="mb-md-4 mb-3" 
                            controlId="formPlaintextName"
                        >
                            <Form.Label 
                                column 
                                sm="1" 
                                className="text-white ps-md-0"
                            >
                            Name
                            </Form.Label>
                            <Col 
                                className="ps-md-5" 
                                sm="8"
                            >
                            <Form.Control 
                                value={personalInfo.name || ""} 
                                onChange={e => onChangeHandler(e)} 
                                name="name" 
                                type="text" 
                                placeholder="Name" 
                            />
                            </Col>
                        </Form.Group>
                        <Form.Group 
                            as={Row} 
                            className="mb-md-4 mb-3" 
                            controlId="formPlaintextLastname"
                        >
                            <Form.Label 
                                column 
                                sm="1" 
                                className="text-white ps-md-0"
                            >
                            Lastname
                            </Form.Label>
                            <Col 
                                className="ps-md-5" 
                                sm="8"
                            >
                            <Form.Control 
                                value={personalInfo.lastname || ""} 
                                onChange={e => onChangeHandler(e)} 
                                name="lastname" 
                                type="text" 
                                placeholder="Lastname" 
                            />
                            </Col>
                        </Form.Group>
                        <Form.Group 
                            as={Row} 
                            className="mb-3" 
                            controlId="formPlaintextProfession"
                        >
                            <Form.Label 
                                column 
                                sm="1" 
                                className="text-white ps-md-0"
                            >
                            Profession
                            </Form.Label>
                            <Col className="ps-md-5" sm="8">
                            <Form.Control 
                                name="title" 
                                value={personalInfo.title || ""} 
                                onChange={e => onChangeHandler(e)} 
                                type="text" 
                                placeholder="Profession" 
                            />
                            </Col>
                        </Form.Group>
                        <Row className="py-2">
                            <Col 
                                sm="9" 
                                className="d-flex justify-content-md-end"
                            >
                                <Button
                                    type="submit" 
                                    variant="outline-primary" 
                                    className="px-5" 
                                >Save
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                    </Col>
                </Row>
            </Container>
     );
}
 
export default PersonalSection;