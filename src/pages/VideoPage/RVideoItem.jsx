// import { Link } from 'react-router-dom';

import { formatCountNumber, formatTime } from '../../common/functions';

import { useState } from 'react';
import RVideoItemMore from './RVideoItemMore';

import './RVideoItem.scss';

function RVideoItem({
  title,
  videoId,
  thumbnail,
  channelTitle,
  viewCount,
  createdTime,
}) {
  const onClickHandler = (e) => {
    console.log(e);
    if (e.target.className === 'btnMore') {
      console.log('버튼 클릭');
      e.preventDefault();
    }
  };

  const [isDragVideo, setDragVideo] = useState(false);
  const toggleDragVideo = (e) => {
    setDragVideo((isDrag) => !isDrag);
  };

  return (
    <div className="RVideoItem">
      <a
        className="cVideoItem"
        onClick={onClickHandler}
        href={'https://youtu.be/' + videoId}
      >
        <div className="thumbnailWrapper">
          <img className="thumbnail" src={thumbnail} alt="thumbnail"></img>
        </div>
        <div className="InfoWrapper">
          <div className="TitleWrapper">
            <div className="InnerTitle">
              <div className="VideoTitleWrapper">
                <div className="VideoTitle">{title}</div>
              </div>
              <div className="ChannelName">{channelTitle}</div>
              <div className="descriptionWrapper">
                <div className="ViewCounter">
                  조회수 {formatCountNumber(viewCount)}
                </div>
                <div className="dot">·</div>
                <div className="UploadedTime">{formatTime(createdTime)}</div>
              </div>
            </div>
          </div>
        </div>
      </a>
      <div className="MoreArea">
        <RVideoItemMore />
      </div>
    </div>
  );
}
export default RVideoItem;
