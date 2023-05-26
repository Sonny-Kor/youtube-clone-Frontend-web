import React from 'react';

import Header from '../../common/Header/Header';
import NowVideoItem from './NowVideoItem';
import Comment from './Comment';
import RVideoList from './RVideoList';

import './VideoPage.scss';

function VideoPage() {
  return (
    <div className="VideoPage">
      <Header />
      <div className="videoBody">
        <div className="videoContent">
          <NowVideoItem />
          <Comment />
        </div>
        <div className="rvideoListWrapper">
          <RVideoList />
        </div>
      </div>
    </div>
  );
}
export default VideoPage;
