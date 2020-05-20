
import React from 'react';

import ColorBackground from './ColorBackground';
import ImageBackground from './ImageBackground';
import AlbumCard from './AlbumCard';
import BackspaceIconButton from 'components/UI/IconButtons/BackspaceIconButton';
import './full-size-page-with-album-card.css';

const FullSizePageWithAlbumCard = ({
  colorBackgroundRef,
  imageBackgroundRef,
  albumCardRef,
  openedAlbum,
  closeAlbum
}) => {
  const {
    color,
    fabColor,
    artworkUrl,
    albumName,
    artistName
  } = openedAlbum;

  return (
    <div className='fullsize-page-with-card'>
      <BackspaceIconButton
        onClick={closeAlbum}
        width={28}
        height={28}
        className='backspace-icon-button' />
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
