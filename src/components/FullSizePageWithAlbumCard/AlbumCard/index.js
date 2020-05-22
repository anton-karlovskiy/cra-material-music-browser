
import React, { forwardRef, lazy, Suspense } from 'react';

import FavoriteStarIconButton from 'components/UI/IconButtons/FavoriteStarIconButton';
// TODO: double check necessity
import AlbumList from './AlbumList';
import './album-card.css';

const MusicServicesBar = lazy(
  () => import(/* webpackPrefetch: true, webpackChunkName: 'music-service-bar' */ './MusicServicesBar')
);

const AlbumCard = forwardRef(({
  color,
  fabColor,
  artworkUrl,
  albumName,
  artistName
}, ref) => (
  <div
    ref={ref}
    className={`album-card ${color}-300`}>
    <div className='container'>
      <div
        style={{backgroundImage: `url("${artworkUrl}")`}}
        className='album-art' />
      <div className='album-details'>
        <FavoriteStarIconButton
          className='favorite-star'
          withHoverEffect />
        <div className='album-text'>
          <span className='album-name'>{albumName}</span>
          <span className='artist-name'>{artistName}</span>
        </div>
        <Suspense fallback='Loading...'>
          <MusicServicesBar
            albumName={albumName}
            color={color}
            fabColor={fabColor} />
        </Suspense>
      </div>
    </div>
    <AlbumList />
  </div>
));

export default AlbumCard;
