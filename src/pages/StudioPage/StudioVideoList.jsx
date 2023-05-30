import React, { useEffect, useState } from 'react';

import * as api from '../../services/api';

import StudioVideoItem from './StudioVideoItem';
import CheckBox from '../../common/CheckBox/CheckBox';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import './StudioVideoList.scss';

function StudioVideoList() {
  const [currentCheck, setCurrentCheck] = useState([]);
  const [videoList, setvideoList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        //const response = await api.getStudioVideoList();
        //setvideoList(response);

        const initCheck = [];
        // const initCheck = [response.map(video => ({
        //   name: video.video_title,
        //   isChecked: false
        // })]);
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
        console.log([...prevCheck, videoId]);
        return [...prevCheck, videoId];
      } else {
        return prevCheck.filter((id) => id !== videoId);
      }
      // const updatedCheck = prevCheck.map(item => {
      //   if (item.name === name) {
      //     return {
      //       ...item,
      //       isChecked: checked
      //     };
      //   }
      //   return item;
      // });
      // return updatedCheck;
    });
  };
  const allCheckChange = (name, checked) => {
    setCurrentCheck(checked ? videoList.map((item) => item.video_id) : []);
    // setCurrentCheck(prevCheck =>
    //   prevCheck.map(item => ({
    //     ...item,
    //     isChecked: checked
    //   }))
    //   );
  };
  console.log(currentCheck);
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
          <ArrowDownwardIcon className="arrowIcon" />
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
