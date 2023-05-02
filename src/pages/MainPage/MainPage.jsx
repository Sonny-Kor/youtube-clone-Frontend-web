import React from 'react';
import './MainPage.scss';

import VideoList from "./VideoList";
import Header from "../../common/Header/Header"
import AsideBar from "../../common/AssideBar/AsideBar"
function MainPage(props) {
  return <div className="MainPage">
    <Header />
    <div className='content'>
      <AsideBar />
      <div className="videoListWrapper">
        <VideoList />
      </div>
    </div>
  </div>;
}


export default MainPage;