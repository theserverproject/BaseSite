import React, { useLayoutEffect, useState } from "react";

import './fader.css';

function Fader(props) {
    
    const [hidden, setHidden] = useState(true);
    const [fadingOut, setFadingOut] = useState(false);
    
    const classNames = [];
    classNames.push(hidden ? "invisible-fader" : "fader");
    classNames.push(fadingOut ? "fadeout-animation" : "fadein-animation")

    const propsClassName = props.className ? props.className : ""

    useLayoutEffect(() => {
        if (!props.visible && !hidden) {
            setFadingOut(true);
        } else if (props.visible && hidden) {
            setHidden(false);
        }
    }, [fadingOut, props.visible, hidden]);

    return !hidden && (
        <div
            className={`${classNames.join(" ")} ${propsClassName}`}
            style={props.style}
            onAnimationEnd={() => {
                if (!props.visible) {
                    setHidden(true);
                    setFadingOut(false);
                }
            }}
        >
            {props.children}
        </div>
    );
}

export default Fader;