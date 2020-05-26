
import React from 'react';

import FavoriteStarToggleButton from 'components/FavoriteStarToggleButton';
import './album-tile.css';

const AlbumTile = ({
  id,
  albumName,
  artistName,
  artworkUrl,
  checkFavorite,
  addToFavorites,
  removeFromFavorites,
  color,
  ...rest
}) => (
  <div
    {...rest}
    className={`album-tile ${color}-300`}
    style={{backgroundImage: `url("${artworkUrl}")`}}>
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
    <div className={`album-tile-footer ${color}-300`}>
      <div className='album'>{albumName}</div>
      <div className='artist'>{artistName}</div>
    </div>
  </div>
);

export default AlbumTile;
