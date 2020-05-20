
import React, { forwardRef } from 'react';

import './color-background.css';

const ColorBackground = forwardRef(({ color }, ref) => (
  <div
    ref={ref}
    className={`color-background ${color}-100`} />
));

export default ColorBackground;
