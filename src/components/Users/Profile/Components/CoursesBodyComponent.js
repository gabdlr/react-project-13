import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import CoursesEntryComponent from './CoursesEntryComponent';
const CoursesBodyComponent = () => {

    const { courses } = useSelector(state => state.view.profile);
    return ( 
        <Card.Body>

            <Col className="p-3 text-white main-desc">
            
            { courses !== undefined ?
                courses.length > 0 ?  
                (courses.map(entry => (
                <CoursesEntryComponent
                key= {entry._id}
                _id={entry._id}
                title={entry.title}
                url={entry.url}
                institution={entry.institution}
                date={entry.date}
                />))) : (<p className="fw-bolder">Seems like you haven't add any certificate yet, try adding a new one!</p>)
                : null
            }
            </Col>
            
        </Card.Body> 
     );
}
 
export default CoursesBodyComponent;