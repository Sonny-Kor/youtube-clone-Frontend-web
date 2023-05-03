import { formatCountNumber, formatTime } from '../../common/functions';

import './VideoItem.scss';
import VideoItemMore from './VideoItemMore';
// import { Link } from 'react-router-dom';

function VideoItem({title, videoId, thumbnail, profileImg, channelTitle, viewCount, createdTime }) {
  
  const onClickHandler = e => {
    console.log(e)
    if (e.target.className === 'btnMore') {
      console.log("버튼 클릭")
      e.preventDefault();
    }
  }
  return (
    <a className="VideoItem" onClick={onClickHandler} href={"https://youtu.be/" + videoId}>
      <div className='thumbnailWrapper'>
        <img className='thumbnail' src={thumbnail} alt='thumbnail' ></img>
      </div>
      <div className='InfoWrapper'>
        <img className='ProfileCircle' src={profileImg} alt='profileImg'>
        </img>
        <div className='TitleWrapper'>
          <div className='InnerTitle'>
            <div className='VideoTitle'>{title}</div>
            <div className='ChannelName'>{channelTitle}</div>
            <div className='DescriptionWrapper'>
              <div className='ViewCounter'>조회수 {formatCountNumber(viewCount)}</div>
              <div className='dot'>·</div>
              <div className='UploadedTime'>{formatTime(createdTime)}</div>
            </div>
          </div>
          <div className='MoreArea'>
            <VideoItemMore />
          </div>
        </div>
      </div>
    </a>
  );
}
export default VideoItem;