
import React from 'react';

import ProductLogoTitle from './ProductLogoTitle';
import AppleMusicFeedOptions from './AppleMusicFeedOptions';
import SearchIconButton from 'components/UI/IconButtons/SearchIconButton';
import './header.css';

// ray test touch <
const Header = () => {

  return (
    <header className='top-app-bar'>
      <form className='top-app-bar-inside'>
        <ProductLogoTitle />
        <AppleMusicFeedOptions className='top-app-bar__options-section' />
        <SearchIconButton />
      </form>
    </header>
  );
};
// ray test touch >

export default Header;
