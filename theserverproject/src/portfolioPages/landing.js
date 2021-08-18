import {useSpring, animated} from 'react-spring';

import headshot from '../assets/Headshot.jpg'
import './landing.css';

function Landing() {

    const animationStyle = useSpring({
        from: {opacity: 0},
        to: {opacity: 1},
    });

    return (
        <animated.div style={animationStyle}>
            <p className="landing-title">Ross Alexandra</p>
            <img className="headshot" src={headshot} alt="missing"/>
            <div className="landing">
                <p>Welcome to my portfolio!</p>
                <br/>
                <p>To learn more about me, click on the edges of the page.</p>
                <p>To see a list of my projects, click the projects link in the top right.</p>
            </div>
        </animated.div>
    );
}

export default Landing