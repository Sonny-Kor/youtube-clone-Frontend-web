import React from 'react';

import Header from '../../common/Header/Header';
import AsideBar from '../../common/AsideBar/AsideBar';

import SVideoList from './SVideoList';

import './SearchPage.scss';

function SearchPage() {
  return (
    <div className="SearchPage">
      <Header />
      <div className="content">
        <AsideBar />
        <div className="videoListWrapper">
          <SVideoList />
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
