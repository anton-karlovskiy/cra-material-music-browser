
// ray test touch <
import React from 'react';

import Tile from './Tile';
import './animated-album-grid.css';

const staticAlbumTiles = [
  {
    // id: 1,
    // fabColor: 'green-100',
    // artistName: 'Kodaline',
    // albumName: 'In A Perfect World',
    // artWorkUrl: '/assets/images/kodaline.jpg',
    // background: '/assets/images/large-kodaline.jpg',
    color: 'blue'
  },
  {
    // id: 2,
    // fabColor: 'yuna-yellow',
    // artistName: 'Yuna',
    // albumName: 'Lights and Camera',
    // artWorkUrl: '/assets/images/artworks-000060971310-g3znsu-t500x500.jpg',
    // background: '/assets/images/yuna-a47c1e9674648887f73980cc458c6de378f57884.jpg',
    color: 'red'
  },
  {
    // id: 3,
    // fabColor: 'ellie-blue',
    // artistName: 'Ellie Goulding',
    // albumName: 'Halcyon Days',
    // artWorkUrl: '/assets/images/ellie-goulding-halcyon-days-500x500.jpg',
    // background: '/assets/images/ellie-goulding-bg.jpg',
    color: 'purple'
  },
  {
    // id: 4,
    // fabColor: 'green-300',
    // artistName: 'One Republic',
    // albumName: 'Native',
    // artWorkUrl: '/assets/images/one-republic.jpg',
    // size: 'cover',
    color: 'vivid'
  },
  {
    // id: 5,
    // fabColor: 'yuna-yellow',
    // artistName: 'The Strokes',
    // albumName: 'Comedown Machine',
    // artWorkUrl: '/assets/images/strokes-comedownmachine.jpg',
    color: 'mulberry'
  },
  {
    // id: 6,
    // fabColor: 'pharrell-fabColor:',
    // artistName: 'Pharrell Williams',
    // albumName: 'GIRL',
    // artWorkUrl: '/assets/images/pharrell-girl-bright.jpg',
    // background: '/assets/images/20150204-pharrellwilliams-sgp.jpg',
    color: 'yellow'
  },
  {
    // id: 7,
    // fabColor: 'jackson-300',
    // artistName: 'Flipsyde',
    // albumName: 'We The People',
    // artWorkUrl: '/assets/images/flipside.jpg',
    // background: '/assets/images/flipside.jpg',
    color: 'sap'
  },
  {
    // id: 8,
    // fabColor: 'portrage-300',
    // artistName: 'Rhye',
    // albumName: 'Woman',
    // artWorkUrl: '/assets/images/rhye-woman.jpg',
    // background: '/assets/images/rhye-woman.jpg',
    color: 'jagular'
  },
  {
    // id: 9,
    // fabColor: 'yuna-yellow',
    // artistName: 'Jamie Lidell',
    // albumName: 'Jamie Lidell',
    // artWorkUrl: '/assets/images/jamie-lidell-cover.jpg',
    // background: '/assets/images/jamie-lidell-cover.jpg',
    color: 'athens'
  },
  {
    // id: 10,
    // fabColor: 'yuna-yellow',
    // artistName: 'Neon Trees',
    // albumName: 'Pop Psychology',
    // artWorkUrl: '/assets/images/neon-trees-pop-psychology.jpg',
    // background: '/assets/images/neon-trees-pop-psychology.jpg',
    color: 'egyptian-blue'
  },
  {
    // id: 11,
    // fabColor: 'yuna-yellow',
    // artistName: 'Foster The People',
    // albumName: 'Supermodel',
    // artWorkUrl: '/assets/images/foster-the-people.jpg',
    // background: '/assets/images/foster-the-people.jpg',
    color: 'william'
  },
  {
    // id: 12,
    // fabColor: 'yuna-yellow',
    // artistName: 'Fitz And The Tantrums',
    // albumName: 'More Than Just A Dream',
    // artWorkUrl: '/assets/images/more-than-just-a-dream.jpg',
    // background: '/assets/images/fitz-tantrums-more-than-just-dream.jpg',
    color: 'charcoal'
  }
];

const AnimatedAlbumGrid = ({ albumTiles }) => (
  <div className='neon-animated-pages'>
    {albumTiles.map((albumTile, index) => (
      <Tile
        key={albumTile.id}
        color={staticAlbumTiles[index].color}
        artworkUrl={albumTile.artworkUrl}
        albumName={albumTile.albumName}
        artistName={albumTile.artistName} />
    ))}
  </div>
);

export default AnimatedAlbumGrid;
// ray test touch >
