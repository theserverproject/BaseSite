import React from 'react'
import './Image.css'

const Image = (props) => {

    let fallbackText = props.defaultText ? props.defaultText : "No Image Found";
    let fallbackTextClass = props.textClassOverride ? props.textClassOverride + ' text-fallback' : 'text-fallback';

    let imageAltText = props.altText ? props.altText : "";
    let imageClass = props.imageClassOverride ? props.imageClassOverride + ' image-image' : 'image-image';

    let classOverride = props.classOverride ? props.classOverride + ' image' : 'image';

    return (
        <div className={ classOverride }>
            {   props.image ? (
                    <img src={ props.image } alt={ imageAltText } className={ imageClass  }/>
                ) : (
                     <p className={ fallbackTextClass }> { fallbackText } </p>
                )
            }
        </div>
    );
}

export default Image
