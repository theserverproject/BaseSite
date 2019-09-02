import React from 'react'
import './Image.css'

const Image = (props) => {

    let fallbackText = props.defaultText ? props.defaultText : "No Image Found";
    let fallbackTextClass = props.textClassOverride ? props.textClassOverride + ' text-fallback' : 'text-fallback';

    let imageAltText = props.altText ? props.altText : "";
    let imageClass = props.imageClassOverride ? props.imageClassOverride + ' image' : 'image';

    return (
        <React.Fragment>
            {   props.image ? (
                    <img src={ props.image } alt={ imageAltText } class={ imageClass  }/>
                ) : (
                     <p class={ fallbackTextClass }> { fallbackText } </p>
                )
            }
        </React.Fragment>
    );
}

export default Image
