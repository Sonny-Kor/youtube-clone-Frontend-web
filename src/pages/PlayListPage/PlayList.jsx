import React, { useEffect, useState } from 'react';

import * as api from '../../services/api';

import PVideoItem from './PVideoItem';
import SortIcon from '@mui/icons-material/Sort';
import './PlayList.scss';

function PlayList(props) {
  let videoList = api.getVideoList();

  return (
    <div className="PlayList">
      <div className="header">
        <button className="btnSort">
          <SortIcon />
          <div className="btnText">정렬</div>
        </button>
      </div>
      <ul className="pVideoList">
        {videoList.map((video, index) => (
          <PVideoItem
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

export default PlayList;
