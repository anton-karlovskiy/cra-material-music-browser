
import React, { useState } from 'react';

import TextField from 'components/UI/TextField';
import './autocomplete-select.css';

const AutocompleteSelect = ({
  label,
  options = [],
  id = 'select',
  name,
  value,
  onChange,
  ...rest
}) => {
  const [tempValue, setTempValue] = useState(options.find(option => option.value === value)?.label);
  const onChangeHandler = event => {
    setTempValue(event.target.value);
  };

  const onBlurHandler = event => {
    const realValue = options.find(option => option.label === event.target.value)?.value || '';
    if (!realValue) setTempValue('');
    onChange({
      target: {
        name,
        value: realValue
      }
    });
  };

  return (
    <div className='select'>
      {label && <label for={id}>{label}</label>}
      <TextField
        autoComplete='off'
        onBlur={onBlurHandler}
        type='text'
        id={id}
        name={name}
        value={tempValue}
        onChange={onChangeHandler}
        {...rest}
        list='select-list' />
      <datalist id='select-list'>
        {options.map(option => (
          <option key={option.value}>
            {option.label}
          </option>
        ))}
      </datalist>
    </div>
  );
};

export default AutocompleteSelect;
