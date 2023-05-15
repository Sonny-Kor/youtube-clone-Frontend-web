import React, { useState } from 'react';

import * as api from '../../services/api';

import StudioVideoItem from './StudioVideoItem';

import './StudioVideoList.scss';

function StudioVideoList() {
  const [currentCheck, setCurrentCheck] = useState([]);

  const handleChange = (name, checked) => {
    if (checked) {
      setCurrentCheck((prevCheck) => [...prevCheck, name]);
    } else {
      setCurrentCheck((prevCheck) => prevCheck.filter((item) => item !== name));
    }
    
  };
  console.log(currentCheck);
  let studiovideoList = api.getStudioVideoList();
  return (
    <div className="StudioVideoList">
      {studiovideoList.map((video, index) => (
        <StudioVideoItem
        video_title={video.video_title}
        thumb_img={video.thumb_img}
        video_describe={video.video_describe}
        video_status={video.video_status}
        video_copyright={video.video_copyright}
        created_time={video.created_time}
        view_count={video.view_count}
        comment_count={video.comment_count}
        like_count={video.like_count}
        currentCheck={currentCheck}
        onChange={handleChange}
        />
      ))}
    </div>
  );
}

export default StudioVideoList;