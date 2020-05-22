
import React, { Suspense, lazy } from 'react';

import './icon-button-wrapper.css';

const LoadingSpinner = lazy(
  () => import(/* webpackPrefetch: true, webpackChunkName: 'loading-spinner' */ 'components/UI/LoadingSpinner')
);

const IconButtonWrapper = ({
  className,
  children,
  loading,
  disabled,
  withHoverEffect,
  ...rest
}) => (
  <button
    {...rest}
    disabled={disabled || loading}
    id='icon-button'
    aria-label='icon-button'
    className={`${withHoverEffect ? 'svg-icon-container' : 'svg-icon-container__no-hover-effect'} svg-icon-container__button-fix ${className}`}>
    {loading ? (
      <Suspense fallback=''>
        <LoadingSpinner
          width={2}
          height={2}
          borderWidth={.3}
          margin={0} />
      </Suspense>
    ) : (
      <>
        {children}
      </>
    )}
  </button>
);

export default IconButtonWrapper;
