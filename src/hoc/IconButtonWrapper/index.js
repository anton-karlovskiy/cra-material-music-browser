
import React from 'react';

import './icon-button-wrapper.css';

const IconButtonWrapper = ({ children, ...rest }) => {
  return (
    <button
      {...rest}
      id='icon-button'
      aria-label='icon-button'
      className='svg-icon-container svg-icon-container__button-fix'>
      {children}
    </button>
  );
};

export default IconButtonWrapper;
