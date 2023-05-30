import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'

import * as api from '../../services/comment_api';

import ReCommentItem from './ReCommentItem';

import './ReCommentList.scss';

function ReCommentList({commentId, header}) {
  const [reCommentList, setReCommentList] = useState([]);

  const location = useLocation();
  const params =  new URLSearchParams(location.search);
  const videoId = params.get("id");

  const fetchReCommentList = async () => {
    console.log('fetch');
    const response = await api.getReComment(commentId, header);
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
