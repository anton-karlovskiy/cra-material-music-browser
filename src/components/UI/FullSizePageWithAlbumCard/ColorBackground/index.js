
import React from 'react';

import './color-background.css';

const ColorBackground = ({ color }) => (
  <div className={`color-background ${color}-100`} />
);

export default ColorBackground;
