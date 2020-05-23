
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

const DEFAULT_OPENED_ALBUM = {
  id: '',
  color: '',
  fabColor: '',
  artworkUrl: '',
  albumName: '',
  artistName: '',
  event: null
};

let scrollY = 0;

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

  useEffect(() => {
    if (openedAlbum.id === '') {
      // TODO: smooth scrolling https://css-tricks.com/snippets/jquery/smooth-scrolling/
      window.scrollTo(0, scrollY);
    }
  }, [openedAlbum.id]);

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

    scrollY = window.scrollY;
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
  const albumTilesSet = useMemo(() => splitIntoSubArray(albumTiles, COUNT_OF_TILES_ON_VIEWPORT), [albumTiles]);
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
          openedAlbum={openedAlbum} />
      </div>
      <div
        className='neon-animated-pages'
        style={{display: fullPageOpened ? 'none' : 'block'}}>
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
