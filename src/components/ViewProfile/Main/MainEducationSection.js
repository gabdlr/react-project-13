import React from 'react';
import { Card } from 'react-bootstrap';
import MainEducationItem from './MainEducationItem';
//Redux
import { useSelector } from "react-redux";

const MainEducationSection = () => {

    const education = useSelector( state => state.view.profile.education);
    if (education) {
        return(
            <Card id="education" className="bg-card mt-4">
            <Card.Header><h2 className="my-0 text-white">Education</h2></Card.Header>
            {education.map(element => 
                <MainEducationItem
                key={element._id}
                institution={element.institution}
                degree={element.degree}
                state={element.state}
                period_start={element.period_start}
                period_end={element.period_end}
                />)}
            </Card>
        ) 
    } else {
        return null;
    }
    
   
}
 
export default MainEducationSection;