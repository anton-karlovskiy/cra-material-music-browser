
import React, { memo } from 'react';

import MaterialMusicSelect from 'components/MaterialMusicSelect';
import Switch from 'components/UI/Switch';
import './apple-music-feed-settings.css';
import {
  COUNTRY_OR_REGION_OPTIONS,
  FEED_TYPE_OPTIONS,
  GENRE_OPTIONS,
  RESULTS_LIMIT_OPTIONS,
  INPUT_NAMES
} from 'utils/constants';

const MemoizedMaterialMusicSelect = memo(props => <MaterialMusicSelect {...props} />);
const MemoizedSwitch = memo(props => <Switch {...props} />);

const appleMusicFeedSettings = [
  {
    label: 'Country or Region',
    options: COUNTRY_OR_REGION_OPTIONS,
    name: INPUT_NAMES.COUNTRY_OR_REGION,
    search: true,
    className: 'country-or-region-select'
  },
  {
    label: 'Feed Type',
    options: FEED_TYPE_OPTIONS,
    name: INPUT_NAMES.FEED_TYPE,
    search: false,
    className: 'feed-type-select'
  },
  {
    label: 'Genre',
    options: GENRE_OPTIONS,
    name: INPUT_NAMES.GENRE,
    search: false,
    className: 'genre-select'
  },
  {
    label: 'Results limit',
    options: RESULTS_LIMIT_OPTIONS,
    name: INPUT_NAMES.RESULTS_LIMIT,
    search: false,
    className: 'results-limit-select'
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
    <div className='setting-selects'>
      {appleMusicFeedSettings.map(appleMusicFeedSetting => (
        <MemoizedMaterialMusicSelect
          key={appleMusicFeedSetting.name}
          className={appleMusicFeedSetting.className || ''}
          disabled={disabled || loading}
          search={appleMusicFeedSetting.search}
          name={appleMusicFeedSetting.name}
          value={inputs[appleMusicFeedSetting.name]}
          placeholder={appleMusicFeedSetting.label}
          onChange={inputChange}
          options={appleMusicFeedSetting.options} />
      ))}
    </div>
    <MemoizedSwitch
      className='allow-explicit-setting'
      label='Allow Explicit'
      disabled={disabled || loading}
      name={INPUT_NAMES.ALLOW_EXPLICIT}
      checked={inputs[INPUT_NAMES.ALLOW_EXPLICIT]}
      onChange={inputChange} />
  </div>
);

export default AppleMusicFeedSettings;
