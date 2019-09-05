import React from 'react';
import './Navbar.css';

// Import the minor components needed for this.
import Image from '../../../../minorComponents/image/Image.js';
import Dropdown from '../../../../minorComponents/dropdown/Dropdown.js';

const Navbar = () => {

    let dropdownItems = [
        <a key={ 'EKWAN' } href="http://ethanscorner.theserverproject.com/" target='_blank' rel="noopener noreferrer" className='dropdown-items'>Ethan Kwan</a>,
        <a key={ 'LMARSHALL' } href="http://landonscorner.theserverproject.com/" target='_blank' rel="noopener noreferrer" className='dropdown-items'>Landon Marshall</a>,
        <a key={ 'JMEGYESI' } href="http://jeremyscorner.theserverproject.com/" target='_blank' rel="noopener noreferrer" className='dropdown-items'>Jeremy Megyesi</a>,
        <a key={ 'JMCINTOSH' } href="http://joshscorner.theserverproject.com/" target='_blank' rel="noopener noreferrer" className='dropdown-items'>Josh McIntosh</a>,
    ];

    return (
        <header id="navbar">
            <Image classOverride= { 'navbar-header' } image="logo.png" imageLink="http://www.theserverproject.com" defaultText="Logo not found"/>
            <a className="navbar-header" href="http://projects.theserverproject.com/" target='_blank' rel="noopener noreferrer">Projects</a>
            <a className="navbar-header" href="https://www.slideshare.net/slideshow/embed_code/key/lfqoSUV9bb8kxs" target='_blank' rel="noopener noreferrer">Resume</a>
            <a className="navbar-header" href="https://www.github.com/Ross-Alexandra" target='_blank' rel="noopener noreferrer">GitHub</a>
            <Dropdown dropdownItems={ dropdownItems } dropdownClassOverride={ 'navbar-header' } dropdownTitleClassOverride={ "underline navbar-header" }>Others using this server</Dropdown>
        </header>
    );
}

export default Navbar
