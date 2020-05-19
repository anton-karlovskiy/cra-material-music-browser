
import React, { useMemo } from 'react';

import AnimatedAlbumGrid from 'components/UI/AnimatedAlbumGrid';
import FullSizePageWithAlbumCard from 'components/UI/FullSizePageWithAlbumCard';
import { splitIntoSubArray } from 'utils/helpers';
import { COUNT_OF_TILES_ON_VIEWPORT } from 'utils/constants';

const AnimatedAlbumGridSet = ({
  albumTiles,
  openedAlbum,
  openAlbum,
  closeAlbum,
  colorBackgroundRef,
  albumCardRef
}) => {
  const albumTilesSet = useMemo(() => splitIntoSubArray(albumTiles, COUNT_OF_TILES_ON_VIEWPORT), [albumTiles]);

  return (
    <>
      {openedAlbum.id ? (
        <FullSizePageWithAlbumCard
          colorBackgroundRef={colorBackgroundRef}
          albumCardRef={albumCardRef}
          closeAlbum={closeAlbum}
          openedAlbum={openedAlbum} />
      ) : (
        <>
          {albumTilesSet.map((albumTiles, index) => (
            <AnimatedAlbumGrid
              key={index}
              openAlbum={openAlbum}
              albumTiles={albumTiles} />
          ))}
        </>
      )}
    </>
  );
};

export default AnimatedAlbumGridSet;
