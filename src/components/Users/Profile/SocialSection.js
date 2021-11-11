import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

const SocialSection = () => {
    const { linkedin_url, github_url, twitter_url } = useSelector (state => state.view.profile.social);
    const [ socialInfo, setSocialInfo ] = useState({
        "linkedin_url": "" ,
        "github_url": "",
        "twitter_url": ""
    });

    useEffect(() => {
        setSocialInfo({
            "linkedin_url": linkedin_url ,
            "github_url": github_url,
            "twitter_url": twitter_url
        })
    }, [linkedin_url,github_url,twitter_url]);

    const onChangeHandler = (e) => {
        setSocialInfo({
            ...socialInfo,
            [e.target.name]: e.target.value
        });
    }
    return ( 
        <Container className="bg-secondary mt-3 pt-3">
                <h2 className="text-white"> Social Information</h2>
                <Row className="pb-3">
                    <Col>
                    <Form className="mt-md-5 ps-md-5">
                        <Form.Group as={Row} className="mb-md-4 mb-3" controlId="formPlaintextLinkedin">
                            <Form.Label column sm="2" className="text-md-center text-white ps-md-0">
                            LinkedIn URL
                            </Form.Label>
                            <Col sm="8">
                            <Form.Control 
                                value={socialInfo.linkedin_url} 
                                onChange={ e => onChangeHandler(e)} 
                                className="red" 
                                name="linkedin_url" 
                                type="text" 
                                placeholder="LinkedIn URL" 
                            />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-md-4 mb-3" controlId="formPlaintextGithub">
                            <Form.Label column sm="2" className="text-md-center text-white ps-md-0">
                            GitHub URL
                            </Form.Label>
                            <Col sm="8">
                            <Form.Control 
                                value={socialInfo.github_url} 
                                onChange={ e => onChangeHandler(e)} 
                                className="red" 
                                name="github_url" 
                                type="text" 
                                placeholder="GitHub URL" 
                            />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextTwitter">
                            <Form.Label column sm="2" className="text-md-center text-white ps-md-0">
                            Twitter URL
                            </Form.Label>
                            <Col sm="8">
                            <Form.Control 
                                value={socialInfo.twitter_url} 
                                onChange={ e => onChangeHandler(e)} 
                                className="red" 
                                type="text" 
                                name="twitter_url" 
                                placeholder="Twitter URL" 
                            />
                            </Col>
                        </Form.Group>
                        <Row className="py-2">
                            <Col sm="10" className="d-flex justify-content-md-end">
                                <Button variant="outline-danger" className="px-5" >Save</Button>
                            </Col>
                        </Row>
                    </Form>
                    </Col>
                </Row>
            </Container>
     );
}
 
export default SocialSection;