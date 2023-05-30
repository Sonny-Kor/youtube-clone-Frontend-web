import React, { useEffect, useState } from 'react';

import * as api from '../../services/comment_api';

import CommentItem from './CommentItem';

import './CommentList.scss';

function CommentList({ videoId, updateCounter }) {
  console.log(updateCounter);
  const [commentList, setcommentList] = useState([]);

  const fetchCommentList = async () => {
    console.log('fetch');
    const response = await api.getCommentList(videoId);
    console.log(response);
    setcommentList(response.comments);
  };
  useEffect(() => {
    if (videoId) {
      fetchCommentList();
    }
  }, [videoId, updateCounter]);

  // 비디오 길이 추가
  return (
    <ul className="commentList">
      {commentList.map((comments, index) => (
        <CommentItem
          videoId={videoId}
          commentId={comments.commentId}
          contents={comments.contents}
          createdTime={comments.createdTime}
          updatedTime={comments.updatedTime}
          likeCount={comments.likeCount}
          like={comments.like}
          channelId={comments.channelId}
          channelName={comments.channelName}
          channelProfileImg={comments.channelProfileImg}
        />
      ))}
    </ul>
  );
}

export default CommentList;
