
import React from 'react';

import './error-annotation.css';

const ErrorAnnotation = ({
  className,
  error = {}
}) => (
  <>
    {error.message && <p className={`error-annotation ${className}`}>{error.message}</p>}
  </>
);

export default ErrorAnnotation;
