
import React, { forwardRef, lazy, Suspense, useState } from 'react';

import FavoriteStarToggleButton from 'components/FavoriteStarToggleButton';
// TODO: double check necessity
import AlbumList from './AlbumList';
import './album-card.css';
import { loadState, saveState } from 'utils/helpers/local-storage';

const MusicServicesBar = lazy(
  () => import(/* webpackPrefetch: true, webpackChunkName: 'music-service-bar' */ './MusicServicesBar')
);

const AlbumCard = forwardRef(({
  id,
  color,
  fabColor,
  artworkUrl,
  albumName,
  artistName
}, ref) => {
  const { favorites: initialFavorites = [] } = loadState() || {};
  const [favorites, setFavorites] = useState(initialFavorites);
  const addToFavoritesHandler = id => () => {
    setFavorites(prevFavorites => {
      const nextFavorites = prevFavorites.includes(id)
        ? prevFavorites
        : [
          ...prevFavorites,
          id
        ];

      saveState({favorites: nextFavorites});

      return nextFavorites;
    });
  };
  
  const removeFromFavoritesHandler = id => () => {
    setFavorites(prevFavorites => {
      const nextFavorites = prevFavorites.filter(prevFavorite => prevFavorite !== id);

      saveState({favorites: nextFavorites});

      return nextFavorites;
    });
  };

  return (
    <div
      ref={ref}
      className={`album-card ${color}-300`}>
      <div className='container'>
        <div
          style={{backgroundImage: `url("${artworkUrl}")`}}
          className='album-art' />
        <div className='album-details'>
          <FavoriteStarToggleButton
            selected={favorites.includes(id)}
            addToFavorites={addToFavoritesHandler(id)}
            removeFromFavorites={removeFromFavoritesHandler(id)}
            className='favorite-star'
            withHoverEffect />
          <div className='album-text'>
            <span className='album-name'>{albumName}</span>
            <span className='artist-name'>{artistName}</span>
          </div>
          <Suspense fallback='Loading...'>
            <MusicServicesBar
              albumName={albumName}
              artistName={artistName}
              color={color}
              fabColor={fabColor} />
          </Suspense>
        </div>
      </div>
      <AlbumList />
    </div>
  );
});

export default AlbumCard;
