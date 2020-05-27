
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
import { loadState, saveState } from 'utils/helpers/local-storage';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const [albumTiles, setAlbumTiles] = useState([]);
  const { favorites: initialFavorites = [] } = loadState() || {};
  const [favorites, setFavorites] = useState(initialFavorites);
  const [favoritesOpen, setFavoritesOpen] = useState(false);

  const addToFavoritesHandler = ({
    id,
    artworkUrl,
    albumName,
    artistName
  }) => () => {
    setFavorites(prevFavorites => {
      const nextFavorites = prevFavorites.find(prevFavorite => id === prevFavorite.id)
        ? prevFavorites
        : [
          ...prevFavorites,
          {
            id,
            artworkUrl,
            albumName,
            artistName
          }
        ];

      saveState({favorites: nextFavorites});

      return nextFavorites;
    });
  };

  const removeFromFavoritesHandler = id => () => {
    setFavorites(prevFavorites => {
      const nextFavorites = prevFavorites.filter(prevFavorite => prevFavorite.id !== id);

      saveState({favorites: nextFavorites});

      return nextFavorites;
    });
  };

  const checkFavoriteHandler = useCallback(id => {
    const isFavorite = !!(favorites.find(favorite => favorite.id === id));

    return isFavorite;
  }, [favorites]);
  
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
      [INPUT_NAMES.RESULTS_LIMIT]: RESULTS_LIMIT_OPTIONS[0].value,
      [INPUT_NAMES.ALLOW_EXPLICIT]: true
    }
  });

  const getRSSFeed = useCallback(async () => {
    setAlbumTiles([]);
    setLoading(true);
    setError({});
    setFavoritesOpen(false);
    try {
      const response =
        await fetch(`${PROXY_URL}/https://rss.itunes.apple.com/api/v1/${inputs[INPUT_NAMES.COUNTRY_OR_REGION]}/apple-music/${inputs[INPUT_NAMES.FEED_TYPE]}/${inputs[INPUT_NAMES.GENRE]}/${inputs[INPUT_NAMES.RESULTS_LIMIT]}/${inputs[INPUT_NAMES.ALLOW_EXPLICIT] ? 'explicit.json' : 'non-explicit.json'}`);
      if (response.status === 404) {
        throw new Error('Invalid Settings!');
      }
      const json = await response.json();
      const albumTiles = json.feed.results.map(result => ({
        id: result.id,
        // TODO: might have to rename albumName to albumOrSongName
        // TODO: might have to rename relevant components according to above
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleFavoritesHandler = () => {
    setFavoritesOpen(prevFavoritesOpen => !prevFavoritesOpen);
  };

  const targetAlbumTiles = favoritesOpen ? favorites : albumTiles;

  return (
    <>
      <Header
        loading={loading}
        favoritesOpen={favoritesOpen}
        toggleFavorites={toggleFavoritesHandler}
        inputs={inputs}
        inputChange={inputChangeHandler}
        onSubmit={onSubmitHandler} />
      <main>
        {favoritesOpen && <ErrorAnnotation error={error} />}
        {targetAlbumTiles.length > 0 && (
          <AnimatedAlbumGridSet
            favoritesOpen={favoritesOpen}
            checkFavorite={checkFavoriteHandler}
            addToFavorites={addToFavoritesHandler}
            removeFromFavorites={removeFromFavoritesHandler}
            albumTiles={targetAlbumTiles} />
        )}
      </main>
    </>
  );
};

export default App;
