import React from 'react'
import './Footer.css'

// Import minor componenets needed.
import Image from '../../../../basicComponents/image/Image.js'

const Footer = (props) => {
    return (
        <footer id="footer">
            <div className="footer-left-pane">
                <p className="footer-text">The Server Project by Ross Alexandra © 2019</p>
            </div>
            <div className="footer-center-pane">
                <p className="footer-text">Everything here is a work in progress, as such bugs may exist. Should you find a</p>
                <p className="footer-text">bug, please email relavant information to: Ross-Alexandra@outlook.com</p>
            </div>
            <div className="footer-right-pane">
                <Image imageClassOverride={ "gh-logo" } image="ghmark.png" imageLink="https://github.com/theserverproject/BaseSite" linkNewTab={ true } fallbackText="Github"/>
            </div>
        </footer>
    );
}

export default Footer;
