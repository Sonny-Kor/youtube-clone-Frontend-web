
import cx from 'classnames';
import { useState } from 'react';
import './CheckBox.scss';

function CheckBox({name, value = false, onChange}) {

  const onChangeHandler = () => {
    onChange({
      target:{
        name: name,
        value: value,
      }
    })
  };

  return (
    <div className="CheckBox">
      <input type='checkbox' />
    </div>
  )
}
export default CheckBox;