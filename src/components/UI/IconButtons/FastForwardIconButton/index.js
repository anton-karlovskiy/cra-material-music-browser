
import React from 'react';

import IconButtonWrapper from 'hoc/IconButtonWrapper';

const FastForwardIconButton = ({
  width,
  height,
  ...rest
}) => (
  <IconButtonWrapper {...rest}>
    <svg
      width={width || '20'}
      height={height || '20'}
      version='1.1'
      id='Capa_1'
      xmlns='http://www.w3.org/2000/svg'
      x='0px'
      y='0px'
      viewBox='0 0 55 55'>
      <polygon points='27,27.5 0,46.487 0,27.845 0,8.513' />
      <polygon points='55,27.5 28,46.5 28,27.5 28,8.5' />
    </svg>
  </IconButtonWrapper>
);

export default FastForwardIconButton;
