import React from 'react';
import './Main.css';

// Import componenets
import Panel from '../../../../basicComponents/panel/Panel.js';
import Image from '../../../../basicComponents/image/Image.js';

const Main = () => {

    return (
        <main id="main">
            <div className="content-seperator"/>
            <Panel classOverride="main-content">
                <div role="main">
                    <h1 className="heading" style={ { marginTop: '10px' } }>What is the Server Project?</h1>
                    <p className="paragraph">
                        The server project is as simple as it sounds. It is a home-owned server being used
                        for what servers are used best for: serving stuff. The website you're looking at right
                        now is served off of it, and all of my hostable projects are hosted off that very server
                        right now! 
                    </p>
                    <h1 className="heading">What kind of server is it?</h1>
                    <p className="paragraph">
                        Obviously it's the kind of server that serves things. Wait, you wanted the model?
                        It's a referb Dell PowerEdge R710. What, that's not enough information for you?
                        Fine, here's a picture of it sitting in my living room.
                        <br/><br/>
                        <Image image="lvserver.jpg" altText="[This is strange, there should be a picture here. Please send an email to Ross-Alexandra@outlook.com informing him that the image has been stolen.]"/>
                        <br/><br/>
                    </p>
                    <h1 className="heading">Ok this make sense, but who are you?</h1>
                    <p className="paragraph">
                        Wow, thats so forward, alright. I'm a recent grad with a bachelors of software engineering from
                        the University of Victoria with interests in creating scalable, sustainable,
                        and functional (as in, it works, I'm paradigm agnostic) software.
                        <br/>
                        I love writing software, and as such I'm often working on various personal
                        projects, from a web-app/Discord bot to help a community I'm involved with
                        to a distributed imbedded system used for tracking customer volumes in a store
                        to... well this.
                    </p>
                    <h1 className="heading">Interesting... but why buy a server?</h1>
                    <p className="paragraph">
                        I bought this server and started this project after an interviewer told me that
                        they had gone to my GitHub and gotten some of my projects running in their
                        local environments. This was cool to me, but I realized that there had to be
                        a better way of showcasing what I do in my free time than have people setup
                        my projects on their own computers. From there, it's history, and I now have
                        a <b>very</b> loud machine sitting in my living room.
                    </p>
                </div>
            </Panel>
            <div className="content-seperator"/>
        </main>
    );
}

export default Main
