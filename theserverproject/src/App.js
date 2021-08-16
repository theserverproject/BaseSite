import React, {Component} from 'react';
import { Landing, JobHistory, Education, LanguageProficiency } from './contentPages';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import { Fade } from '@material-ui/core';

import logo from './assets/Logo.png';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            activeLink: "Home",
            contentPage: 1,
            leftArrowVisible: false,
            rightArrowVisible: false,
        }

        this.contentPages = [
            <Landing/>,
            <Education/>,
            <JobHistory/>,
            <LanguageProficiency/>,
            
        ]
    }

    navigate = (e) => {
        e.preventDefault();

        this.setState({activeLink: e.target.id});
    }

    render() {

        const contentPage = this.contentPages[this.state.contentPage - 1]

        const linkTree = ["Home", "Projects"].map((value, indx, arr) => {
            return (
                value === this.state.activeLink ? 
                    <div className={"active-navigator-link"}>{value}</div>
                :
                    <div className={"navigator-link"} id={value} onClick={e => {this.navigate(e)}}>{value}</div>
            )
        });

        const displayRightArrow = this.state.contentPage < this.contentPages.length && this.state.rightArrowVisible;
        const displayLeftArrow = this.state.contentPage > 1 && this.state.leftArrowVisible;

        return (
            <div className="app">
                <div className="app-header">
                    <div className="content-body header-content">
                        <img className="app-logo" src={logo} alt="Server Project"/>
                        <nav className="app-navigator">
                            {linkTree}
                        </nav>
                    </div>
                </div>
                <div className="app-body">
                    <div className="content-body">
                        {contentPage}
                    </div>
                </div>
                <div className="app-footer">
                    <div className="content-body">
                        <div className="footer-content">
                            <p>For any inquiries please feel free to contact me at 
                                <a href="mailto:Ross-Alexandra@outlook.com"> Ross-Alexandra@outlook.com</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="left-arrow-box"
                     onMouseEnter={() => this.setState({leftArrowVisible: true})}
                     onMouseLeave={() => this.setState({leftArrowVisible: false})}
                     onClick={() => displayLeftArrow && this.setState({contentPage: this.state.contentPage - 1})}
                >
                    {displayLeftArrow ? 
                        <Fade in={true}>
                            <NavigateBeforeIcon className="left-arrow" fontSize="inherit"/>
                        </Fade>
                    :
                        <Fade in={false}>
                            <NavigateBeforeIcon fontSize="inherit"/>
                        </Fade>
                    }
                </div>
                <div className="right-arrow-box"
                     onMouseEnter={() => this.setState({rightArrowVisible: true})}
                     onMouseLeave={() => this.setState({rightArrowVisible: false})}
                     onClick={() => displayRightArrow && this.setState({contentPage: this.state.contentPage + 1})}
                >
                    {displayRightArrow ? 
                        <Fade in={true}>
                            <NavigateNextIcon className="right-arrow" fontSize="inherit"/>
                        </Fade>
                    :
                        <Fade in={false}>
                            <NavigateNextIcon fontSize="inherit"/>
                        </Fade>
                    }
                </div>
            </div>
        );
    }
}

export default App;
