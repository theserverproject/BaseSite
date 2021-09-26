import React from "react";

import './card.css';

function Card(props) {
    const {className, children, ...remaningProps} = props;
    const containerClassName = ["card", ...(className ? className.split(" ") : [])];

    return (
        <div className={containerClassName.join(" ")} {...remaningProps}>
            <div className="card-body">
                {children}
            </div>
        </div>
    );
}

export default Card;