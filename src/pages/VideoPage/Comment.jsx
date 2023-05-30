import { useState, useEffect } from 'react';

import SortIcon from '@mui/icons-material/Sort';

import * as cookie from '../../common/cookie';
import * as api from '../../services/comment_api';

import CommentAdd from './CommentAdd';
import CommentList from './CommentList';

import './Comment.scss';

function Comment({ videoId }) {
  const [updateCounter, setUpdateCounter] = useState(0);
  const [commentCount, setcommentCount] = useState(0);
  const fetchComment = async () => {
    const response = await api.getCommentCount(videoId);
    setcommentCount(response);
  };
  useEffect(() => {
    if (videoId) {
      fetchComment();
    }
  }, [videoId]);

  return (
    <div className="Comment">
      <div className="head">
        <div className="commentCount">댓글 {commentCount}개</div>
        <div className="commentSort">
          <div className="icon">
            <SortIcon />
          </div>
          <div className="sortTxt">정렬 기준</div>
        </div>
      </div>
      <div className="commentAdd">
        <CommentAdd
          videoId={videoId}
          onSubmit={() => {
            fetchComment();
            setUpdateCounter(val => ++val);
          }}
        />
      </div>
      <div className="commentList">
        <CommentList videoId={videoId} updateCounter={updateCounter} />
      </div>
    </div>
  );
}
export default Comment;
