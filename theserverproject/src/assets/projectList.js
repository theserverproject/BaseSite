import React from "react";

const projects = [
    {
        'longName': 'The Server Project',
        'description': (
                        <React.Fragment>
                            The server project is as simple as it sounds.
                            It is a home-owned server being used for what
                            servers are used best for: serving stuff. The
                            website you're looking at right now is served
                            off of it.
                        </React.Fragment>
                       ),
        'github': 'https://github.com/theserverproject/BaseSite',
        'url': '',
        'buttonText': 'See the source code',
    }, {
        'longName': 'Scrim Search',
        'description': (
                <React.Fragment>
                    ScrimSearch is a tool used by an esports community
                    to aid in finding scrims (practice matches). This 
                    tool serves a Discord of 50+ active users and makes
                    finding practice matches as easy as pressing a button.
                    <br/><br/>
                    From the technical side of things, the app is simply
                    a React app built on top of an API designed to serve
                    a Discord bot. The bot and the React app interface
                    with eachother through this API, and that facilitates
                    the magic. 
                </React.Fragment>
            ),
        'github': '',
        'url': 'http://scrimsearch.theserverproject.com',
        'buttonText': 'Show me the app!',
    },  {
        'longName': 'Strat Mapper',
        'description': (
                <React.Fragment>
                    Similar to the above tool, this one aids same
                    esports community with creating visuals for their
                    in-game strategies (or 'strats'). 
                    <br/><br/>
                    The simply creates a drawable version of the game's
                    maps for the user, and offers different drawing tools
                    alongside drag-and-drop icons of useful in-game items.
                </React.Fragment>
            ),
        'github': '',
        'url': 'http://stratmapper.theserverproject.com',
        'buttonText': 'Map the Strats!',
    }, {
        'longName': 'Engineering Capstone: Occufi',
        'description': (
                <React.Fragment>
                    Occufi is a data-collection and display system
                    useful for any business needing to track volumes
                    and locations of customers within a physical location.
                    Occufi uses small Wi-fi enabled data-collectors which
                    listen for SSID broadcasts from customer's cellphones. 
                    <br/><br/>
                    If a user has multiple of these data-collectors they are
                    able to generate a heatmap of where customers are during
                    any given day (or live!). If a user only has a single of
                    these devices then they are able to generate live graphs
                    of customer occupancy.
                    <br/><br/>
                    Due to privacy concers, and potential for commercial 
                    development the source code for this project is 
                    unavailable publicly, however may be shared upon request. 
                </React.Fragment>
            ),
        'github': '',
        'url': '',
        'buttonText': '',
    }, {
        'longName': 'Siege Data Analysis Bot',
        'description': (
                <React.Fragment>
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
                </React.Fragment>
            ),
        'github': 'https://github.com/Ross-Alexandra/siegeAnalyzer',
        'url': '',
        'buttonText': 'See the source code',
    }, {
        'longName': 'Is It My Birthday?!',
        'description': (
                <React.Fragment>
                    Is it my birthday is the result of a joke between my 
                    roommate and I. This app/website/discrod bot does
                    one simple thing. After you input your birthday, it will
                    tell you if today, is in fact, your birthday.
                    <br/><br/>
                    This simple idea is my version of a Hello World. Whenever
                    I am venturing into a new space of development, I learn the
                    environment and practices by developing this app.
                    <br/><br/>
                    Over the years most of the code for these projects has
                    disappeared, however the code for a React Native app lives
                    on in the linked GitHub.
                </React.Fragment>
            ),
        'github': 'https://github.com/Ross-Alexandra/IsItMyBirthdayApp',
        'url': '',
        'buttonText': 'See the source code',
    }, {
        'longName': 'Search the Py Docs.',
        'description': (
                <React.Fragment>
                    A long time ago, in a job far far away a conversation
                    between a coworker and I was had. This conversation
                    reflected our frustration at searching for Python
                    related materials on the internet. See, whenever you 
                    would search for something Python related, and look at
                    the docs, you could never be sure <b>what</b> version
                    of Python you'd be looking at.
                    <br/><br/>
                    The solution to this was simple: a chrome extension which
                    allowed you to search for that thing, and specify what
                    version of Python you wanted to search for.
                </React.Fragment>
            ),
        'github': 'https://github.com/Ross-Alexandra/Search-the-py-docs-extension',
        'url': 'https://chrome.google.com/webstore/detail/pydocs-version-loader/jioomgcpidjdncllmlhphmfplinpdafi',
        'buttonText': 'Wait... that sounds useful',
    },     {
        'longName': 'And Many More!',
        'description': (
                <React.Fragment>
                    For a full list of all the projects that I've worked on
                    You can go to my GitHub!
                    <br/><br/>
                    If you see a project there that you would like to see
                    hosted here (with a front-end to boot) please create
                    an issue on this site's GitHub! Just click the
                    GitHub logo in the bottom-right corner.
                </React.Fragment>
            ),
            'github': 'https://github.com/Ross-Alexandra',
            'url': '',
            'buttonText': 'Check out my GitHub',
    }
];

export default projects;