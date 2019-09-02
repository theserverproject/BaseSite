import React from 'react';
import './Main.css';

// Import componenets
import Panel from '../../../../minorComponents/panel/Panel.js';

const Main = () => {

    return (
        <main id="main">
            <div class="content-seperator"/>
            <Panel classOverride="main-content">
                <p>Hello World!</p>
            </Panel>
            <div class="content-seperator"/>
        </main>
    );
}

export default Main
