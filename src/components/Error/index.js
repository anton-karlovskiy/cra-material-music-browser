
import React from 'react';

import './error.css';

const Error = ({ className, error = {} }) => (
  <>
    {error.message && <p className={`error ${className}`}>{error.message}</p>}
  </>
);

export default Error;
