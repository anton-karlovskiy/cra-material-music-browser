
import React from 'react';

import ProductLogoTitle from './ProductLogoTitle';
import OptionList from './OptionList';
import SearchIconButton from 'components/UI/IconButtons/SearchIconButton';
import './header.css';

const Header = () => {
  return (
    <header className='top-app-bar'>
      <div className='top-app-bar-inside'>
        <ProductLogoTitle />
        <OptionList className='top-app-bar__options-section' />
        <SearchIconButton />
      </div>
    </header>
  );
};

export default Header;
