import React from 'react';
import { Card } from 'react-bootstrap';
import MainEmploymentItem from './MainEmploymentItem';
//Redux
import { useSelector } from "react-redux";

const MainEmploymentSection = () => {


    const jobs = useSelector( state => state.view.profile.jobs);
    if (jobs) {
        return ( 
            <Card id="employment" className="bg-card mt-5">
                <Card.Header><h2 className="my-0 text-white">Employment History</h2></Card.Header>
                {jobs.map(job => 
                    <MainEmploymentItem
                    key={job._id}
                    role={job.role}
                    company={job.company}
                    period_start={job.period_start}
                    period_end={job.period_end}
                    />)}
            </Card>
        );
    } else {
        return null;
    }
}
 
export default MainEmploymentSection;    