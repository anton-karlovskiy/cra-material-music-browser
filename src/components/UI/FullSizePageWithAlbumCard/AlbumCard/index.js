
import React from 'react';

import FavoriteStarIconButton from 'components/UI/IconButtons/FavoriteStarIconButton';
import MusicControlsBar from './MusicControlsBar';
import AlbumList from './AlbumList';
import './album-card.css';

const AlbumCard = ({
  color,
  fabColor,
  artworkUrl,
  albumName,
  artistName
}) => (
  <div className={`album-card ${color}-300`}>
    <div className='container'>
      <div
        style={{backgroundImage: `url("${artworkUrl}")`}}
        className='album-art' />
      <div className='album-details'>
        <FavoriteStarIconButton className='favorite-star' />
        <div className='album-text'>
          <span className='album-name'>{albumName}</span>
          <span className='artist-name'>{artistName}</span>
        </div>
        <MusicControlsBar
          color={color}
          fabColor={fabColor} />
      </div>
    </div>
    <AlbumList />
  </div>
);

export default AlbumCard;
