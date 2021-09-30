import React, { useState } from 'react';
import { Card } from '../';

import './flip_card.css';

function FlipCard(props) {

    const {className, cardFrontFace, cardBackFace,...otherProps} = props

    const [flipped, setFlipped] = useState(false);
    const topClassName = flipped ? "flipped-card" : "unflipped-card";
    
    return (
        <>
            <Card className={`${topClassName} ${className}`} onClick={() => setFlipped(!flipped)} {...otherProps}>
                <div className="flip-card-front">
                    {cardFrontFace}
                </div>
                <div className="flip-card-back">
                    {cardBackFace}
                </div>
            </Card>
        </>
    )
}

export default FlipCard;