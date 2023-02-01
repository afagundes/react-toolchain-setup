import React from 'react';
import logo from '../assets/webpack-logo.png';

function Image() {
    return (
        <div>
            <p>This is an image handled by webpack:</p>
            <img src={logo} alt='Image exported by webpack' />
        </div>
    );
}

export default Image;
