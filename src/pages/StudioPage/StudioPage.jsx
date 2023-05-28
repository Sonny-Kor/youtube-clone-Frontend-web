import React from 'react';

import StudioVideoTable from '../StudioPage/StudioVideoTable';
import Header from '../../common/Header/Header';
import StudioAsideBar from './StudioAsideBar';
import './StudioPage.scss';

function StudioPage(props) {
  return (
    <div className="StudioPage">
      <Header/>
        <StudioAsideBar className="asideBar"/>
        <div className='tableWrapper'>
          <StudioVideoTable />
        </div>
    </div>
  );
}

export default StudioPage;
