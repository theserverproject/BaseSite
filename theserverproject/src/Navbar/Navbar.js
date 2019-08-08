import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div id="navbar">
            <p class="navbar-logo">Logo</p>
            <p class="navbar-header">Projects</p>
            <p class="navbar-header">Resume</p>
            <p class="navbar-header">GitHub</p>
            <p class="navbar-header">Others using this server</p>
        </div>
    );
}

export default Navbar