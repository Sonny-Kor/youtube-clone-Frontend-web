import { formatCountNumber, formatTime } from '../../common/functions';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

import * as cookie from '../../common/cookie';
import * as api from '../../services/comment_api';

import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';

import NowVideoItemMore from './NowVideoItemMore';
import './NowVideoItem.scss';

function NowVideoItem({
  videoId,
  videoSec,
  channelId,
  channelName,
  profileImg,
  channelSubscriberCount,
  title,
  description,
  createdTime,
  viewCount,
  likeCount,
  qualityList,
  like,
}) {
  createdTime = new Date(createdTime).getTime() / 1000;
  const access_token = cookie.getCookie('access_token');
  const header = {
    Authorization: 'Bearer' + access_token,
  };
  const postSubscribeCount = async () => {
    console.log('post');
    await api.postSubscribeCount(channelId, access_token, header);
  };

  const deleteSubscribeCount = async () => {
    console.log('delete');
    await api.deleteSubscribeCount(channelId, access_token, header);
  };

  const postVideoLikeCount = async () => {
    console.log('post');
    await api.postVideoLikeCount(videoId, access_token, header);
  };

  const deleteVideoLikeCount = async () => {
    console.log('delete');
    await api.deleteVideoLikeCount(videoId, access_token, header);
  };

  /*
  const myChannelId = atob(access_token).channelId;
  const [isSubscribe, setIsSubscribe] = useState(false);
  const fetchSubscribeList = async () => {
    console.log('fetch');
    const response = await api.getSubscribeList(channelId, myChannelId, channelId, header);
    console.log(response);
    setIsSubscribe(response.status);
  };
  useEffect(() => {
    fetchSubscribeList();
  });


  onClick={
    !isSubscribe ? postSubscribeCount : deleteSubscribeCount
  }
  {!isSubscribe && {<button className="subscribeBtn">구독</button>}} {isSubscribe && {<button className="subscribeBtn">구독중</button>}}}
*/
  return (
    <div className="NowVideoItem">
      <div className="nowThumbnailWrapper">
        <img
          className="NowThumbnail"
          src={`http://118.34.185.100:54114//media/vods/${videoId}/thumbnail.jpg`}
          alt="thumbnail"
        ></img>
        <div classaName="playBtnWrapper">
          <div className="playBar"></div>
          <div className="plyaOptionWrapper">
            <div className="lOption">
              <div className="playBtn"></div>
              <div className="nextBtn"></div>
              <div className="soundBtn"></div>
              <div className="timeDuration"></div>
            </div>
            <div className="rOpiton">
              <div className="fullScreenBtn"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="nowInfoWrapper">
        <div className="videoTitle">{title}</div>
        <div className="channelWrapper">
          <div className="channelInfo">
            <div className="profileWrapper">
              <img
                className="profileCircle"
                src={profileImg}
                alt="profileImg"
              ></img>
              <div className="nameWrapper">
                <div className="channelName">{channelName}</div>
                <div className="subscriberCount">
                  구독자 {formatCountNumber(channelSubscriberCount)}명
                </div>
              </div>
            </div>
            <div className="btnWrapper">
              <button className="subscribeBtn">구독</button>
            </div>
          </div>

          <div className="morVideoFunc">
            <button
              className="likeWrapper"
              onClick={!like ? postVideoLikeCount : deleteVideoLikeCount}
            >
              <div className="icon">
                {!like && <ThumbUpOffAltIcon />} {like && <ThumbUpIcon />}
              </div>
              <div className="likeCount">{formatCountNumber(likeCount)}</div>
            </button>
            <div className="moreArea">
              <NowVideoItemMore />
            </div>
          </div>
        </div>
        <div className="descriptionWrapper">
          <div className="videoInfor">
            <div className="viewCounter">
              조회수 {formatCountNumber(viewCount)}회
            </div>
            <div className="uploadedTime"> {formatTime(createdTime)}</div>
          </div>
          <div className="descriptionContent">{description}</div>
        </div>
      </div>
    </div>
  );
}
export default NowVideoItem;
