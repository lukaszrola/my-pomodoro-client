import React from 'react';

const questionLabel = (props) => {
    return( 
    <div className="p-3 mb-2 bg-info text-white">
        <h1><strong>{props.children}</strong></h1>
    </div>);
}

export default questionLabel;