import React from 'react';

function TextName({ text, maxLength }) {
    // Check if text is defined before accessing its length
    const isLongText = text && text.length > maxLength;
    const truncatedText = isLongText ? text.slice(0, maxLength) + '...' : text;

    return <span>{truncatedText}</span>;
}

export default TextName;