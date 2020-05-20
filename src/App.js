
import React, { useEffect, useState, useRef } from 'react';

import Header from 'components/Header';
import AnimatedAlbumGridSet from 'components/AnimatedAlbumGridSet';
import './App.css';
import {
  runRippleAnimation,
  runHeroAnimation,
  runFadeOutAnimation,
  runTransformAnimation,
  checkAnimationsRunning
} from 'utils/animations';

// TODO: dig into more
const PROXY_URL = 'https://cors-anywhere.herokuapp.com';

const DEFAULT_OPENED_ALBUM = {
  id: '',
  color: '',
  fabColor: '',
  artworkUrl: '',
  albumName: '',
  artistName: '',
  event: null
};

const App = () => {
  useEffect(() => {
    (async () => {
      try {
        // TODO: dropdown options based URL
        const response = await fetch(`${PROXY_URL}/https://rss.itunes.apple.com/api/v1/us/apple-music/coming-soon/all/24/explicit.json`);
        const json = await response.json();
        const albumTiles = json.feed.results.map(result => ({
          id: result.id,
          albumName: result.name,
          artistName: result.artistName,
          artworkUrl: result.artworkUrl100
        }));
        setAlbumTiles(albumTiles);
      } catch (error) {
        console.log('[App] error => ', error);
      }
    })();
  }, []);
  const [albumTiles, setAlbumTiles] = useState([]);
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

  return (
    <>
      <Header />
      <main>
        {albumTiles.length > 0 && (
          <AnimatedAlbumGridSet
            colorBackgroundRef={colorBackgroundRef}
            imageBackgroundRef={imageBackgroundRef}
            albumCardRef={albumCardRef}
            openedAlbum={openedAlbum}
            openAlbum={openAlbumHandler}
            closeAlbum={closeAlbumHandler}
            albumTiles={albumTiles} />
        )}
      </main>
    </>
  );
};

export default App;
