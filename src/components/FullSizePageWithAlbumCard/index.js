
import React from 'react';

import ColorBackground from './ColorBackground';
import ImageBackground from './ImageBackground';
import AlbumCard from './AlbumCard';
import BackButton from 'components/BackButton';
import './full-size-page-with-album-card.css';

const FullSizePageWithAlbumCard = ({
  colorBackgroundRef,
  imageBackgroundRef,
  albumCardRef,
  closeAlbum,
  checkFavorite,
  addToFavorites,
  removeFromFavorites,
  openedAlbum
}) => {
  const {
    id,
    albumName,
    artistName,
    artworkUrl,
    color,
    fabColor
  } = openedAlbum;

  return (
    <div className='full-size-page-with-album-card'>
      <BackButton onClick={closeAlbum} />
      <ColorBackground
        ref={colorBackgroundRef}
        color={color} />
      <ImageBackground
        ref={imageBackgroundRef}
        url={artworkUrl} />
      <AlbumCard
        ref={albumCardRef}
        id={id}
        albumName={albumName}
        artistName={artistName}
        artworkUrl={artworkUrl}
        checkFavorite={checkFavorite}
        addToFavorites={addToFavorites}
        removeFromFavorites={removeFromFavorites}
        color={color}
        fabColor={fabColor} />
    </div>
  );
};

export default FullSizePageWithAlbumCard;
