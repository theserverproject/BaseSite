import React from 'react';
import { Card } from '../';

import './flip_card.css';

function FlipCard(props) {
    return (
        <Card>
            {props.children}
        </Card>
    )
}

export default FlipCard;