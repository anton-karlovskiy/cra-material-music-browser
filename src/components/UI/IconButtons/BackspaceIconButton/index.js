
import React from 'react';

import IconButtonWrapper from 'hoc/IconButtonWrapper';

const BackspaceIconButton = ({
  width,
  height,
  ...rest
}) => (
  <IconButtonWrapper {...rest}>
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width || '24'}
      height={height || '24'}
      viewBox='0 0 24 24'>
      <path d='M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z' />
    </svg>
  </IconButtonWrapper>
);

export default BackspaceIconButton;
