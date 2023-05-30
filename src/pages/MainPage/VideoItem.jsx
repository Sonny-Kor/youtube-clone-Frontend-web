import { Link} from 'react-router-dom';
import { formatCountNumber, formatTime } from '../../common/functions';

import VideoItemMore from './VideoItemMore';

import './VideoItem.scss';

function VideoItem({
  key,
  title,
  videoId,
  profileImg,
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
    <Link
      className="VideoItem"
      onClick={onClickHandler}
      to = {`/watch/${videoId}`}
    >
      <div className="thumbnailWrapper">
        <img className="thumbnail" src={`http://118.34.185.100:54114//media/vods/${videoId}/thumbnail.jpg`}
         alt="thumbnail"></img>
      </div>
      <div className="InfoWrapper">
        <img className="ProfileCircle" src={profileImg} alt="profileImg"></img>
        <div className="TitleWrapper">
          <div className="InnerTitle">
            <div className="VideoTitle">{title}</div>
            <div className="ChannelName">{channelTitle}</div>
            <div className="DescriptionWrapper">
              <div className="ViewCounter">
                조회수 {formatCountNumber(viewCount)}
              </div>
              <div className="dot">·</div>
              <div className="UploadedTime">{formatTime(createdTime)}</div>
            </div>
          </div>
          <div className="MoreArea">
            <VideoItemMore />
          </div>
        </div>
      </div>
    </Link>
  );
}
export default VideoItem;
