import React from 'react';
import './Landing.css';

// Import componenets
import Panel from '../../../../minorComponents/panel/Panel.js';

const Landing = () => {

    return (
        <div id="landing">
            <div class="content-seperator"/>
            <Panel classOverride="landing-content">
                <p>Hello World!</p>
            </Panel>
            <div class="content-seperator"/>
        </div>
    );
}

export default Landing
