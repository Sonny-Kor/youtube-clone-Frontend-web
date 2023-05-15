import React, { useState } from 'react';
import cx from 'classnames';

import { formatCountNumber, formatTime, formatComma } from '../../common/functions';

import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

import CheckBox from '../../common/CheckBox/CheckBox';
import HoverItem from './HoverItem';
import './StudioVideoItem.scss';

function StudioVideoItem({
  video_title,
  thumb_img,
  video_describe,
  video_status,
  video_copyright,
  created_time,
  view_count,
  comment_count,
  like_count,
  currentCheck,
  onChange
}) {
  const [isHoveredVideoItem,setHoveredVideoItem] = useState(false);

  const handleMouseEnter = () => {
    setHoveredVideoItem(true);
  }
  const handleMouseLeave = () => {
    setHoveredVideoItem(false);
  }

  const statusComponent = video_status ? <RemoveRedEyeIcon style={{color: 'green'}}/> : <RemoveRedEyeIcon style={{color: 'gray'}}/>


  return (
    <div className={'StudioVideoItem'} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="tableRow">
        <div className="cell checkbox">
          <CheckBox name={video_title} onChange={onChange}/>
        </div>
        <div className="cell summary">
          <div className="cellVideo">
            <div className="thumbnailWrapper">
              <img
                className="thumbnail"
                src={thumb_img}
                alt="thumbnail"
              ></img>
            </div>
            <div className="cellvideoText">
              <div className="cellvideoTitle">{video_title}</div>
              <div className={cx("cellvideoDescribe", {isHovered: isHoveredVideoItem})}>
                {isHoveredVideoItem ?  <HoverItem/>: <span>{video_describe}</span>}
              </div>
            </div>
          </div>
        </div>
        <div className="cell status">{statusComponent}{video_status === true ?  '공개' :  '비공개'}</div>
        <div className="cell copyright">{video_copyright === true ? '저작권' : '없음'}</div>
        <div className="cell date">
          <div className="cellDate">
            <div>{formatTime(created_time)}</div>
            <div>게시 날짜</div>
          </div>
        </div>
        <div className="cell view">{formatCountNumber(view_count)}</div>
        <div className="cell comment">{formatComma(comment_count)}</div>
        <div className="cell like">
          <div className="likeCell">
            <div className="likePercent">100.0%</div>
            <div className="likeCount">좋아요 {formatComma(like_count)}개</div>
            <div className="likeRate">
              <progress value="90" max="100" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudioVideoItem;