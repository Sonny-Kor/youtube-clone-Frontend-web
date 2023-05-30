import { useEffect, useState } from 'react';
import { formatCountNumber, formatTime } from '../../common/functions';
import axios from 'axios';

import * as cookie from '../../common/cookie';
import * as api from '../../services/comment_api';
import ReCommentList from './ReCommentList';

import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './CommentItem.scss';

function CommentItem({
  videoId,
  commentId,
  contents,
  createdTime,
  updatedTime,
  likeCount,
  like, //좋아요 상태
  channelId,
  channelName,
  channelProfileImg
}) {
  createdTime = new Date(createdTime).getTime() / 1000;

  const postCommentLikeCount = async () => {
    console.log('post');
    await api.postCommentLikeCount(commentId);
  };

  const deleteCommentLikeCount = async () => {
    console.log('delete');
    await api.deleteCommentLikeCount(commentId);
  };

  const [reCommentArea, setReCommentArea] = useState(false);
  const toggleTrueWriteArea = e => {
    setReCommentArea(reComment => true);
  };
  const toggleWriteArea = e => {
    setReCommentArea(reComment => !reComment);
    setReCommentArea('');
    e.target.value = null;
  };

  const [reCommentKeyWord, setReCommentKeyWord] = useState(''); //commentKeyWord : 댓글 내용
  const onChangeHandler = e => {
    setReCommentKeyWord(e.target.value);
  };

  const postReComment = async () => {
    console.log('post');
    await api.postReComment(commentId, reCommentKeyWord);
  };

  const [reCommentCount, setReCommentCount] = useState(0);
  const [isreComment, setIsreComment] = useState(false);
  const getReCommenCount = async () => {
    console.log('get');
    const response = await api.getReComment(commentId);
    setReCommentCount(response.numberOfElements);
    if (response.numberOfElements > 0) {
      setIsreComment(true);
    } else {
      setIsreComment(false);
    }
  };
  useEffect(() => {
    getReCommenCount();
  });

  const [toggleReComment, setToggleReComment] = useState(false);
  const spreadReComment = () => {
    setToggleReComment(toggle => !toggle);
  };
  return (
    <div className="CommentItem">
      <div className="profileCircleWrapper">
        <img
          className="profileCircle"
          src={channelProfileImg}
          alt="profileCircle"
        ></img>
      </div>
      <div className="commentWrapper">
        <div className="itemHead">
          <div className="userName">{channelName}</div>
          <div className="createdTime">{formatTime(createdTime)}</div>
        </div>
        <div className="commentContent">{contents}</div>
        <div className="commentOption">
          <button
            className="likeWrapper"
            onclick={!like ? postCommentLikeCount : deleteCommentLikeCount}
          >
            <div className="icon">
              {!like && <ThumbUpOffAltIcon />} {like && <ThumbUpIcon />}
            </div>
            <div className="likeCount">{formatCountNumber(likeCount)}</div>
          </button>
          <button className="reComment" onClick={toggleTrueWriteArea}>
            답글
          </button>
        </div>
        {reCommentArea && (
          <div className="reCommentWrapper">
            <div className="profileCircle"></div>
            <div className="inputArea">
              <input
                className="reCommentInput"
                type="text"
                placeholder="답글 추가..."
                onChange={onChangeHandler}
                value={reCommentKeyWord}
              ></input>

              <div className="reCommentOption">
                <button className="delete" onClick={toggleWriteArea}>
                  취소
                </button>
                <button className="insert" onClick={postReComment}>
                  댓글
                </button>
              </div>
            </div>
          </div>
        )}
        {isreComment && (
          <button className="reCommentArea" onClick={spreadReComment}>
            <div className="icon">
              {' '}
              <KeyboardArrowDownIcon />{' '}
            </div>
            <div className="countReComment">답글 {reCommentCount}개</div>
          </button>
        )}
        {toggleReComment && (
          <div className="reCommentListWrapper">
            <ReCommentList videoId={videoId} commentId={commentId} />
          </div>
        )}
      </div>
    </div>
  );
}
export default CommentItem;
