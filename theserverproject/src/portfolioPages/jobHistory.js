import { animated, useTransition } from 'react-spring';
import { FlipCard } from '../components';

import cradlePointLogo from "../assets/CradlepointLogo.png";
import uvicLogo from "../assets/UVicLogo.jpg";
import bamboraLogo from "../assets/BamboraLogo.png";
import audetteLogo from "../assets/AudetteLogo.png";
import tutelaLogo from "../assets/TutelaLogo.png";
import battlefyLogo from '../assets/BattlefyLogo.png';

import "./jobHistory.css";
import React from 'react';

function JobHistory() {

    const jobHistory = [
        {
            company: "Battlefy",
            employmentType: "Full Time",
            logo: battlefyLogo,
            start: "Sept 2021",
            end: "Current",
            duration: "Ongoing",
            title: "Software Engineer",
            longDescription: ""
        },
        {
            company: "Tutela",
            employmentType: "Extended Co-op",
            logo: tutelaLogo,
            start: "Jan 2020",
            end: "Dec 2020",
            duration: "1 yr",
            title: "Jr. Java Developer",
            longDescription: ""
        },
        {
            company: "Audette",
            employmentType: "Co-op",
            logo: audetteLogo,
            start: "May 2019",
            end: "Sept 2019",
            duration: "5 mos",
            title: "Jr. Full Stack Developer",
            longDescription: ""
        },
        {
            company: "Bambora",
            employmentType: "Co-op",
            logo: bamboraLogo,
            start: "Sept 2018",
            end: "Dec 2018",
            duration: "4 mos",
            title: "Software Developer",
            longDescription: ""
        },
        {
            company: "University of Victoria",
            employmentType: "Co-op",
            logo: uvicLogo,
            start: "Jan 2018",
            end: "Apr 2018",
            duration: "4 mos",
            title: "Software Development Intern",
            longDescription: ""
        },
        {
            company: "Cradlepoint",
            employmentType: "Co-op",
            logo: cradlePointLogo,
            start: "Jun 2017",
            end: "Sept 2017",
            duration: "4 mos",
            title: "QA Software Development Intern",
            longDescription: ""
        }
    ].map((job) => {
        return (
            <FlipCard className="job-card">
                <img className="company-logo" src={job.logo} alt={`${job.company} Logo`}></img>
                <div className="job-info">
                    <div className="company-name">{`${job.company} | ${job.employmentType}`}</div>
                    <div className="company-title">{job.title}</div>
                    <div className="company-duration">{`${job.start} - ${job.end} (${job.duration})`}</div>
                </div>
            </FlipCard>
        );
    });

    const historyTransition = useTransition(jobHistory, {
        from: {opacity: 0},
        enter: {opacity: 1},
        trail: 100
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