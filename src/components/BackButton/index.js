
import React from 'react';

import BackspaceIconButton from 'components/UI/IconButtons/BackspaceIconButton';
import './back-button.css';

const BackButton = props => (
  <BackspaceIconButton
    {...props}
    width={28}
    height={28}
    className='back-button' />
);

export default BackButton;
