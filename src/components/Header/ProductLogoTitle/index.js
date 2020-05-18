
import React from 'react';

import { APP_NAME } from 'utils/constants';
import logo from 'assets/logo/music.svg';
import './product-logo-title.css';

const ProductLogoTitle = () => (
  <div className='product-logo-title'>
    <a
      href='/'
      className='product-link'
      data-label='Project Logo (header)'>
      <img
        src={logo}
        className='product-logo'
        alt='Metrics Viz' />
    </a>
    <a
      href='/'
      className='product-title'
      data-label='Upper Header'>
      {APP_NAME}
    </a>
  </div>
);

export default ProductLogoTitle;
