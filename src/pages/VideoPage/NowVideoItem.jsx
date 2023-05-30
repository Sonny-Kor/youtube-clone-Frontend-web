import React, { useEffect, useState } from 'react';

import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';

import { formatCountNumber, formatTime } from '../../common/functions';
import VideoContentPlayer from '../../common/VideoContentPlayer/VideoContentPlayer';
import * as cookie from '../../common/cookie';
import * as api from '../../services/comment_api';

import NowVideoItemMore from './NowVideoItemMore';
import './NowVideoItem.scss';
import cx from 'classnames';

function NowVideoItem({
  videoId,
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
  like
}) {
  createdTime = new Date(createdTime).getTime() / 1000;
  const postSubscribeCount = async () => {
    console.log('post');
    await api.postSubscribeCount(channelId);
  };

  const deleteSubscribeCount = async () => {
    console.log('delete');
    await api.deleteSubscribeCount(channelId);
  };

  const postVideoLikeCount = async () => {
    console.log('post');
    await api.postVideoLikeCount(videoId);
  };

  const deleteVideoLikeCount = async () => {
    console.log('delete');
    await api.deleteVideoLikeCount(videoId);
  };

  const [isSubscribed, setSubscribed] = useState(false);
  const fetchSubscribeList = async () => {
    console.log('fetch');
    const response = await api.getSubscribed(channelId);
    console.log(response);
    setSubscribed(response.status);
  };
  useEffect(() => {
    fetchSubscribeList();
  });

  return (
    <div className="NowVideoItem">
      <div className="playerWrapper">
        <VideoContentPlayer
          className="player"
          mediaType="hls"
          mediaId={`http://118.34.185.100:54114/media/vods/${videoId}/master.m3u8`}
        />
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
              <button
                className={cx('subscribeBtn', { isSubscribed })}
                onClick={
                  !isSubscribed ? postSubscribeCount : deleteSubscribeCount
                }
              >
                {!isSubscribed ? '구독' : '구독중'}
              </button>
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
