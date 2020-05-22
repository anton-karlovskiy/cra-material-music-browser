
import React from 'react';

import LogoReact from 'components/UI/LogoRect';
import './service-search-link.css';

const ServiceSearchLink = ({
  width,
  height,
  logoImagePath,
  title
}) => (
  <div className='service-search-link'>
    <LogoReact
      width={width}
      height={height}
      logoImagePath={logoImagePath} />
    <p className='title'>{title}</p>
  </div>
);

export default ServiceSearchLink;
