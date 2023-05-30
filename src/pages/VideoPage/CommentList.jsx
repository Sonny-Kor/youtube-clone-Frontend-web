import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom'

import * as api from '../../services/comment_api';

import CommentItem from './CommentItem';

import './CommentList.scss';

function CommentList(props) {
  const [commentList, setcommentList] = useState([]);

  const location = useLocation();
  const params =  new URLSearchParams(location.search);
  const videoId = params.get("id");

  const fetchCommentList = async () => {
    console.log('fetch');
    const response = await api.getCommentList(videoId);
    console.log(response);
    setcommentList(response.comments);
  };
  useEffect(() => {
    fetchCommentList();
  }, [videoId]);

  // 비디오 길이 추가
  return (
    <ul className="commentList">
      {commentList.map((comments, index) => (
        <CommentItem
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
