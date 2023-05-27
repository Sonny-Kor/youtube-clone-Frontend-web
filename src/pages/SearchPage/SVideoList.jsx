import React, { useEffect, useState } from 'react';

import * as api from '../../services/api';

import SVideoItem from './SVideoItem';

import './SVideoList.scss';

function SVideoList(props) {
  let videoList = api.getVideoList();

  return (
    <ul className="SVideoList">
      {videoList.map((video, index) => (
        <SVideoItem
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
  );
}

export default SVideoList;
