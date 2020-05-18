
// ray test touch <
import React from 'react';

import Tile from './Tile';
import './animated-grid.css';

const tiles = [
  {
    id: 1,
    color: 'blue',
    fabColor: 'green-100',
    artist: 'Kodaline',
    album: 'In A Perfect World',
    profile: '/assets/images/kodaline.jpg',
    background: '/assets/images/large-kodaline.jpg'
  },
  {
    id: 2,
    color: 'red',
    fabColor: 'yuna-yellow',
    artist: 'Yuna',
    album: 'Lights and Camera',
    profile: '/assets/images/artworks-000060971310-g3znsu-t500x500.jpg',
    background: '/assets/images/yuna-a47c1e9674648887f73980cc458c6de378f57884.jpg'},
  {
    id: 3,
    color: 'purple',
    fabColor: 'ellie-blue',
    artist: 'Ellie Goulding',
    album: 'Halcyon Days',
    profile: '/assets/images/ellie-goulding-halcyon-days-500x500.jpg',
    background: '/assets/images/ellie-goulding-bg.jpg'
  },
  {
    id: 4,
    color: 'vivid',
    fabColor: 'green-300',
    artist: 'One Republic',
    album: 'Native',
    profile: '/assets/images/one-republic.jpg',
    size: 'cover'
  },
  {
    id: 5,
    color: 'mulberry',
    fabColor: 'yuna-yellow',
    artist: 'The Strokes',
    album: 'Comedown Machine',
    profile: '/assets/images/strokes-comedownmachine.jpg'
  },
  {
    id: 6,
    color: 'yellow',
    fabColor: 'pharrell-fabColor:',
    artist: 'Pharrell Williams',
    album: 'GIRL',
    profile: '/assets/images/pharrell-girl-bright.jpg',
    background: '/assets/images/20150204-pharrellwilliams-sgp.jpg'
  },
  {
    id: 7,
    color: 'sap',
    fabColor: 'jackson-300',
    artist: 'Flipsyde',
    album: 'We The People',
    profile: '/assets/images/flipside.jpg',
    background: '/assets/images/flipside.jpg'
  },
  {
    id: 8,
    color: 'jagular',
    fabColor: 'portrage-300',
    artist: 'Rhye',
    album: 'Woman',
    profile: '/assets/images/rhye-woman.jpg',
    background: '/assets/images/rhye-woman.jpg'
  },
  {
    id: 9,
    color: 'athens',
    fabColor: 'yuna-yellow',
    artist: 'Jamie Lidell',
    album: 'Jamie Lidell',
    profile: '/assets/images/jamie-lidell-cover.jpg',
    background: '/assets/images/jamie-lidell-cover.jpg'
  },
  {
    id: 10,
    color: 'egyptian-blue',
    fabColor: 'yuna-yellow',
    artist: 'Neon Trees',
    album: 'Pop Psychology',
    profile: '/assets/images/neon-trees-pop-psychology.jpg',
    background: '/assets/images/neon-trees-pop-psychology.jpg'
  },
  {
    id: 11,
    color: 'william',
    fabColor: 'yuna-yellow',
    artist: 'Foster The People',
    album: 'Supermodel',
    profile: '/assets/images/foster-the-people.jpg',
    background: '/assets/images/foster-the-people.jpg'
  },
  {
    id: 12,
    color: 'charcoal',
    fabColor: 'yuna-yellow',
    artist: 'Fitz And The Tantrums',
    album: 'More Than Just A Dream',
    profile: '/assets/images/more-than-just-a-dream.jpg',
    background: '/assets/images/fitz-tantrums-more-than-just-dream.jpg'
  }
];

const AnimatedGrid = () => {
  return (
    <div className='neon-animated-pages'>
      {tiles.map(tile => (
        <Tile
          key={tile.id}
          color={tile.color}
          profile={tile.profile}
          album={tile.album}
          artist={tile.artist} />
      ))}
    </div>
  );
};

export default AnimatedGrid;
// ray test touch >
