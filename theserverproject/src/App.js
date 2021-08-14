import {Component} from 'react';

import logo from './assets/Logo.png';
import headshot from './assets/Headshot.jpg'
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            activeLink: "Home"
        }
    }

    navigate = (e) => {
        e.preventDefault();

        this.setState({activeLink: e.target.id});
    }

    navigate

    render() {

        const linkTree = ["Home", "Projects"].map((value, indx, arr) => {
            return (
                value === this.state.activeLink ? 
                    <div className={"active-navigator-link"}>{value}</div>
                :
                    <div className={"navigator-link"} id={value} onClick={e => {this.navigate(e)}}>{value}</div>
            )
        });

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
                        {/* Internal content. This should be extracted. */}
                            <p className="content-title">Ross Alexandra</p>
                            <img className="headshot" src={headshot} alt="missing"/>
                            <div className="content">
                                <p>Welcome to my portfolio!</p>
                                <br/>
                                <p>To learn more about this website, click on the edges of the page.</p>
                                <p>To see a list of my projects, click the projects link in the top right.</p>
                            </div>
                        {/* End of internal content.*/}
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
            </div>
        );
    }
}

export default App;
