import {Card} from '../components';
import {useSpring, animated} from 'react-spring';
import { Bar } from 'react-chartjs-2';

import "./languageProficiency.css";

function LanguageProficiency() {

    const animationStyle = useSpring({
        from: {opacity: 0},
        to: {opacity: 1},
    });

    const languagesData = {
        labels: ["Python", "JavaScript", "Java", "C/C++", "Dart", "Racket", "SML", "Go", "React", "Django", "Flask", "React-Native", "Flutter"],
        datasets: [{
            label: "Language Experience",
            data: [6, 6, 5, 4, 3, 2, 2, 1, null, null, null, null, null],
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
            data: [null, null, null, null, null, null, null, null, 6, 6, 4, 3, 3],
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
        2: "Basic competency",
        3: "Proficient",
        4: "Used in a Large Project",
        5: "Used Professionally",
        6: "Used in a Project & Professionally",
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
                    max: 6,
                    stepSize: 1,
                    suggestedMax: 6,
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