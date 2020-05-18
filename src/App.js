
import React, { useEffect, useState } from 'react';

import Header from 'components/Header';
import AnimatedAlbumGridSet from 'components/AnimatedAlbumGridSet';
import './App.css';

// TODO: dig into more
const PROXY_URL = 'https://cors-anywhere.herokuapp.com';

const DEFAULT_ALBUM = {
  id: '',
  color: '',
  artworkUrl: '',
  albumName: '',
  artistName: ''
};

const App = () => {
  const [albumTiles, setAlbumTiles] = useState([]);
  useEffect(() => {
    (async () => {
      try {
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
  const [openedAlbum, setOpenedAlbum] = useState(DEFAULT_ALBUM);

  const openAlbumHandler = ({
    id,
    color,
    artworkUrl,
    albumName,
    artistName
  }) => event => {
    if (id !== openedAlbum.id) {
      // ray test touch <
      console.log('ray : ***** [openAlbumHandler] id, event => ', id, event);
      // ray test touch >
      setOpenedAlbum({
        id,
        color,
        artworkUrl,
        albumName,
        artistName
      });
    }
  };

  const closeAlbumHandler = () => {
    setOpenedAlbum(DEFAULT_ALBUM);
  };

  return (
    <>
      <Header />
      <main>
        {albumTiles.length > 0 && (
          <AnimatedAlbumGridSet
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
