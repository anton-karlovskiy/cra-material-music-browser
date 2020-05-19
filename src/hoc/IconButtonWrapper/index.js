
import React from 'react';

import './icon-button-wrapper.css';

const IconButtonWrapper = ({
  className,
  children,
  ...rest
}) => (
  <button
    {...rest}
    id='icon-button'
    aria-label='icon-button'
    className={`svg-icon-container svg-icon-container__button-fix ${className}`}>
    {children}
  </button>
);

export default IconButtonWrapper;
