
import React, { useState, useEffect, useCallback, useMemo } from 'react';

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
  const [albumTiles, setAlbumTiles] = useState([]);
  const [error, setError] = useState({});
  // ray test touch <
  const [favoritesOpen, setFavoritesOpen] = useState(false);
  // ray test touch >

  const { favorites: initialFavorites = [] } = loadState() || {};
  const [favorites, setFavorites] = useState(initialFavorites);

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

  // ray test touch <
  const openFavoritesHandler = () => {
    setFavoritesOpen(true);
  };
  // ray test touch >

  return (
    <>
      <Header
        loading={loading}
        // ray test touch <
        openFavorites={openFavoritesHandler}
        // ray test touch >
        inputs={inputs}
        inputChange={inputChangeHandler}
        onSubmit={onSubmitHandler} />
      <main>
        {/* ray test touch < */}
        {favoritesOpen ? (
          <></>
        ) : (
          <>
            <ErrorAnnotation error={error} />
            {albumTiles.length > 0 && (
              <AnimatedAlbumGridSet
                checkFavorite={checkFavoriteHandler}
                addToFavorites={addToFavoritesHandler}
                removeFromFavorites={removeFromFavoritesHandler}
                albumTiles={albumTiles} />
            )}
          </>
        )}
        {/* ray test touch > */}
        
      </main>
    </>
  );
};

export default App;
