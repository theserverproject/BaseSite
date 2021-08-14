import React from 'react';
import headshot from '../assets/Headshot.jpg'
import './landing.css';

function Landing() {
    return (
        <React.Fragment>
            <p className="content-title">Ross Alexandra</p>
            <img className="headshot" src={headshot} alt="missing"/>
            <div className="content">
                <p>Welcome to my portfolio!</p>
                <br/>
                <p>To learn more about me, click on the edges of the page.</p>
                <p>To see a list of my projects, click the projects link in the top right.</p>
            </div>
        </React.Fragment>
    );
}

export default Landing