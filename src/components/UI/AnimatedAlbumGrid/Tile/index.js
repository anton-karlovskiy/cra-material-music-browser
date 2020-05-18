
// ray test touch <
import React from 'react';

import './tile.css';

const Tile = ({
  color,
  artworkUrl,
  albumName,
  artistName,
  ...rest
}) => (
  <div
    {...rest}
    className={`tile ${color}-300`}
    style={{backgroundImage: `url("${artworkUrl}")`}}>
    <div className={`tile-footer ${color}-300`}>
      <div className='album'>{albumName}</div>
      <div className='artist'>{artistName}</div>
    </div>
  </div>
);

export default Tile;
// ray test touch >
