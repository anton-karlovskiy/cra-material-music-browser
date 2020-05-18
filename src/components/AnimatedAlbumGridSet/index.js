
import React, { useMemo } from 'react';

import AnimatedAlbumGrid from 'components/UI/AnimatedAlbumGrid';
import { splitIntoSubArray } from 'utils/helpers';
import { COUNT_OF_TILES_ON_VIEWPORT } from 'utils/constants';


const AnimatedAlbumGridSet = ({ albumTiles }) => {
  const albumTilesSet = useMemo(() => splitIntoSubArray(albumTiles, COUNT_OF_TILES_ON_VIEWPORT), [albumTiles]);

  return (
    <>
      {albumTilesSet.map((albumTiles, index) => (
        <AnimatedAlbumGrid
          key={index}
          albumTiles={albumTiles} />
      ))}
    </>
  );
};

export default AnimatedAlbumGridSet;
