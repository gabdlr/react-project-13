import React from 'react';
import { Col, Card } from 'react-bootstrap';

const MainCoursesItem = (props) => {
    const { title, url, institution, date } = props;
    return ( 
        <Card.Body>
        <Col className="p-3 ps-5 text-white main-desc">
        <p><span className="fw-bold"><a className="courses" target="_blank" rel="noopener noreferrer" href={url}> {title} </a></span></p>
        <p>Institution: <span className="fw-bold">{institution}</span></p>
        <p>Expedition date: <span className="fw-bold">{date}</span></p>
        </Col> 
     </Card.Body>
     );
}
 
export default MainCoursesItem;
