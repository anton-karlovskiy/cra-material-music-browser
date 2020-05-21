
import React, { useEffect, memo } from 'react';

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

// TODO: could be improved more
const getOptions = (name, feedTypeValue, feedSetting) => {
  const options = name === INPUT_NAMES.GENRE
    ? feedSetting.options[feedTypeValue]
    : feedSetting.options;

  return options;
};

const checkValueInOptions = (value, options) => {
  const targetOption = options.find(option => option.value === value);

  return !!targetOption;
};

const AppleMusicFeedSettings = ({
  loading,
  disabled,
  className,
  inputs,
  inputChange
}) => {
  useEffect(() => {
    for (const appleMusicFeedSetting of appleMusicFeedSettings) {
      const name = appleMusicFeedSetting.name;
      const options = getOptions(name, inputs[INPUT_NAMES.FEED_TYPE], appleMusicFeedSetting);

      if (!checkValueInOptions(inputs[name], options)) {
        inputChange({
          target: {
            name,
            value: options[0].value
          }
        });
      }
    }
  }, [inputChange, inputs]);

  // TODO: supervise rendering times
  console.log('[AppleMusicFeedSettings] inputs => ', inputs);

  return (
    <div className={`${className} apple-music-feed-settings`}>
      {appleMusicFeedSettings.map(appleMusicFeedSetting => {
        const name = appleMusicFeedSetting.name;
        const options = getOptions(name, inputs[INPUT_NAMES.FEED_TYPE] , appleMusicFeedSetting);
        let value = inputs[name];
        if (!checkValueInOptions(value, options)) {
          value = options[0].value;
        }

        return (
          <MemoizedSelect
            disabled={disabled || loading}
            key={name}
            name={name}
            value={value}
            onChange={inputChange}
            options={options} />
        );
      })}
    </div>
  );
};

export default AppleMusicFeedSettings;
