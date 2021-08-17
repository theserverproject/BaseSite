import React from 'react';
import {useSpring, animated} from 'react-spring';
import { Card, CardContent } from '@material-ui/core';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';

import degreeIcon from "../assets/DegreeIcon.png";
import gpaIcon from "../assets/GpaIcon.png";
import calendarIcon from "../assets/CalendarIcon.png";
import transcript from "../assets/unofficial_transcript.pdf";
import "./education.css";

function createData(grade, ninePoint, fourPointCPointThree, fourPoint, fourPointThreeCPointThree, fourPointThreePoint) {
    return {grade, ninePoint, fourPointCPointThree, fourPoint, fourPointThreeCPointThree, fourPointThreePoint};
}

function Education() {

    const [displayGradeTable, setDisplayGradeTable] = React.useState(false);
    const [displayTranscript, setDisplayTranscript] = React.useState(false);

    const animationStyle = useSpring({
        from: {opacity: 0},
        to: {opacity: 1},
    });

    const dataTableRows = [
        createData("A+", 9, "NA", "NA", 4.33, 4.33),
        createData("A", 8, 4, 4, 4, 4),
        createData("A-", 7, 3.7, 3.67, 3.7, 3.67),
        createData("B+", 6, 3.3, 3.33, 3.3, 3.33),
        createData("B", 5, 3, 3, 3, 3),
        createData("B-", 4, 2.7, 2.67, 2.7, 2.67),
        createData("C+", 3, 2.3, 2.33, 2.3, 2.33),
        createData("C", 2, 2, 2, 2, 2),
        createData("D", 1, 1, 1, 1, 1),
        createData("F", 0, 0, 0, 0, 0)
    ].map((row, indx, arr) => (
        <TableRow key={row.grade}>
            <TableCell component="th" scope="row">
                {row.grade}
            </TableCell>
            <TableCell align="right">{row.ninePoint}</TableCell>
            <TableCell align="right">{row.fourPointCPointThree}</TableCell>
            <TableCell align="right">{row.fourPoint}</TableCell>
            <TableCell align="right">{row.fourPointThreeCPointThree}</TableCell>
            <TableCell align="right">{row.fourPointThreePoint}</TableCell>
        </TableRow>
    ));

    return (
        <animated.div style={animationStyle}>
            <p className="education-title">Education</p>
            <p className="education-subtitle">University of Victoria</p>

            <div className="education">
                <Card className="education-card">
                    <CardContent className="education-card-content">
                        <div className="education-circle">
                            <img className="degree-icon education-icon" src={degreeIcon} alt="Degree"></img>
                        </div>
                        <p className="education-card-title">Bachelor's of Software Engineering</p>
                        <p className="education-card-subtext">Faculty of Engineering</p>
                        <p className="education-card-subtext">University of Victoria</p>
                    </CardContent>
                </Card>
                <Card className="education-card">
                    <CardContent className="education-card-content">
                        <div className="education-circle">
                            <img className="gpa-icon education-icon" src={gpaIcon} alt="GPA"></img>
                        </div>
                        <p className="education-card-title">Cumulative GPA: 6.50 (B+/A-)</p>
                        <p className="education-card-subtext hover-text" onClick={() => setDisplayGradeTable(true)}>UVic Grade scale conversion</p>
                        <p className="education-card-subtext hover-text" onClick={() => setDisplayTranscript(true)}>Unofficial Transcript</p>
                    </CardContent>
                </Card>
                <Card className="education-card">
                    <CardContent className="education-card-content">
                        <div className="education-circle">
                            <img className="calendar-icon education-icon" src={calendarIcon} alt="Dates"></img>
                        </div>
                        <p className="education-card-title">Degree completed in 5 years</p>
                        <p className="education-card-subtext">Degree started September 2016</p>
                        <p className="education-card-subtext">Degree completed August 2021</p>
                    </CardContent>
                </Card>
            </div>
            {displayGradeTable && 
                <Card className="grade-table-modal" onMouseLeave={() => {setDisplayGradeTable(false)}}>
                    <CardContent className="grade-table-content">
                        <p className="grade-table-title">Uvic 9.0 Grade Scale Conversion</p>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Grade</TableCell>
                                        <TableCell align="right">9 point scale <br/>(C+ = 3)</TableCell>
                                        <TableCell align="right">4 point scale <br/>(C+ = 2.3)</TableCell>
                                        <TableCell align="right">4 point scale <br/>(C+ = 2.33)</TableCell>
                                        <TableCell align="right">4.33 point scale <br/>(C+ = 2.3)</TableCell>
                                        <TableCell align="right">4.33 point scale <br/>(C+ = 2.33)</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {dataTableRows}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </CardContent>
                </Card>
            }
            {displayTranscript &&
                <Card className="transcript-modal" onMouseLeave={() => {setDisplayTranscript(false)}}>
                    <CardContent>
                        <iframe src={transcript} title="Unofficial Transcript" className="transcript-iframe"></iframe>
                    </CardContent>
                </Card>
            }
        </animated.div>
    );
}

export default Education;