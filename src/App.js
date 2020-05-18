
import React, { useEffect, useState, useMemo } from 'react';

import Header from 'components/Header';
import AnimatedAlbumGrid from 'components/UI/AnimatedAlbumGrid';
import './App.css';
import { splitIntoSubArray } from 'utils/helpers';
import { COUNT_OF_TILES_ON_VIEWPORT } from 'utils/constants';

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

  const albumTilesSet = useMemo(() => splitIntoSubArray(albumTiles, COUNT_OF_TILES_ON_VIEWPORT), [albumTiles]);

  return (
    <>
      <Header />
      <main>
        {albumTilesSet.map((albumTiles, index) => (
          <AnimatedAlbumGrid
            key={index}
            albumTiles={albumTiles} />
        ))}
      </main>
    </>
  );
};

export default App;
