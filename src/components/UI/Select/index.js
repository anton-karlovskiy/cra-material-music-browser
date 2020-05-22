
import React from 'react';

import './select.css';

const Select = ({
  label,
  options = [],
  id = 'select',
  ...rest
}) => (
  <div className='select'>
    {label && <label for={id}>{label}</label>}
    <select
      id={id}
      {...rest}>
      {options.map(option => (
        <option
          key={option.value}
          value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

export default Select;
