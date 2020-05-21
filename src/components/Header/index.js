
import React, { memo } from 'react';

import ProductLogoTitle from './ProductLogoTitle';
import AppleMusicFeedSettings from './AppleMusicFeedSettings';
import SearchIconButton from 'components/UI/IconButtons/SearchIconButton';
import './header.css';

const Header = ({
  loading,
  inputs,
  inputChange,
  onSubmit
}) => (
  <header className='top-app-bar'>
    <form
      onSubmit={onSubmit}
      className='top-app-bar-inside'>
      <ProductLogoTitle />
      <AppleMusicFeedSettings
        loading={loading}
        inputs={inputs}
        inputChange={inputChange}
        className='top-app-bar__options-section' />
      <SearchIconButton
        type='submit'
        loading={loading} />
    </form>
  </header>
);

export default memo(Header);
