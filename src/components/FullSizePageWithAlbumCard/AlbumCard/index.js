
import React, { forwardRef, lazy, Suspense } from 'react';

import FavoriteStarToggleButton from 'components/FavoriteStarToggleButton';
// TODO: double check necessity
import AlbumList from './AlbumList';
import './album-card.css';

const MusicServicesBar = lazy(
  () => import(/* webpackPrefetch: true, webpackChunkName: 'music-service-bar' */ './MusicServicesBar')
);

const AlbumCard = forwardRef(({
  id,
  albumName,
  artistName,
  artworkUrl,
  checkFavorite,
  addToFavorites,
  removeFromFavorites,
  color,
  fabColor
}, ref) => (
  <div
    ref={ref}
    className={`album-card ${color}-300`}>
    <div className='container'>
      <div
        style={{backgroundImage: `url("${artworkUrl}")`}}
        className='album-art' />
      <div className='album-details'>
        <FavoriteStarToggleButton
          selected={checkFavorite(id)}
          addToFavorites={addToFavorites({
            id,
            artworkUrl,
            albumName,
            artistName
          })}
          removeFromFavorites={removeFromFavorites(id)}
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
));

export default AlbumCard;
