
import React from 'react';

import './album-tile.css';

const AlbumTile = ({
  color,
  artworkUrl,
  albumName,
  artistName,
  ...rest
}) => (
  <div
    {...rest}
    className={`album-tile ${color}-300`}
    style={{backgroundImage: `url("${artworkUrl}")`}}>
    <div className={`album-tile-footer ${color}-300`}>
      <div className='album'>{albumName}</div>
      <div className='artist'>{artistName}</div>
    </div>
  </div>
);

export default AlbumTile;
