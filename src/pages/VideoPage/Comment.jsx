import axios from 'axios';
import {useLocation } from 'react-router-dom';
import {useState, useEffect} from 'react';

import * as cookie from '../../common/cookie';
import * as api from '../../services/comment_api';

import CommentAdd from './CommentAdd';
import CommentList from './CommentList';

import SortIcon from '@mui/icons-material/Sort';

import './Comment.scss';

function Comment() {

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const videoId = params.get('id');

  const access_token = cookie.getCookie('access_token');
  const header = {
    Authorization: 'Bearer' + access_token,
  };
  
  const [commentCount, setcommentCount] = useState(0);
  const fetchComment = async () => {
    console.log('fetch');
    const response = await api.getCommentCount(videoId, header);
    console.log(response);
    setcommentCount(response);
  };
  useEffect(() => {
    fetchComment();
  });

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
