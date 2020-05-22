
import React from 'react';

import PlayListAddIconButton from 'components/UI/IconButtons/PlayListAddIconButton';
import ServiceSearchLink from './ServiceSearchLink';
import './music-services-bar.css';

const searchLinks = [
  {
    title: 'YouTube',
    searchLinkPrefix: 'https://www.youtube.com/results?search_query=',
    logoImagePath: '/assets/images/service-logos/youtube.svg',
    width: 50,
    height: 50
  },
  {
    title: 'Spotify',
    searchLinkPrefix: 'https://open.spotify.com/search/',
    logoImagePath: '/assets/images/service-logos/spotify.svg',
    width: 40,
    height: 50
  },
  {
    title: 'Apple Music',
    searchLinkPrefix: 'https://music.apple.com/us/search?term=',
    logoImagePath: '/assets/images/service-logos/apple-music.svg',
    width: 50,
    height: 50
  },
  {
    title: 'iHeartRadio',
    searchLinkPrefix: '',
    logoImagePath: '/assets/images/service-logos/iheartradio.png',
    width: 45,
    height: 50
  },
  {
    title: 'Pandora',
    searchLinkPrefix: 'https://www.pandora.com/search/',
    logoImagePath: '/assets/images/service-logos/pandora.png',
    width: 28,
    height: 50
  },
  {
    title: 'Play Music',
    searchLinkPrefix: 'https://play.google.com/music/listen?u=0#/sr/',
    logoImagePath: '/assets/images/service-logos/google-play-music.svg',
    width: 32,
    height: 50
  },
];

const MusicServicesBar = ({
  color,
  fabColor
}) => (
  <div className={`music-services-bar ${color}-100`}>
    <div className={`play-list-add ${fabColor}`}>
      <PlayListAddIconButton />
    </div>
    <div className='music-services'>
      {searchLinks.map(searchLink => (
        <ServiceSearchLink
          key={searchLink.title}
          width={searchLink.width}
          height={searchLink.height}
          logoImagePath={searchLink.logoImagePath}
          title={searchLink.title} />
      ))}
    </div>
  </div>
);

export default MusicServicesBar;
