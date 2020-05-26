
import React from 'react';

import './loading-spinner.css';

const LoadingSpinner = ({
  width = 24,
  height = 24,
  margin = 60,
  borderWidth = 1.1
}) => (
  <div
    style={{
      width: `${width}px`,
      height: `${height}px`,
      margin: `${margin}px auto`,
      borderWidth: `${borderWidth}em`
    }}
    className='loader'>
    Loading...
  </div>
);

export default LoadingSpinner
