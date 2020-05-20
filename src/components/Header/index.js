
import React from 'react';

import ProductLogoTitle from './ProductLogoTitle';
import AppleMusicFeedOptions from './AppleMusicFeedOptions';
import SearchIconButton from 'components/UI/IconButtons/SearchIconButton';
import './header.css';

const Header = ({
  inputs,
  inputChange,
  onSubmit
}) => (
  <header className='top-app-bar'>
    <form
      onSubmit={onSubmit}
      className='top-app-bar-inside'>
      <ProductLogoTitle />
      <AppleMusicFeedOptions
        inputs={inputs}
        inputChange={inputChange}
        className='top-app-bar__options-section' />
      <SearchIconButton type='submit' />
    </form>
  </header>
);

export default Header;
