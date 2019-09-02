import React from 'react';
import './Navbar.css';
import Image from '../../../../minorComponents/image/Image.js';

const Navbar = () => {
    return (
        <header id="navbar">
            <Image image="logo.png" defaultText="Logo not found"/>
            <p class="navbar-header">Projects</p>
            <p class="navbar-header">Resume</p>
            <p class="navbar-header">GitHub</p>
            <p class="navbar-header">Others using this server</p>
        </header>
    );
}

export default Navbar
