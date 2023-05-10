
import cx from 'classnames';
import { useState } from 'react';

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
    <div className="Checkbox">

    </div>
  )
}