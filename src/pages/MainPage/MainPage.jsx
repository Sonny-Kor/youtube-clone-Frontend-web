import React from 'react';

import Header from '../../common/Header/Header';
import AsideBar from '../../common/AsideBar/AsideBar';

import VideoList from './VideoList';

import './MainPage.scss';

function MainPage(props) {
  return (
    <div className="MainPage">
      <Header />
      <div className="content">
        <AsideBar />
        <div className="videoListWrapper">
          <VideoList />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
