

import './VideoItem.scss';
import VideoItemMore from './VideoItemMore';
// import { Link } from 'react-router-dom';

function VideoItem({title, videoId, thumbnail, profileImg, channelTitle, viewCount, createdTime }) {
  

  const now = new Date();

  const formatViewCount = (views) =>{
    if (views < 1000) {
      return views;
    } else if (views < 10000){
      return parseInt(views / 100) / 10 + ' 천';
    } else if (views < 100000000){
      return parseInt(views / 1000) / 10 + ' 만';
    } else if (views < 1000000000000){
      return parseInt (views / 10000) / 10 + ' 억';
    }
    return views;
  }
  const formatTime = (createdTime) => {
    const diff = now.getTime() - createdTime * 1000;
    const minute = 60 * 1000;
    const hour = 60 * minute;
    const day = 24 * hour;
    const month = 30 * day;
    const year = 12 * month;

    if (diff < minute) {
      return "방금 전";
    } else if (diff < hour) {
      const minutes = Math.floor(diff / minute);
      return `${minutes}분 전`;
    } else if (diff < day) {
      const hours = Math.floor(diff / hour);
      return `${hours}시간 전`;
    } else if (diff < month) {
      const days = Math.floor(diff / day);
      return `${days}일 전`;
    } else if (diff < year) {
      const months = Math.floor(diff / month);
      return `${months}달 전`;
    } else {
      const years = Math.floor(diff / year);
      return `${years}년 전`;
    }
  }
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
              <div className='ViewCounter'>조회수 {formatViewCount(viewCount)}</div>
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