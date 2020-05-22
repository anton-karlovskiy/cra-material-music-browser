
import React from 'react';

import LogoReact from 'components/UI/LogoRect';
import './service-search-link.css';

const ServiceSearchLink = ({
  href,
  width,
  height,
  logoImagePath,
  title
}) => (
  <a
    target='_blank'
    rel='noopener noreferrer'
    href={href}
    className='service-search-link'>
    <LogoReact
      width={width}
      height={height}
      logoImagePath={logoImagePath} />
    <p className='title'>{title}</p>
  </a>
);

export default ServiceSearchLink;
