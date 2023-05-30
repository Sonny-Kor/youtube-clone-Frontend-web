import React, { useEffect, useState } from 'react';
import axios from 'axios';

import * as api from '../../services/api';

import VideoItem from './VideoItem';

import './VideoList.scss';

function VideoList(props) {
  const [videoList, setVideoList] = useState([]);

  const fetchVideoList = async () => {
    console.log('fetch');
    const response = await api.getVideoList();
    console.log(response);
    setVideoList(response.videos);
  };
  useEffect(() => {
    fetchVideoList();
  }, []);

  // 비디오 길이 추가
  return (
    <ul className="VideoList">
      {videoList.map((video, index) => (
        <VideoItem
          key={video.id}
          title={video.title}
          channelId={video.id}
          channelTitle={video.channelName}
          videoId={video.id}
          profileImg={video.channelImg}
          viewCount={video.viewCount}
          createdTime={video.createdTime}
        />
      ))}
    </ul>
  );
}

export default VideoList;
