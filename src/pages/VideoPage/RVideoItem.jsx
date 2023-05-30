import { Link } from 'react-router-dom';

import { formatCountNumber, formatTime } from '../../common/functions';

import { useState } from 'react';
import RVideoItemMore from './RVideoItemMore';

import './RVideoItem.scss';

function RVideoItem({
  key,
  title,
  videoId,
  channelTitle,
  viewCount,
  createdTime,
}) {
  createdTime = new Date(createdTime).getTime() / 1000;

  const onClickHandler = (e) => {
    console.log(e);
    if (e.target.className === 'btnMore') {
      console.log('버튼 클릭');
      e.preventDefault();
    }
  };

  return (
    <div className="RVideoItem">
      <Link
        className="cVideoItem"
        onClick={onClickHandler}
        to={`/watch/${videoId}`}
        key={key}
        state={{ videoId }}
      >
        <div className="thumbnailWrapper">
          <img className="thumbnail" src={`http://118.34.185.100:54114//media/vods/${videoId}/thumbnail.jpg`} 
          alt="thumbnail"></img>
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
      </Link>
      <div className="MoreArea">
        <RVideoItemMore />
      </div>
    </div>
  );
}
export default RVideoItem;
