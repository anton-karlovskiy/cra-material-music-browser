
import React, { memo } from 'react';

import ProductLogoTitle from './ProductLogoTitle';
import AppleMusicFeedSettings from './AppleMusicFeedSettings';
import FavoritesButton from './FavoritesButton';
import SearchIconButton from 'components/UI/IconButtons/SearchIconButton';
import './header.css';

const Header = ({
  loading,
  inputs,
  inputChange,
  onSubmit,
  favoritesOpen,
  toggleFavorites
}) => (
  <header className='top-app-bar'>
    {/* TODO: validation might be required */}
    <form
      onSubmit={onSubmit}
      className='top-app-bar-inside'>
      <ProductLogoTitle />
      <FavoritesButton
        type='button'
        favoritesOpen={favoritesOpen}
        onClick={toggleFavorites} />
      <AppleMusicFeedSettings
        loading={loading}
        inputs={inputs}
        inputChange={inputChange}
        className='top-app-bar__options-section' />
      <SearchIconButton
        type='submit'
        withHoverEffect
        loading={loading} />
    </form>
  </header>
);

export default memo(Header);
