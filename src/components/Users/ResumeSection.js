import React from 'react';
import { Container, Card, Col, Button } from 'react-bootstrap';
import EducationHeaderComponent from './EducationHeaderComponent';
import EducationBodyComponent from './EducationBodyComponent';
import EmploymentHeaderComponent from './EmploymentHeaderComponent';
import EmploymentBodyComponent from './EmploymentBodyComponent';
import CoursesHeaderComponent from './CoursesHeaderComponent';
import CoursesBodyComponent from './CoursesBodyComponent';
import HobbiesHeaderComponent from './HobbiesHeaderComponent';
import HobbiesBodyComponent from './HobbiesBodyComponent';
const ResumeSection = () => {
    return ( 
        <Container className="bg-secondary mt-3 pt-3">
            <h2 className="text-white">Your Resume:</h2>
            <Card className="bg-card mt-4">
                <EducationHeaderComponent/>
                <EducationBodyComponent/>
            </Card>
            <Card className="bg-card mt-4">
                <EmploymentHeaderComponent/>
                <EmploymentBodyComponent/>
            </Card>
            <Card className="bg-card mt-4">
                <CoursesHeaderComponent/>
                <CoursesBodyComponent/>
            </Card>
            <Card className="bg-card mt-4">
            <HobbiesHeaderComponent/>
            <HobbiesBodyComponent/>
            </Card>
        </Container>
     );
}
 
export default ResumeSection;
