
import React, { useMemo } from 'react';
import SelectSearch from 'react-select-search';
import './material-music-select.css';

const MaterialMusicSelect = ({
  className,
  options,
  onChange,
  name,
  ...rest
}) => {
  const adaptedOptions = useMemo(() => options.map(option => ({
    name: option.label,
    value: option.value
  })), [options]);

  const onChangeHandler = value => {
    onChange({
      target: {
        name,
        value
      }
    })
  };

  return (
    <SelectSearch
      {...rest}
      onChange={onChangeHandler}
      className={`select-search ${className}`}
      options={adaptedOptions} />
  );
};

export default MaterialMusicSelect;
