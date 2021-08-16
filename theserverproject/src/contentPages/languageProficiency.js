import {Card} from '@material-ui/core';
import {useSpring, animated} from 'react-spring';
import { Bar } from 'react-chartjs-2';

import "./languageProficiency.css";

function LanguageProficiency() {

    const animationStyle = useSpring({
        from: {opacity: 0},
        to: {opacity: 1},
    });

    const languagesData = {
        labels: ["Python", "JavaScript", "Java", "C/C++", "Racket", "SML", "Go", "React", "Django", "Flask"],
        datasets: [{
            label: "Language Experience",
            data: [5, 5, 4, 3, 2, 2, 1, null, null, null],
            backgroundColor: [
                "rgba(0, 40, 200, .75)",
                "rgba(0, 40, 200, .75)",
                "rgba(0, 40, 200, .75)",
                "rgba(0, 40, 200, .75)",
                "rgba(0, 40, 200, .75)",
                "rgba(0, 40, 200, .75)",
                "rgba(0, 40, 200, .75)",
            ]
        }, 
        {
            label: "Framework Experience",
            data: [null, null, null, null, null, null, null, 5, 5, 3],
            backgroundColor: [
                "rgba(0, 150, 40, .75)",
                "rgba(0, 150, 40, .75)",
                "rgba(0, 150, 40, .75)",
            ]
        }]
    }

    const yAxisLabels = {
        0: "",
        1: "Minimal Experience",
        2: "Schoolwork Only",
        3: "Used in a Large Project",
        4: "Used Professionally",
        5: "Used in a Project & Professionally",
    }

    const languagesOptions = {
        layout: {
            padding: {
                top: 15,
                left: 15,
                right: 25,
                bottom: 10
            }
        },
        skipNull: true,
        plugins: {
            tooltip: {
                filter: (tooltipItem, data) => {
                    return tooltipItem.raw !== 0;
                },
                callbacks: {
                    label: (context) => {
                        return yAxisLabels[context.raw];
                    }
                }
            }
        },
        scales: {
            y: {
                ticks: {
                    min: 0,
                    max: 5,
                    stepSize: 1,
                    suggestedMax: 5,
                    callback: function(label, index, labels) {
                        return yAxisLabels[label];
                    }
                }
            }
        }
    }

    return (
        <animated.div style={animationStyle}>
            <p className="proficiency-title">Proficiency</p>
            <Card className="proficiency">
                <Bar className="languages-canvas" data={languagesData} options={languagesOptions} />
            </Card>
        </animated.div>
    )
}

export default LanguageProficiency;