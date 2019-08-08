import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div id="navbar">
            <a class="navbar-logo">Logo</a>
            <a class="navbar-header">Projects</a>
            <a class="navbar-header">Resume</a>
            <a class="navbar-header">GitHub</a>
            <a class="navbar-header">Others using this server</a>
        </div>
    );
}

export default Navbar