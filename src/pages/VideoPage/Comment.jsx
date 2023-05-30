import { useState, useEffect } from 'react';

import SortIcon from '@mui/icons-material/Sort';

import * as cookie from '../../common/cookie';
import * as api from '../../services/comment_api';

import CommentAdd from './CommentAdd';
import CommentList from './CommentList';

import './Comment.scss';

function Comment({ videoId }) {
  const [commentCount, setcommentCount] = useState(0);
  useEffect(() => {
    const fetchComment = async () => {
      const response = await api.getCommentCount(videoId);
      setcommentCount(response);
    };
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
        <CommentAdd />
      </div>
      <div className="commentList">
        <CommentList />
      </div>
    </div>
  );
}
export default Comment;
