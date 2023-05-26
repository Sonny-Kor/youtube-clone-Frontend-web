import React from 'react';

import Header from '../../common/Header/Header';
import AsideBar from '../../common/AsideBar/AsideBar';

import PlayListTitle from './PlayListTitle';
import PlayList from './PlayList';

import './PlayListPage.scss';

function PlayListPage(props) {
  return (
    <div className="PlayListPage">
      <Header />
      <div className="content">
        <AsideBar />
        <div className="playListWrapper">
          <div className="titleWrapper">
            <PlayListTitle />
          </div>
          <div className="videoWrapper">
            <PlayList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayListPage;
