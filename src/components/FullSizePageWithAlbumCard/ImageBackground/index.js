
import React, { forwardRef } from 'react';

import './image-background.css';
import { getNewUrlWithNewArtworkImageRes } from 'utils/helpers';

const ImageBackground = forwardRef(({ url }, ref) => (
  <div
    ref={ref}
    style={{backgroundImage: `url("${getNewUrlWithNewArtworkImageRes(url, 800)}")`}}
    className='image-background fade' />
));

export default ImageBackground;
