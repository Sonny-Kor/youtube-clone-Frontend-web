import React, { useEffect, useState } from 'react';

import * as api from '../../services/api';
import * as s_api from '../../services/studioPage_api'

import StudioVideoItem from './StudioVideoItem';
import CheckBox from '../../common/CheckBox/CheckBox';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import './StudioVideoList.scss';

function StudioVideoList( {onHandleSelection}) {
  const [currentCheck, setCurrentCheck] = useState([]);
  const [videoList, setvideoList] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const myvideo_response = await s_api.getChannelVideo();
        console.log(myvideo_response)
        setvideoList(myvideo_response);

        const initCheck = [];
        setCurrentCheck(initCheck);
        
      } catch (error) {
        console.error('data fetch error', error);
      }
    };
    fetchData();
  }, []);

  const handleChange = (videoId, checked) => {
    setCurrentCheck((prevCheck) => {
      if (checked) {
        onHandleSelection([...prevCheck, videoId]);
        return [...prevCheck, videoId];
      } else {    
        onHandleSelection(prevCheck.filter((id) => id !== videoId));
        return prevCheck.filter((id) => id !== videoId);
      }
    });
  };
  const allCheckChange = (name, checked) => {
    onHandleSelection(checked ? videoList.map((item) => item.video_id) : []);
    setCurrentCheck(checked ? videoList.map((item) => item.video_id) : []);
  };

  const handleSortClick = () => {
    const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    setSortOrder(newSortOrder);
    const sortedList = [...videoList].sort((a, b) => {
      const compareResult =
        sortOrder === 'asc'
          ? new Date(a.created_time) - new Date(b.created_time)
          : new Date(b.created_time) - new Date(a.created_time);
      return compareResult;
    });
    setvideoList(sortedList);
  };

  return (
    <div className="StudioVideoList">
      <div className="tableRow header">
        <div className="cell checkbox">
          <CheckBox name="all" onChange={allCheckChange} />
        </div>
        <div className="cell summary">동영상</div>
        <div className="cell status">공개 상태</div>
        <div className="cell copyright">제한사항</div>
        <div className="cell date">
          날짜
          <ArrowDownwardIcon
            className={`arrowIcon ${sortOrder === 'asc' ? 'asc' : 'desc'}`}
            onClick={handleSortClick}/>
        </div>
        <div className="cell view">조회수</div>
        <div className="cell comment">댓글</div>
        <div className="cell like">좋아요(싫어요 대비)</div>
      </div>
      <div>
        {videoList.map((video, index) => (
          <StudioVideoItem
            checked={currentCheck.find((id) => id === video.videoId)}
            key={video.videoId}
            video_id={video.videoId}
            video_title={video.title}
            thumb_img={`http://118.34.185.100:54114//media/vods/${video.videoId}/thumbnail.jpg`}
            video_describe={video.description}
            video_status={true}
            video_copyright={'없음'}
            created_time={video.createdTime}
            view_count={video.viewCount}
            comment_count={'12'}
            like_count={`12`}
            onChange={handleChange}
          />
        ))}
      </div>
    </div>
  );
}

export default StudioVideoList;
