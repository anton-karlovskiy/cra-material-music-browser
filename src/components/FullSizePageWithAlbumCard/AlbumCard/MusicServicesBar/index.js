
import React from 'react';

import PlayListAddIconButton from 'components/UI/IconButtons/PlayListAddIconButton';
import ServiceSearchLink from './ServiceSearchLink';
import './music-services-bar.css';

const SERVICE_TYPES = {
  YOU_TUBE: 'YouTube',
  SPOTIFY: 'Spotify',
  APPLE_MUSIC: 'Apple Music',
  PANDORA: 'Pandora',
  GOOGLE_PLAY_MUSIC: 'Play Music'
};

const searchLinks = [
  {
    title: SERVICE_TYPES.YOU_TUBE,
    queryPrefix: 'https://www.youtube.com/results?search_query=',
    logoImagePath: '/assets/images/service-logos/youtube.svg',
    width: 50,
    height: 50
  },
  {
    title: SERVICE_TYPES.SPOTIFY,
    queryPrefix: 'https://open.spotify.com/search/',
    logoImagePath: '/assets/images/service-logos/spotify.svg',
    width: 40,
    height: 50
  },
  {
    title: SERVICE_TYPES.APPLE_MUSIC,
    queryPrefix: 'https://music.apple.com/us/search?term=',
    logoImagePath: '/assets/images/service-logos/apple-music.svg',
    width: 50,
    height: 50
  },
  {
    title: SERVICE_TYPES.PANDORA,
    queryPrefix: 'https://www.pandora.com/search/',
    logoImagePath: '/assets/images/service-logos/pandora.png',
    width: 28,
    height: 50
  },
  {
    title: SERVICE_TYPES.GOOGLE_PLAY_MUSIC,
    queryPrefix: 'https://play.google.com/music/listen?u=0#/sr/',
    logoImagePath: '/assets/images/service-logos/google-play-music.svg',
    width: 32,
    height: 50
  }
];

const getSearchQuery = ({ queryPrefix, albumName, artistName, serviceType }) => {
  let searchParam = ''
  switch (serviceType) {
    case SERVICE_TYPES.YOU_TUBE:
    case SERVICE_TYPES.SPOTIFY:
    case SERVICE_TYPES.PANDORA:
    case SERVICE_TYPES.GOOGLE_PLAY_MUSIC:
      const parenthesisStartPos = albumName.indexOf(' (');
      const parenthesisEndPos = albumName.indexOf(')') + 1;
      const parenthesisPortion = albumName.substring(parenthesisStartPos, parenthesisEndPos);
      searchParam = `${albumName.replace(parenthesisPortion, '')} ${artistName}`;
      break;
    case SERVICE_TYPES.APPLE_MUSIC:
      searchParam = `${albumName} ${artistName}`;
      break;
    default: break;
  }

  return `${queryPrefix}${searchParam}`;
};

const MusicServicesBar = ({
  albumName,
  artistName = '',
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
          href={getSearchQuery({queryPrefix: searchLink.queryPrefix, albumName, artistName, serviceType: searchLink.title})}
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
