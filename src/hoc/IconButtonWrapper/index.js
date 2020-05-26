
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
  loadingSpinnerWidth,
  loadingSpinnerHeight,
  ...rest
}) => (
  <button
    {...rest}
    disabled={disabled || loading}
    id='icon-button'
    aria-label='icon-button'
    className={`${withHoverEffect ? 'svg-icon-container' : 'svg-icon-container__no-hover-effect'} ${className}`}>
    {loading ? (
      <Suspense fallback=''>
        <LoadingSpinner
          width={loadingSpinnerWidth}
          height={loadingSpinnerHeight}
          borderWidth={.4}
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
