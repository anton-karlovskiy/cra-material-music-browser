
import React, { useState, useEffect, useCallback } from 'react';

import Header from 'components/Header';
import AnimatedAlbumGridSet from 'containers/AnimatedAlbumGridSet';
import './App.css';
import useForm from 'utils/hooks/use-form';
import {
  INPUT_NAMES,
  PROXY_URL,
  COUNTRY_OR_REGION_OPTIONS,
  FEED_TYPE_OPTIONS,
  RESULTS_LIMIT_OPTIONS
} from 'utils/constants';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [albumTiles, setAlbumTiles] = useState([]);
  
  const submitCallback = () => {
    getRSSFeed();
  };

  const {
    inputs,
    inputChangeHandler,
    onSubmitHandler
  } = useForm({
    submitCallback,
    initialInputs: {
      [INPUT_NAMES.COUNTRY_OR_REGION]: COUNTRY_OR_REGION_OPTIONS[0].value,
      [INPUT_NAMES.FEED_TYPE]: FEED_TYPE_OPTIONS[0].value,
      [INPUT_NAMES.GENRE]: 'all', // TODO: hardcoded
      [INPUT_NAMES.RESULTS_LIMIT]: RESULTS_LIMIT_OPTIONS[0].value
    }
  });

  const getRSSFeed = useCallback(async () => {
    setAlbumTiles([]);
    setLoading(true);
    try {
      const response =
        await fetch(`${PROXY_URL}/https://rss.itunes.apple.com/api/v1/${inputs[INPUT_NAMES.COUNTRY_OR_REGION]}/apple-music/${inputs[INPUT_NAMES.FEED_TYPE]}/${inputs[INPUT_NAMES.GENRE]}/${inputs[INPUT_NAMES.RESULTS_LIMIT]}/explicit.json`);
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

    setLoading(false);
  }, [inputs, setAlbumTiles, setLoading]);

  useEffect(() => {
    getRSSFeed();
  }, [getRSSFeed]);
  
  return (
    <>
      <Header
        loading={loading}
        inputs={inputs}
        inputChange={inputChangeHandler}
        onSubmit={onSubmitHandler} />
      <main>
        {albumTiles.length > 0 && (
          <AnimatedAlbumGridSet albumTiles={albumTiles} />
        )}
      </main>
    </>
  );
};

export default App;
