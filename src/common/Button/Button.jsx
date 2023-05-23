import React from 'react';
import './Button.scss';


function Button ({children, description }) {
  
  return (
    <div className="Button">
      {children}
      {description &&
        <div className="description">{description}</div>
      }
    </div>
  );
};

export default Button;