import React from "react";

const projects = [
    {
        'longName': 'The Server Project',
        'description': (
            <>
                The server project is as simple as it sounds.
                It is a home-owned server being used how
                servers are used best: to serve stuff! In fact The
                website you're looking at right now is served
                off of it.
            </>
        ),
        'github': 'https://github.com/theserverproject/BaseSite',
        'url': '',
        'buttonText': 'See the source code',
    }, {
        'longName': 'Scrim Search',
        'description': (
            <>
                ScrimSearch is a tool used by an esports community
                to aid in finding scrims (practice matches). This 
                tool serves a Discord of 50+ active users and makes
                finding practice matches as easy as pressing a button.
                <br/><br/>
                From the technical side of things, the app is simply
                a React app built on top of an API designed to serve
                a Discord bot. The bot and the React app interface
                with each other through this API, and that facilitates
                the magic. 
            </>
        ),
        'github': '',
        'url': 'http://scrimsearch.theserverproject.com',
        'buttonText': 'Show me the app!',
    },  {
        'longName': 'Strat Mapper',
        'description': (
            <>
                Similar to the above tool, this tool aids the same
                esports community with creating visuals for their
                in-game strategies (or 'strats'). 
                <br/><br/>
                The tool simply creates a drawable version of the game's
                maps for the user, and offers different drawing tools
                alongside drag-and-drop icons of useful in-game items.
            </>
        ),
        'github': '',
        'url': 'http://stratmapper.theserverproject.com',
        'buttonText': 'Map the Strats!',
    }, {
        'longName': 'Engineering Capstone: Occufi',
        'description': (
            <>
                Occufi is a data-collection and display system
                useful for any business needing to track volumes
                and locations of customers within a physical location.
                Occufi uses small Wi-fi enabled data-collectors which
                listen for SSID broadcasts from customer's cellphones. 
                <br/><br/>
                If a user has multiple of these data-collectors they are
                able to generate a heatmap of where customers are during
                any given day. If a user has only one of
                these devices then they are able to generate live graphs
                of customer occupancy.
                <br/><br/>
                Due to privacy concers, and potential for commercial 
                development the source code for this project is 
                unavailable publicly, however may be shared upon request. 
            </>
        ),
        'github': '',
        'url': '',
        'buttonText': '',
    }, {
        'longName': 'Siege Data Analysis Bot',
        'description': (
            <>
                The Siege Data Analysis Bot, or Siege Analyzer, is a Discord
                bot which allows competitive Rainbow Six Siege teams to
                collect, aggregate, and display player performance data.
                This tool allows coaches and analysts to spend more time
                crunching data, and less time worrying about collecting
                that data. 
                <br/><br/>
                Presently this tool is in a closed-beta, so if you would
                like access to this tool please contact me and I will see
                if I can get you collecting data easier.
            </>
        ),
        'github': 'https://github.com/Ross-Alexandra/siegeAnalyzer',
        'url': '',
        'buttonText': 'See the source code',
    }, {
        'longName': 'And Many More!',
        'description': (
            <>
                For a full list of all the projects that I've worked on
                You can go to my GitHub!
            </>
        ),
        'github': 'https://github.com/Ross-Alexandra',
        'url': '',
        'buttonText': 'Check out my GitHub',
    }
];

export default projects;