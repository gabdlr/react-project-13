import React from 'react';
import {Container, Navbar, Row, Col } from 'react-bootstrap';
import UsersPaginator from './Utilities/UsersPaginator';

const Footer = () => {


    return (
        <Navbar bg="dark" variant="dark" className="mt-4 navbar-shadow-footer"> 
        <Container>
            <Row className="w-100">
                <Col md={8} >
                    <UsersPaginator/>
                </Col>
                <Col md={4} className="d-flex align-items-end">
                    <p className="copyright pt-2 pt-md-0 text-center text-md-end ">
                        Made with <i className="bi bi-heart-fill" style={{color:'#ff0000'}}> </i> 
                        by Gabriel De Los Rios in <i className="bi bi-geo-alt" style={{color:'#75aee0'}}></i>Argentina for the <i className="bi bi-globe" style={{color:'#42C920'}}></i></p>
                </Col>
            </Row>
        </Container>
        </Navbar>
     );
}
 
export default Footer;