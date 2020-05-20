
import React from 'react';

import Select from 'components/UI/Select';
import './apple-music-feed-options.css';
import {
  COUNTRY_OR_REGION_OPTIONS,
  FEED_TYPE_OPTIONS,
  GENRE_OPTIONS,
  RESULTS_LIMIT_OPTIONS,
  INPUT_NAMES
} from 'utils/constants';

const appleMusicFeedOptions = [
  {
    label: 'Country or Region',
    options: COUNTRY_OR_REGION_OPTIONS,
    name: INPUT_NAMES.COUNTRY_OR_REGION
  },
  {
    label: 'Feed Type',
    options: FEED_TYPE_OPTIONS,
    name: INPUT_NAMES.FEED_TYPE
  },
  {
    label: 'Genre',
    options: GENRE_OPTIONS,
    name: INPUT_NAMES.GENRE
  },
  {
    label: 'Results limit',
    options: RESULTS_LIMIT_OPTIONS,
    name: INPUT_NAMES.RESULTS_LIMIT
  }
];

const AppleMusicFeedOptions = ({
  className,
  inputs,
  inputChange
}) => {
  return (
    <div className={`${className} apple-music-feed-options`}>
      {appleMusicFeedOptions.map(appleMusicFeedOption => (
        // TODO: conditional options
        <Select
          key={appleMusicFeedOption.name}
          name={appleMusicFeedOption.name}
          value={inputs[appleMusicFeedOption.name]}
          onChange={inputChange}
          options={appleMusicFeedOption.options} />
      ))}
    </div>
  );
};

export default AppleMusicFeedOptions;
