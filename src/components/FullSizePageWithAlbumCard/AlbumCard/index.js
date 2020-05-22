
import React, { forwardRef } from 'react';

import FavoriteStarIconButton from 'components/UI/IconButtons/FavoriteStarIconButton';
// TODO: lazy loading
// TODO: rename music service bar
import MusicServicesBar from './MusicServicesBar';
import AlbumList from './AlbumList';
import './album-card.css';

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
        <MusicServicesBar
          color={color}
          fabColor={fabColor} />
      </div>
    </div>
    <AlbumList />
  </div>
));

export default AlbumCard;
