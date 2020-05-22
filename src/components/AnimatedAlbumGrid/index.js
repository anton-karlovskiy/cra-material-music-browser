
import React from 'react';

import AlbumTile from './AlbumTile';
import './animated-album-grid.css';
import { COUNT_OF_TILES_ON_VIEWPORT } from 'utils/constants';

const staticAlbumTiles = [
  {
    fabColor: 'green-100',
    color: 'blue'
  },
  {
    fabColor: 'yuna-yellow',
    color: 'red'
  },
  {
    fabColor: 'ellie-blue',
    color: 'purple'
  },
  {
    fabColor: 'green-300',
    color: 'vivid'
  },
  {
    fabColor: 'yuna-yellow',
    color: 'mulberry'
  },
  {
    fabColor: 'pharrell-fab',
    color: 'yellow'
  },
  {
    fabColor: 'jackson-300',
    color: 'sap'
  },
  {
    fabColor: 'portrage-300',
    color: 'jagular'
  },
  {
    fabColor: 'yuna-yellow',
    color: 'athens'
  },
  {
    fabColor: 'yuna-yellow',
    color: 'egyptian-blue'
  },
  {
    fabColor: 'yuna-yellow',
    color: 'william'
  },
  {
    fabColor: 'yuna-yellow',
    color: 'charcoal'
  }
];

const AnimatedAlbumGrid = ({
  albumTiles,
  openAlbum
}) => (
  <div className='neon-animated-pages'>
    {albumTiles.map((albumTile, index) => {
      const albumColor = staticAlbumTiles[index % COUNT_OF_TILES_ON_VIEWPORT].color;
      const albumFabColor = staticAlbumTiles[index % COUNT_OF_TILES_ON_VIEWPORT].fabColor;;

      return (
        <AlbumTile
          key={albumTile.id}
          onClick={openAlbum({
            id: albumTile.id,
            fabColor: albumFabColor,
            color: albumColor,
            artworkUrl: albumTile.artworkUrl,
            albumName: albumTile.albumName,
            artistName: albumTile.artistName
          })}
          color={albumColor}
          artworkUrl={albumTile.artworkUrl}
          albumName={albumTile.albumName}
          artistName={albumTile.artistName} />
      );
    })}
  </div>
);

export default AnimatedAlbumGrid;
