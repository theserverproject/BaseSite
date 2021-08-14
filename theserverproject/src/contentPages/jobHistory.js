import { animated, useTransition } from 'react-spring';
import { Card, CardContent } from '@material-ui/core';

import cradlePointLogo from "../assets/CradlepointLogo.png";
import uvicLogo from "../assets/UVicLogo.jpg";
import bamboraLogo from "../assets/BamboraLogo.png";
import audetteLogo from "../assets/AudetteLogo.png";
import tutelaLogo from "../assets/TutelaLogo.png";
import "./jobHistory.css";
import React from 'react';

function JobHistory() {

    const jobHistory = [
        {
            "company": "Cradlepoint",
            "employmentType": "Co-op",
            "logo": cradlePointLogo,
            "start": "Jun 2017",
            "end": "Sept 2017",
            "duration": "4 mos",
            "title": "QA Software Development Intern",
        },
        {
            "company": "University of Victoria",
            "employmentType": "Co-op",
            "logo": uvicLogo,
            "start": "Jan 2018",
            "end": "Apr 2018",
            "duration": "4 mos",
            "title": "Software Development Intern"
        },
        {
            "company": "Bambora",
            "employmentType": "Co-op",
            "logo": bamboraLogo,
            "start": "Sept 2018",
            "end": "Dec 2018",
            "duration": "4 mos",
            "title": "Software Developer"
        },
        {
            "company": "Audette",
            "employmentType": "Co-op",
            "logo": audetteLogo,
            "start": "May 2019",
            "end": "Sept 2019",
            "duration": "5 mos",
            "title": "Jr. Full Stack Developer"
        },
        {
            "company": "Tutela",
            "employmentType": "Co-op/Part-time",
            "logo": tutelaLogo,
            "start": "Jan 2020",
            "end": "Dec 2020",
            "duration": "1 yr",
            "title": "Jr. Java Developer"
        }
    ].map((job, indx, arr) => {
        return (
            <Card className="job-card">
                <CardContent>
                    <img className="company-logo" src={job.logo} alt={`${job.company} Logo`}></img>
                    <div className="job-info">
                        <div className="company-name">{`${job.company} | ${job.employmentType}`}</div>
                        <div className="company-title">{job.title}</div>
                        <div className="company-duration">{`${job.start} - ${job.end} (${job.duration})`}</div>
                    </div>
                </CardContent>
            </Card>
        );
    });

    const historyTransition = useTransition(jobHistory, {
        from: {opacity: 0},
        enter: {opacity: 1},
        trail: 150
    });

    const fragment = historyTransition((style, item) => {
        return (
            <animated.div style={style}>
                {item}
            </animated.div>
        );
    });

    return (
        <React.Fragment>
            <p className="history-title">Work History</p>
            <div className="history">
                {fragment}
            </div>
        </React.Fragment>
    );
}

export default JobHistory;