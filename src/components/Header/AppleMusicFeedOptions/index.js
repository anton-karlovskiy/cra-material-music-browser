
import React from 'react';

import Select from 'components/UI/Select';
import './apple-music-feed-options.css';

const appleMusicFeedOptions = [
  {
    label: 'Country or Region',
    options: [
      {
        label: 'United Kingdom',
        value: 'gb'
      },
      {
        label: 'United States',
        value: 'us'
      }
    ]
  },
  {
    label: 'Feed Type',
    options: [
      {
        label: 'Coming Soon',
        value: 'coming-soon'
      },
      {
        label: 'Hot Tracks',
        value: 'hot-tracks'
      },
      {
        label: 'New Releases',
        value: 'new-releases'
      },
      {
        label: 'Top Albums',
        value: 'top-albums'
      },
      {
        label: 'Top Songs',
        value: 'top-songs'
      }
    ]
  },
  {
    label: 'Genre',
    options: [
      {
        label: 'All',
        value: 'all'
      },
      {
        label: 'Country',
        value: 'country'
      },
      {
        label: 'Heavy Metal',
        value: 'heavy-metal'
      }
    ]
  },
  {
    label: 'Results limit',
    options: [
      {
        label: '10',
        value: 10
      },
      {
        label: '25',
        value: 25
      },
      {
        label: '50',
        value: 50
      },
      {
        label: '100',
        value: 100
      }
    ]
  }
];

const AppleMusicFeedOptions = ({ className }) => {
  return (
    <div className={className}>
      {appleMusicFeedOptions.map(appleMusicFeedOption => (
        <Select
          key={appleMusicFeedOption.label}
          options={appleMusicFeedOption.options} />
      ))}
    </div>
  );
};

export default AppleMusicFeedOptions;
