
import React, { useEffect, useState, useMemo, useRef } from 'react';

import AnimatedAlbumGrid from 'components/AnimatedAlbumGrid';
import FullSizePageWithAlbumCard from 'components/FullSizePageWithAlbumCard';
import { splitIntoSubArray } from 'utils/helpers';
import { COUNT_OF_TILES_ON_VIEWPORT } from 'utils/constants';
import {
  runRippleAnimation,
  runHeroAnimation,
  runFadeOutAnimation,
  runTransformAnimation,
  checkAnimationsRunning
} from 'utils/animations';
import './animated-album-grid-set.css';
import useMedia from 'utils/hooks/use-media';

const DEFAULT_OPENED_ALBUM = {
  id: '',
  albumName: '',
  artistName: '',
  artworkUrl: '',
  color: '',
  fabColor: '',
  event: null
};

let cachedScrollY = 0;

const AnimatedAlbumGridSet = ({
  albumTiles,
  checkFavorite,
  addToFavorites,
  removeFromFavorites
}) => {
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
        to: colorBackgroundRef?.current,
        scrollY: cachedScrollY
      });

      runHeroAnimation({
        delay: 150,
        from: openedAlbum.event?.target,
        to: albumCardRef?.current
      });
    }
  }, [openedAlbum.event]);

  useEffect(() => {
    if (openedAlbum.id === '') {
      // TODO: smooth scrolling https://css-tricks.com/snippets/jquery/smooth-scrolling/
      window.scrollTo(0, cachedScrollY);
    }
  }, [openedAlbum.id]);

  // MEMO: 640px must match CSS value
  const isSmallViewport = useMedia('(max-width: 640px)');

  const openAlbumHandler = ({
    id,
    color,
    fabColor,
    artworkUrl,
    albumName,
    artistName
  }) => event => {
    if (id === openedAlbum.id) return;

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

    cachedScrollY = window.scrollY;
    window.scrollTo(0, 0);
  };

  const closeAlbumHandler = () => {
    if (checkAnimationsRunning()) return;

    const callback = () => {
      setOpenedAlbum(DEFAULT_OPENED_ALBUM);
    };

    runFadeOutAnimation({node: imageBackgroundRef?.current || colorBackgroundRef?.current});

    runTransformAnimation({
      transformFrom: 'none',
      transformTo: 'translate(0px,-200vh) scale(0.9,1)',
      node: albumCardRef?.current,
      callback
    });
  };

  const albumTilesSet = useMemo(() => splitIntoSubArray(albumTiles, isSmallViewport ? COUNT_OF_TILES_ON_VIEWPORT / 2 : COUNT_OF_TILES_ON_VIEWPORT), [albumTiles, isSmallViewport]);
  const fullPageOpened = openedAlbum.id !== '';

  return (
    <>
      <div
        className='neon-animated-pages hide-overflow'
        style={{display: fullPageOpened ? 'block' : 'none'}}>
        <FullSizePageWithAlbumCard
          colorBackgroundRef={colorBackgroundRef}
          imageBackgroundRef={imageBackgroundRef}
          albumCardRef={albumCardRef}
          closeAlbum={closeAlbumHandler}
          checkFavorite={checkFavorite}
          addToFavorites={addToFavorites}
          removeFromFavorites={removeFromFavorites}
          openedAlbum={openedAlbum} />
      </div>
      <div style={{display: fullPageOpened ? 'none' : 'block'}}>
        {albumTilesSet.map((albumTiles, index) => (
          <AnimatedAlbumGrid
            className='neon-animated-pages'
            key={index}
            openAlbum={openAlbumHandler}
            checkFavorite={checkFavorite}
            addToFavorites={addToFavorites}
            removeFromFavorites={removeFromFavorites}
            albumTiles={albumTiles} />
        ))}
      </div>
    </>
  );
};

export default AnimatedAlbumGridSet;
