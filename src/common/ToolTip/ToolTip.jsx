import React from 'react';
import './ToolTip.scss';


function ToolTip ({children, description }) {
  
  return (
    <div className="ToolTip">
      {children}
      {description &&
        <div className="description">{description}</div>
      }
    </div>
  );
};

export default ToolTip;