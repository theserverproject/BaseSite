import React from 'react';
import './Panel.css'

const Panel = (props) => {
    let panelClass = props.classOverride ? props.classOverride + ' default-panel' : 'default-panel';

    return (
        <div className={ panelClass }>
           { props.children }
        </div>
    );
}

export default Panel
