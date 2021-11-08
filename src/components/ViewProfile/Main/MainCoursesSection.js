import React from 'react';
import { Card } from 'react-bootstrap';
import MainCoursesItem from './MainCoursesItem';
//Redux
import { useSelector } from "react-redux";

const MainCoursesSection = () => {

    const courses = useSelector( state => state.view.profile.courses);
    if (courses){
    return ( 
        <Card id="courses" className="bg-card mt-5">
        <Card.Header><h2 className="my-0 text-white">Certifications</h2></Card.Header>
        {courses.map(course => 
            <MainCoursesItem
            key={course._id}
            title={course.title}
            url={course.url}
            institution={course.institution}
            date={course.date}
            />)}
        </Card>
     )
    } else {
        return null;
    }
}
 
export default MainCoursesSection;