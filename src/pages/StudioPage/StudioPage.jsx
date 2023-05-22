import React from 'react';

import StudioVideoTable from '../StudioPage/StudioVideoTable';
import StudioHeader from './StudioHeader';
import './StudioPage.scss';

function StudioPage(props) {
  return (
    <div className="StudioPage">
      <StudioHeader/>
        <div className='tableWrapper'>
          <StudioVideoTable />
        </div>
    </div>
  );
}

export default StudioPage;
