
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
  openedAlbum,
  closeAlbum,
  className,
  ...rest
}) => {
  const {
    color,
    fabColor,
    artworkUrl,
    albumName,
    artistName
  } = openedAlbum;

  return (
    <div
      {...rest}
      className={`full-size-page-with-album-card ${className}`}>
      <BackButton onClick={closeAlbum} />
      <ColorBackground
        ref={colorBackgroundRef}
        color={color} />
      <ImageBackground
        ref={imageBackgroundRef}
        url={artworkUrl} />
      <AlbumCard
        ref={albumCardRef}
        color={color}
        fabColor={fabColor}
        artworkUrl={artworkUrl}
        albumName={albumName}
        artistName={artistName} />
    </div>
  );
};

export default FullSizePageWithAlbumCard;
