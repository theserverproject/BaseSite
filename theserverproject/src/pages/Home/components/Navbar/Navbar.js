import React from 'react';
import './Navbar.css';

// Import the minor components needed for this.
import Image from '../../../../minorComponents/image/Image.js';
import Dropdown from '../../../../minorComponents/dropdown/Dropdown.js';

const Navbar = () => {

    let dropdownItems = [
        <a key={ 'EKWAN' } href="http://ethanscorner.theserverproject.com/" className='dropdown-items'>Ethan Kwan</a>,
        <a key={ 'LMARSHALL' } href="http://landonscorner.theserverproject.com/" className='dropdown-items'>Landon Marshall</a>,
        <a key={ 'JMEGYESI' } href="http://jeremyscorner.theserverproject.com/" className='dropdown-items'>Jeremy Megyesi</a>,
        <a key={ 'JMCINTOSH' } href="http://joshscorner.theserverproject.com/" className='dropdown-items'>Josh McIntosh</a>,
    ];

    return (
        <header id="navbar">
            <a href="http://www.theserverproject.com"><Image classOverride= { 'navbar-header' } image="logo.png" defaultText="Logo not found"/></a>
            <a className="navbar-header" href="http://projects.theserverproject.com/">Projects</a>
            <a className="navbar-header" href="https://www.slideshare.net/slideshow/embed_code/key/lfqoSUV9bb8kxs">Resume</a>
            <a className="navbar-header" href="https://www.github.com/Ross-Alexandra">GitHub</a>
            <Dropdown dropdownItems={ dropdownItems } dropdownClassOverride={ 'navbar-header' } dropdownTitleClassOverride={ "underline navbar-header" }>Others using this server</Dropdown>
        </header>
    );
}

export default Navbar
