import React, { useEffect } from 'react';
import { Card, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import EducationEntryComponent from './EducationEntryComponent';
const EducationBodyComponent = () => {
    
    const { education } = useSelector(state => state.view.profile);
    useEffect(() => {
        
    }, [education])
    return (
        <Card.Body>

            <Col className="p-3 text-white main-desc">
            
            { education !== undefined ? 
                education.length > 0 ?
                (education.map(entry => (
                <EducationEntryComponent
                key= {entry._id}
                _id={entry._id}
                degree={entry.degree}
                institution={entry.institution}
                period_end={entry.period_end}
                period_start={entry.period_start}
                state={entry.state}
                />))) : (<p className="fw-bolder">Seems like you haven't add any education registry yet, try adding a new one!</p>) 
                : null
            }
            </Col>
            
        </Card.Body>   
     );
}
 
export default EducationBodyComponent;