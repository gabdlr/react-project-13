import React from 'react';
import { Card } from 'react-bootstrap';
import MainSkillsItem from './MainSkillsItem';
//Redux
import { useSelector } from "react-redux";

const MainSkillsSection = () => {

    const stack = useSelector( state => state.view.profile.stack);
    if (stack){
    return ( 
        <Card id="skill" className="bg-card mt-5">
        <Card.Header><h2 className="my-0 text-white">Skills</h2></Card.Header>
        <Card.Body>
        {stack.map(element => 
            <MainSkillsItem
            key={element._id}
            title={element.technology}
            />)}
        </Card.Body>    
        </Card>
     )
    } else {
        return null;
    }
}
export default MainSkillsSection;