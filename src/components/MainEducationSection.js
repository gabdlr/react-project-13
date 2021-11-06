import React, { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import MainEducationItem from './MainEducationItem';
//Redux
import { useSelector, useDispatch } from "react-redux";
import { userEducationInfo } from "./../actions/userActions";

const MainEducationSection = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        const loadEducation = () => dispatch(userEducationInfo());
        loadEducation();
    // eslint-disable-next-line react-hooks/exhaustive-deps    
    }, []);
    const education = useSelector( state => state.user.education);
    if (education) {
        return(
            <Card className="bg-card">
            <Card.Header><h2 className="my-0 text-white">Education</h2></Card.Header>
            {education.map(element => 
                <MainEducationItem
                key={element.id}
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