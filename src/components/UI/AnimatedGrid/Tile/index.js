
// ray test touch <
import React from 'react';

import './tile.css';

const Tile = ({
  color,
  profile,
  album,
  artist,
  ...rest
}) => (
  <div
    {...rest}
    className={`tile ${color}-300`}
    style={{backgroundImage: `url("${profile}")`}}>
    <div className={`footer ${color}-300`}>
      <div className='album'>{album}</div>
      <div className='artist'>{artist}</div>
    </div>
  </div>
);

export default Tile;
// ray test touch >
