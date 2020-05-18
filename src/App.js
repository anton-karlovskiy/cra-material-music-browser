
import React, { useEffect, useState } from 'react';

import Header from 'components/Header';
import AnimatedAlbumGridSet from 'components/AnimatedAlbumGridSet';
import './App.css';

// TODO: dig into more
const PROXY_URL = 'https://cors-anywhere.herokuapp.com';

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

  return (
    <>
      <Header />
      <main>
        {albumTiles.length > 0 && (
          <AnimatedAlbumGridSet albumTiles={albumTiles} />
        )}
      </main>
    </>
  );
};

export default App;
