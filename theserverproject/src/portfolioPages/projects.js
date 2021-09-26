import {useSpring, animated, useTransition} from 'react-spring';
import { Button } from '@material-ui/core';
import { Card } from '../components';
import SimpleBar from 'simplebar-react';

import projects from "../assets/projectList.js";
import './projects.css';
import 'simplebar/dist/simplebar.min.css';


function Projects() {

    const animationStyle = useSpring({
        from: {opacity: 0},
        to: {opacity: 1},
    });

    const projectCards = projects.map((project, indx) => { 
            
        const projectLink = project.url ? project.url : project.github;
        
        return (
            <Card className="project-card" key={indx}>
                <p className="project-title">{project.longName}</p>
                <p className="project-description">{project.description}</p>
                {projectLink && <Button className="project-button" variant="outlined" href={projectLink}>{project.buttonText}</Button>}
            </Card>
        );
    });

    const projectTransition = useTransition(projectCards, {
        from: {opacity: 0},
        enter: {opacity: 1},
        trail: 100
    });

    const fragment = projectTransition((style, item) => {
        return (
            <animated.div style={style}>
                {item}
            </animated.div>
        );
    });

    return (
        <animated.div style={animationStyle}>
            <p className="projects-title">Projects</p>
            <div className="projects">
                <SimpleBar className="project-cards">
                    {fragment}
                </SimpleBar>
            </div>
        </animated.div>
    );
}

export default Projects;