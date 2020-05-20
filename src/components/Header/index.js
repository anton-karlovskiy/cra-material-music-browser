
import React from 'react';

import ProductLogoTitle from './ProductLogoTitle';
import AppleMusicFeedOptions from './AppleMusicFeedOptions';
import SearchIconButton from 'components/UI/IconButtons/SearchIconButton';
import './header.css';

const Header = () => {
  return (
    <header className='top-app-bar'>
      <div className='top-app-bar-inside'>
        <ProductLogoTitle />
        <AppleMusicFeedOptions className='top-app-bar__options-section' />
        <SearchIconButton />
      </div>
    </header>
  );
};

export default Header;
