import React from 'react';
import './Navbar.css';

// Import the minor components needed for this.
import Image from '../../../../basicComponents/image/Image.js';

const Navbar = () => {

    return (
        <header id="navbar">
            <Image classOverride= { 'navbar-header' } image="logo.png" imageLink="http://www.theserverproject.com" defaultText="Logo not found"/>
            <a className="navbar-header" href="http://projects.theserverproject.com/">Projects</a>
            <a className="navbar-header" href="https://www.github.com/Ross-Alexandra" target='_blank' rel="noopener noreferrer">GitHub</a>
        </header>
    );
}

export default Navbar
