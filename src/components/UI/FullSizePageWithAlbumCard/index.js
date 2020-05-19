
import React from 'react';

import ColorBackground from './ColorBackground';
import ImageBackground from './ImageBackground';
import AlbumCard from './AlbumCard';
import BackspaceIconButton from 'components/UI/IconButtons/BackspaceIconButton';

import './full-size-page-with-album-card.css';

const FullSizePageWithAlbumCard = ({
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
      <ColorBackground color={color} />
      <ImageBackground url={artworkUrl} />
      <AlbumCard
        color={color}
        fabColor={fabColor}
        artworkUrl={artworkUrl}
        albumName={albumName}
        artistName={artistName} />
    </div>
  );
};

export default FullSizePageWithAlbumCard;
