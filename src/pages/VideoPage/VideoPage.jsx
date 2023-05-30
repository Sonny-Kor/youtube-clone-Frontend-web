import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Header from '../../common/Header/Header';
import NowVideoItem from './NowVideoItem';
import Comment from './Comment';
import RVideoList from './RVideoList';

import * as api from '../../services/videoPage_api';

import './VideoPage.scss';

function VideoPage() {
  const [video, setVideo] = useState([]);
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const videoId = params.get('id');

  useEffect(() => {
    const fetchNowVideo = async id => {
      const response = await api.getVideo(id);
      setVideo(response);
    };
    if (videoId) {
      fetchNowVideo(videoId);
    }
  }, [videoId]);

  return (
    <div className="VideoPage">
      <Header />
      <div className="videoBody">
        <div className="videoContent">
          <NowVideoItem
            videoId={video.videoId}
            videoSec={video.Sec}
            channelId={video.channelId}
            channelName={video.channelName}
            profileImg={video.channelProfileImg}
            channelSubscriberCount={video.channelSubscriberCount}
            title={video.title}
            description={video.description}
            createdTime={video.createdTime}
            viewCount={video.viewCount}
            likeCount={video.likeCount}
            qualityList={video.qualityList}
            like={video.like}
          />
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
