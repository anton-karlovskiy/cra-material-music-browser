
import React, { memo } from 'react';

import Select from 'components/UI/Select';
import AutocompleteSelect from 'components/UI/AutocompleteSelect';
import './apple-music-feed-settings.css';
import {
  COUNTRY_OR_REGION_OPTIONS,
  FEED_TYPE_OPTIONS,
  GENRE_OPTIONS,
  RESULTS_LIMIT_OPTIONS,
  INPUT_NAMES
} from 'utils/constants';

const MemoizedSelect = memo(props => <Select {...props} />);
const MemoizedAutocompleteSelect = memo(props => <AutocompleteSelect {...props} />);

const ConditionalSelect = ({
  autocomplete,
  ...rest
}) => (
  <>
    {autocomplete ? (
      <MemoizedAutocompleteSelect {...rest} />
    ) : (
      <MemoizedSelect {...rest} />
    )}
  </>
);

const appleMusicFeedSettings = [
  {
    label: 'Country or Region',
    options: COUNTRY_OR_REGION_OPTIONS,
    name: INPUT_NAMES.COUNTRY_OR_REGION,
    autocomplete: true
  },
  {
    label: 'Feed Type',
    options: FEED_TYPE_OPTIONS,
    name: INPUT_NAMES.FEED_TYPE,
    autocomplete: false
  },
  {
    label: 'Genre',
    options: GENRE_OPTIONS,
    name: INPUT_NAMES.GENRE,
    autocomplete: false
  },
  {
    label: 'Results limit',
    options: RESULTS_LIMIT_OPTIONS,
    name: INPUT_NAMES.RESULTS_LIMIT,
    autocomplete: false
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
      <ConditionalSelect
        key={appleMusicFeedSetting.name}
        autocomplete={appleMusicFeedSetting.autocomplete}
        disabled={disabled || loading}
        name={appleMusicFeedSetting.name}
        value={inputs[appleMusicFeedSetting.name]}
        onChange={inputChange}
        options={appleMusicFeedSetting.options} />
    ))}
  </div>
);

export default AppleMusicFeedSettings;
