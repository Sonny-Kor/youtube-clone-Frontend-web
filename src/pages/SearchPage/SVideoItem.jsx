// import { Link } from 'react-router-dom';

import { formatCountNumber, formatTime } from '../../common/functions';

import SVideoItemMore from './SVideoItemMore';

import './SVideoItem.scss';

function SVideoItem({
  title,
  videoId,
  thumbnail,
  profileImg,
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
  return (
    <a
      className="SVideoItem"
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
              <div className="MoreArea">
                <SVideoItemMore />
              </div>
            </div>
            <div className="ChannelNameWrapper">
              <img
                className="ProfileCircle"
                src={profileImg}
                alt="profileImg"
              ></img>
              <div className="channelName">{channelTitle}</div>
            </div>
            <div className="DescriptionWrapper">
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
  );
}
export default SVideoItem;
