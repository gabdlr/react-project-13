import React from 'react';
import { Container, Card } from 'react-bootstrap';
import EducationHeaderComponent from './Components/EducationHeaderComponent';
import EducationBodyComponent from './Components/EducationBodyComponent';
import EmploymentHeaderComponent from './Components/EmploymentHeaderComponent';
import EmploymentBodyComponent from './Components/EmploymentBodyComponent';
import CoursesHeaderComponent from './Components/CoursesHeaderComponent';
import CoursesBodyComponent from './Components/CoursesBodyComponent';
import HobbiesHeaderComponent from './Components/HobbiesHeaderComponent';
import HobbiesBodyComponent from './Components/HobbiesBodyComponent';
import SkillsHeaderComponents from './Components/SkillsHeaderComponent';
import SkillBodyComponent from './Components/SkillsBodyComponent';
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
                <SkillsHeaderComponents/>
                <SkillBodyComponent/>
            </Card>
            <Card className="bg-card mt-4">
                <HobbiesHeaderComponent/>
                <HobbiesBodyComponent/>
            </Card>
        </Container>
     );
}

export default ResumeSection;
