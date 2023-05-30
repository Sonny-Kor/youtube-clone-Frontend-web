import React, { useEffect, useState } from 'react';

import * as api from '../../services/api';

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
        //const response = await api.getStudioVideoList();
        //setvideoList(response);

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
            checked={currentCheck.find((id) => id === video.video_id)}
            video_id={video.video_id}
            video_title={video.video_title}
            thumb_img={video.thumb_img}
            video_describe={video.video_describe}
            video_status={video.video_status}
            video_copyright={video.video_copyright}
            created_time={video.created_time}
            view_count={video.view_count}
            comment_count={video.comment_count}
            like_count={video.like_count}
            onChange={handleChange}
          />
        ))}
      </div>
    </div>
  );
}

export default StudioVideoList;
