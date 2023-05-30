import React, { useEffect, useState } from 'react';

import * as api from '../../services/api';

import SVideoItem from './SVideoItem';

import './SVideoList.scss';

function SVideoList(props) {
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
    <ul className="SVideoList">
      {videoList.map((video, index) => (
        <SVideoItem
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

export default SVideoList;
