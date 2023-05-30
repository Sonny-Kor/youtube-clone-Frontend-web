import React, { useEffect, useState } from 'react';

import * as api from '../../services/comment_api';

import ReCommentItem from './ReCommentItem';

import './ReCommentList.scss';

function ReCommentList({ videoId, commentId }) {
  const [reCommentList, setReCommentList] = useState([]);

  const fetchReCommentList = async () => {
    console.log('fetch');
    const response = await api.getReComment(commentId);
    console.log(response);
    setReCommentList(response.comments);
  };
  useEffect(() => {
    fetchReCommentList();
  }, [videoId]);

  // 비디오 길이 추가
  return (
    <ul className="commentList">
      {reCommentList.map((comments, index) => (
        <ReCommentItem
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

export default ReCommentList;
