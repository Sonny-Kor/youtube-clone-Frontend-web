// import { Link } from 'react-router-dom';

import { formatCountNumber, formatTime } from '../../common/functions';

import NowVideoItemMore from './NowVideoItemMore';

import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import './NowVideoItem.scss';

function NowVideoItem({
  title,
  videoId,
  thumbnail,
  profileImg,
  channelTitle,
  viewCount,
  createdTime,
}) {
  return (
    <div className="NowVideoItem">
      <div className="nowThumbnailWrapper">
        <img className="NowThumbnail" src={thumbnail} alt="thumbnail"></img>
      </div>
      <div className="nowInfoWrapper">
        <div className="videoTitle">제목</div>
        <div className="channelWrapper">
          <div className="channelInfo">
            <div className="profileWrapper">
              <img
                className="ProfileCircle"
                src={profileImg}
                alt="profileImg"
              ></img>
              <div className="nameWrapper">
                <div className="ChannelName">채널 이름</div>
                <div className="subscriberCount">구독자 </div>
              </div>
            </div>
            <div className="btnWrapper">
              <button className="subscribeBtn">구독</button>
            </div>
          </div>

          <div className="morVideoFunc">
            <div className="likeWrapper">
              <div className="icon">
                <ThumbUpOffAltIcon />
              </div>
              <div className="likeCount">123</div>
            </div>
            <div className="moreArea">
              <NowVideoItemMore />
            </div>
          </div>
        </div>
        <div className="descriptionWrapper">
          <div className="videoInfor">
            <div className="viewCounter">조회수 123만회</div>
            <div className="uploadedTime"> 3달 전</div>
          </div>
          <div className="descriptionContent">설명설명</div>
        </div>
      </div>
    </div>
  );
}
export default NowVideoItem;
