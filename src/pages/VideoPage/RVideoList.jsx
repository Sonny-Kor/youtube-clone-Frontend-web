import React, { useEffect, useState } from 'react';

import * as api from '../../services/api';

import RVideoItem from './RVideoItem';
import './RVideoList.scss';

function RVideoList(props) {
  let videoList = api.getVideoList();

  return (
    <div className="RVideoList">
      <ul className="pVideoList">
        {videoList.map((video, index) => (
          <RVideoItem
            key={video.video_id}
            title={video.title}
            thumbnail={video.thumb_img}
            channelId={video.channelId}
            channelTitle={video.channel_title}
            videoId={video.video_id}
            profileImg={video.profile_img}
            viewCount={video.view_count}
            createdTime={video.created_time}
          />
        ))}
      </ul>
    </div>
  );
}

export default RVideoList;
