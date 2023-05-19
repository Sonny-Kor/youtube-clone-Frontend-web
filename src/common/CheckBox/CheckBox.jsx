import cx from 'classnames';
import { useState } from 'react';
import './CheckBox.scss';

function CheckBox({ name, value, onChange }) {
  const handleChange = (event) => {
    const checked = event.target.checked;
    onChange(name, checked);
  };

  return (
    <div className="CheckBox">
      <input
        type="checkbox"
        checked={value}
        onChange={handleChange}
        name={name}
      />
    </div>
  );
}
export default CheckBox;
