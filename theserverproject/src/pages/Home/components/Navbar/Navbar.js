import React from 'react';
import './Navbar.css';

// Import the minor components needed for this.
import Image from '../../../../minorComponents/image/Image.js';
import Dropdown from '../../../../minorComponents/dropdown/Dropdown.js';

const Navbar = () => {
    return (
        <header id="navbar">
            <a href="http://www.theserverproject.com"><Image classOverride= { 'navbar-header' } image="logo.png" defaultText="Logo not found"/></a>
            <a className="navbar-header" href="http://projects.theserverproject.com/">Projects</a>
            <a className="navbar-header" href="https://www.slideshare.net/slideshow/embed_code/key/lfqoSUV9bb8kxs">Resume</a>
            <a className="navbar-header" href="https://www.github.com/Ross-Alexandra">GitHub</a>
            <Dropdown dropdownClassOverride={ 'navbar-header' } dropdownTitleClassOverride={ "underline navbar-header" }>Others using this server</Dropdown>
        </header>
    );
}

export default Navbar
