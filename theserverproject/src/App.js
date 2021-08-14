import {Component} from 'react';

import logo from './assets/Logo.png';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            activeLink: "/"
        }
    }

    navigate = (e) => {
        e.preventDefault();

        this.setState({activeLink: e.target.pathname});
    }

    navigate

    render() {

        const linkTree = [["/", "Home"], ["/projects", "Projects"]].map((value, indx, arr) => {
            return (
                value[0] === this.state.activeLink ? 
                    <div className={"active-navigator-link"}>{value[1]}</div>
                :
                    <a className={"navigator-link"} href={value[0]} onClick={e => {this.navigate(e)}}>{value[1]}</a>
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

                    </div>
                </div>
                <div className="app-footer">
                    <div className="content-body">

                    </div>
                </div>
            </div>
        );
    }
}

export default App;
