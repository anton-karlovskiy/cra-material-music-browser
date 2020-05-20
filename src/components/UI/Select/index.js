
import React from 'react';

import './select.css';

const Select = ({
  value,
  onChange,
  options = []
}) => (
  <div className='select'>
    <select
      value={value}
      onChange={onChange}>
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
