
import React, { useState, useEffect, useCallback } from 'react';

import Header from 'components/Header';
import AnimatedAlbumGridSet from 'containers/AnimatedAlbumGridSet';
import ErrorAnnotation from 'components/ErrorAnnotation';
import './App.css';
import useForm from 'utils/hooks/use-form';
import {
  INPUT_NAMES,
  FEED_TYPE_OPTIONS,
  GENRE_OPTIONS,
  RESULTS_LIMIT_OPTIONS
} from 'utils/constants';
import { getNewUrlWithNewArtworkImageRes } from 'utils/helpers';
import { PROXY_URL } from 'config';
// MEMO: check itunes country or region codes
// import { getItunesCountryOptions } from 'utils/tools';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [albumTiles, setAlbumTiles] = useState([]);
  const [error, setError] = useState({});
  
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
      [INPUT_NAMES.COUNTRY_OR_REGION]: 'us',
      [INPUT_NAMES.FEED_TYPE]: FEED_TYPE_OPTIONS[0].value,
      [INPUT_NAMES.GENRE]: GENRE_OPTIONS[0].value,
      [INPUT_NAMES.RESULTS_LIMIT]: RESULTS_LIMIT_OPTIONS[0].value
    }
  });

  const getRSSFeed = useCallback(async () => {
    setAlbumTiles([]);
    setLoading(true);
    setError({});
    try {
      const response =
        await fetch(`${PROXY_URL}/https://rss.itunes.apple.com/api/v1/${inputs[INPUT_NAMES.COUNTRY_OR_REGION]}/apple-music/${inputs[INPUT_NAMES.FEED_TYPE]}/${inputs[INPUT_NAMES.GENRE]}/${inputs[INPUT_NAMES.RESULTS_LIMIT]}/explicit.json`);
      if (response.status === 404) {
        throw new Error('Invalid Settings!');
      }
      const json = await response.json();
      const albumTiles = json.feed.results.map(result => ({
        id: result.id,
        albumName: result.name,
        artistName: result.artistName,
        artworkUrl: getNewUrlWithNewArtworkImageRes(result.artworkUrl100, 400)
      }));
      setAlbumTiles(albumTiles);
    } catch (error) {
      console.log('[App] error => ', error);
      setError(error);
    }

    setLoading(false);
  }, [inputs, setAlbumTiles, setLoading]);

  useEffect(() => {
    getRSSFeed();
    // MEMO: check itunes country or region codes
    // getItunesCountryOptions();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header
        loading={loading}
        inputs={inputs}
        inputChange={inputChangeHandler}
        onSubmit={onSubmitHandler} />
      <main>
        <ErrorAnnotation error={error} />
        {albumTiles.length > 0 && (
          <AnimatedAlbumGridSet albumTiles={albumTiles} />
        )}
      </main>
    </>
  );
};

export default App;
