
import React, { useEffect, useState } from 'react';

import Header from 'components/Header';
import AnimatedAlbumGridSet from 'containers/AnimatedAlbumGridSet';
import './App.css';

// TODO: dig into more
const PROXY_URL = 'https://cors-anywhere.herokuapp.com';

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
