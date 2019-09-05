import React from 'react'
import './Footer.css'

const Footer = (props) => {
    return (
        <footer id="footer">
            <div className="footer-left-pane">
                <p> className="footer-text">Something should live in the left pane...</p>
            </div>
            <div className="footer-center-pane">
                <p className="footer-text">This is a footer. What do people usually put here?</p>
                <p className="footer-text">If you see anything buggy here, email it to: Ross-Alexandra@outlook.com</p>
            </div>
            <div className="footer-right-pane">
                <p className="footer-text">Socials usually go here... don't they?</p>
            </div>
        </footer>
    );
}

export default Footer;
