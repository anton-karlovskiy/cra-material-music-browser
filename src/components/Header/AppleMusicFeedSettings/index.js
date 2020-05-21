
import React, { memo } from 'react';

import Select from 'components/UI/Select';
import './apple-music-feed-settings.css';
import {
  COUNTRY_OR_REGION_OPTIONS,
  FEED_TYPE_OPTIONS,
  GENRE_OPTIONS,
  RESULTS_LIMIT_OPTIONS,
  INPUT_NAMES
} from 'utils/constants';

const MemoizedSelect = memo(props => <Select {...props} />);

const appleMusicFeedSettings = [
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

const AppleMusicFeedSettings = ({
  loading,
  disabled,
  className,
  inputs,
  inputChange
}) => (
  <div className={`${className} apple-music-feed-settings`}>
    {appleMusicFeedSettings.map(appleMusicFeedSetting => (
      <MemoizedSelect
        disabled={disabled || loading}
        key={appleMusicFeedSetting.name}
        name={appleMusicFeedSetting.name}
        value={inputs[appleMusicFeedSetting.name]}
        onChange={inputChange}
        options={appleMusicFeedSetting.options} />
    ))}
  </div>
);

export default AppleMusicFeedSettings;
