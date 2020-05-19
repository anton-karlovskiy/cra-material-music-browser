
import React from 'react';

import './color-background.css';

const ColorBackground = ({
  colorBackgroundRef,
  color
}) => (
  <div
    ref={colorBackgroundRef}
    className={`color-background ${color}-100`} />
);

export default ColorBackground;
