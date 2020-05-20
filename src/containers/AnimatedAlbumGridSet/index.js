
import React, { useEffect, useState, useMemo, useRef } from 'react';

import AnimatedAlbumGrid from 'components/UI/AnimatedAlbumGrid';
import FullSizePageWithAlbumCard from 'components/UI/FullSizePageWithAlbumCard';
import { splitIntoSubArray } from 'utils/helpers';
import { COUNT_OF_TILES_ON_VIEWPORT } from 'utils/constants';
import {
  runRippleAnimation,
  runHeroAnimation,
  runFadeOutAnimation,
  runTransformAnimation,
  checkAnimationsRunning
} from 'utils/animations';

const DEFAULT_OPENED_ALBUM = {
  id: '',
  color: '',
  fabColor: '',
  artworkUrl: '',
  albumName: '',
  artistName: '',
  event: null
};

const AnimatedAlbumGridSet = ({ albumTiles }) => {
  const [openedAlbum, setOpenedAlbum] = useState(DEFAULT_OPENED_ALBUM);
  const colorBackgroundRef = useRef(null);
  const imageBackgroundRef = useRef(null);
  const albumCardRef = useRef(null);

  useEffect(() => {
    if (openedAlbum.event) {
      runRippleAnimation({
        gesture: {
          x: openedAlbum.event.x || openedAlbum.event.pageX,
          y: openedAlbum.event.y || openedAlbum.event.pageY
        },
        from: openedAlbum.event?.target,
        to: colorBackgroundRef?.current
      });

      runHeroAnimation({
        delay: 150,
        from: openedAlbum.event?.target,
        to: albumCardRef?.current
      });
    }
  }, [openedAlbum.event]);

  const openAlbumHandler = ({
    id,
    color,
    fabColor,
    artworkUrl,
    albumName,
    artistName
  }) => event => {
    if (id !== openedAlbum.id) {
      const boundingClientRect = event.target.getBoundingClientRect();
      setOpenedAlbum({
        id,
        color,
        fabColor,
        artworkUrl,
        albumName,
        artistName,
        // TODO: tweak for unrendered from element
        event: {
          ...event,
          target: {
            ...event.target,
            getBoundingClientRect: () => boundingClientRect
          }
        }
      });
    }
  };

  const closeAlbumHandler = () => {
    if (checkAnimationsRunning()) return;
    const callback = () => {
      setOpenedAlbum(DEFAULT_OPENED_ALBUM);
    };

    runFadeOutAnimation({
      node: imageBackgroundRef?.current || colorBackgroundRef?.current,
      callback
    });

    runTransformAnimation({
      transformFrom: 'none',
      transformTo: 'translate(0px,-200vh) scale(0.9,1)',
      node: albumCardRef?.current,
      callback
    });
  };
  const albumTilesSet = useMemo(() => splitIntoSubArray(albumTiles, COUNT_OF_TILES_ON_VIEWPORT), [albumTiles]);
  const fullPageOpened = openedAlbum.id !== '';

  return (
    <>
      <div style={{display: fullPageOpened ? 'block' : 'none'}}>
        <FullSizePageWithAlbumCard
          colorBackgroundRef={colorBackgroundRef}
          imageBackgroundRef={imageBackgroundRef}
          albumCardRef={albumCardRef}
          closeAlbum={closeAlbumHandler}
          openedAlbum={openedAlbum} />
      </div>
      <div style={{display: fullPageOpened ? 'none' : 'block'}}>
        {albumTilesSet.map((albumTiles, index) => (
          <AnimatedAlbumGrid
            key={index}
            openAlbum={openAlbumHandler}
            albumTiles={albumTiles} />
        ))}
      </div>
    </>
  );
};

export default AnimatedAlbumGridSet;
