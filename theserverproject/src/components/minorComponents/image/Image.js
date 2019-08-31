import React from 'react'
import './Image.css'

const Image = (props) => {

    let fallbackText = props.defaultText ? props.defaultText : "No Image Found";
    let fallbackTextClass = props.textClassOverride + ' text-fallback';
    let imageAltText = props.altText ? props.altText : "";

    return (
        <React.Fragment>
            {   props.imageSrc ? (
                    <img src={ props.imageSrc } alt={ imageAltText }/>
                ) : (
                     <p class={ fallbackTextClass }> { fallbackText } </p>
                )
            }
        </React.Fragment>
    );
}

export default Image
