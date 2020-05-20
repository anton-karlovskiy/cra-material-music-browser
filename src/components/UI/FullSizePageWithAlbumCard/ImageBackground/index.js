
import React, { forwardRef } from 'react';

import './image-background.css';

const ImageBackground = forwardRef(({ url }, ref) => (
  <div
    ref={ref}
    style={{backgroundImage: `url("${url}")`}}
    className='image-background fade' />
));

export default ImageBackground;
