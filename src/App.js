
import React, { useEffect, useState } from 'react';

import Header from 'components/Header';
import AnimatedAlbumGrid from 'components/UI/AnimatedAlbumGrid';
import './App.css';

// TODO: dig into more
const PROXY_URL = 'https://cors-anywhere.herokuapp.com';

const App = () => {
  // ray test touch <
  const [albumTiles, setAlbumTiles] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`${PROXY_URL}/https://rss.itunes.apple.com/api/v1/us/apple-music/coming-soon/all/12/explicit.json`);
        const json = await response.json();
        console.log('ray : ***** json => ', json);
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
  // ray test touch >

  return (
    <>
      <Header />
      <main>
        <AnimatedAlbumGrid albumTiles={albumTiles} />
      </main>
    </>
  );
};

export default App;
