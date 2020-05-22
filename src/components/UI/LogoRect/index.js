
import React from 'react';

import './logo-rect.css';

const LogoRect = ({
  width = 24,
  height = 24,
  logoImagePath = '',
  ...rest
}) => (
  <div
    {...rest}
    style={{
      width: `${width}px`,
      height: `${height}px`,
      backgroundImage: `url("${logoImagePath}")`
    }}
    className='logo-rect' />
);

export default LogoRect;
