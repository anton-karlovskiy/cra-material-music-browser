
import React from 'react';

import './image-background.css';

const ImageBackground = ({ url }) => (
  <div
    style={{backgroundImage: `url("${url}")`}}
    className='image-background fade' />
);

export default ImageBackground;
