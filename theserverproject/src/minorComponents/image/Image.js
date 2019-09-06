import React from 'react'
import './Image.css'

const Image = (props) => {

    // Fallback text classes
    let fallbackText = props.defaultText ? props.defaultText : "No Image Found";
    let fallbackTextClass = props.textClassOverride ? props.textClassOverride + ' text-fallback' : 'text-fallback';

    // Image classes
    let imageAltText = props.altText ? props.altText : "";
    let imageClass = props.imageClassOverride ? props.imageClassOverride + ' image-image' : 'image-image';

    if (!props.image) {
        return <p className={ fallbackTextClass}>{fallbackText}</p>;

    }

    let imgHtml = <img src={ props.image } alt={ imageAltText } className={ imageClass }/>;

    if (props.imageLink) {

        // When target is set to _blank then the
        // link will open in a new page. If its
        // set to '', then it will open in the
        // same page.
        // rel noopner noreferrer is needed to stop
        // a security vulnerability repoted by React.
        let target = '';
        let rel = '';
        if (props.linkNewTab) {
            target = '_blank';
            rel = "noopener noreferrer"
        }

        return <a href={ props.imageLink } target={ target } rel={ rel }>{imgHtml}</a>;
    }

    return imgHtml;
}

export default Image
