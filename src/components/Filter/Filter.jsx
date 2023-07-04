import React from 'react';
import PropTypes from 'prop-types';

export function Filter({ value, onChange }) {
  const handleFilterChange = (event) => {
  onChange(event.target.value);
};

  return (
    <input
      type="text"
      placeholder="Search contacts..."
      value={value}
      onChange={handleFilterChange}
    />
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
