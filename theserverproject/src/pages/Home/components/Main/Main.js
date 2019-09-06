import React from 'react';
import './Main.css';

// Import componenets
import Panel from '../../../../minorComponents/panel/Panel.js';
import Image from '../../../../minorComponents/image/Image.js';

const Main = () => {

    return (
        <main id="main">
            <div className="content-seperator"/>
            <Panel classOverride="main-content">
                <body>
                    <h1 style={ { marginTop: '10px' } }>What is the Server Project?</h1>
                    <p>
                        The server project is as simple as it sounds. It is a home-owned server being used
                        for what servers are used best for: serving stuff. The website you're looking at right
                        now is served off of it.
                        <br/><br/>
                        This server is also used to host live versions of my personal projects, as well as
                        the personal projects of some of my friend. If you're curious about interacting with
                        my personal projects, please navigate to the projects page (link in the nav-bar).
                    </p>
                    <h1>What kind of server is it?</h1>
                    <p>
                        Obviously its the kind of server that serves things. Wait, you wanted the model?
                        It's a referb Dell PowerEdge R710. What, that's not enough information for you?
                        Fine, here's a picture of it sitting in my living room
                        <br/><br/>
                        <Image image="lvserver.jpg" altText="[This is strange, there should be a picture here. Please send an email to Ross-Alexandra@outlook.com informing him that the image has been stolen.]"/>
                        <br/><br/>
                    </p>
                    <h1>Ok this make sense, but who are you?</h1>
                    <p>
                        Wow, thats so forward, alright. I'm a 4<sup>th</sup> year software engineering student at
                        the University of Victoria with interests in creating scaleable, sustainable,
                        functional software, and machine learning (though everyone is interested in
                        ML here.)
                        <br/>
                        I love writting software, and as such I'm often working on various personal
                        projects, from a CLI tool to solve Sudoku puzzles (using human methods and
                        outputting a list of moves and why) to... well this.
                        <br/><br/>
                    </p>
                    <h1>Interesting... but why buy a server?</h1>
                    <p>
                        I bought this server and started this project after an interviewer told me that
                        they had gone to my GitHub and gotten some of my projects running in their
                        local environments. This was cool to me, but I realized that there had to be
                        a better way of showcasing what I do in my free time than have people setup
                        my projects on their own computers. From there, it's history, and I now have
                        a <b>very</b> loud machine sitting in my living room.
                    </p>
                </body>
            </Panel>
            <div className="content-seperator"/>
        </main>
    );
}

export default Main
