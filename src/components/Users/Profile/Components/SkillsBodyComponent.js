import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import SkillsEntryComponent from './SkillsEntryComponent';
const SkillBodyComponent = () => {

    const { stack } = useSelector(state => state.view.profile);

    return (
        <Card.Body>
            <Col className="p-3 text-white main-desc">
            
            { stack !== undefined ? 
                stack.length > 0 ?
                (stack.map(entry => (
                <SkillsEntryComponent
                key={entry._id}
                _id={entry._id}
                technology={entry.technology}
                expertise={entry.expertise}
                />))) : (<p className="fw-bolder">Seems like you haven't add any skill yet, try adding a new one!</p>) 
                : null
            }

            </Col>
        </Card.Body>   
     );
}
 
export default SkillBodyComponent;