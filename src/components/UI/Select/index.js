
import React from 'react';

import './select.css';

const Select = ({
  options = [],
  ...rest
}) => (
  <div className='select'>
    <select {...rest}>
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
