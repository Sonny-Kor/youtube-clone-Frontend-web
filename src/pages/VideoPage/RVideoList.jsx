import React, { useEffect, useState } from 'react';

import * as api from '../../services/api';

import RVideoItem from './RVideoItem';
import './RVideoList.scss';

function RVideoList(props) {
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

  return (
    <div className="RVideoList">
      <ul className="pVideoList">
        {videoList.map((video, index) => (
          <RVideoItem
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
    </div>
  );
}

export default RVideoList;
