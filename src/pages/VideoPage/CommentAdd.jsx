import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useLocation} from 'react-router-dom';

import * as cookie from '../../common/cookie';
import * as api from '../../services/comment_api';

import useInputs from '../../hooks/useInputs';

import './CommentAdd.scss';

function CommentAdd() {
  const [isWriteInput, setisWriteInput] = useState(false); //isWriteInput : focus 공간 할당여부
  const toggleTrueWriteArea = (e) => {
    setisWriteInput((isWrite) => true);
  };

  
  const [commentKeyWord, setcommentKeyWord] = useState(''); //commentKeyWord : 댓글 내용
  const toggleWriteArea = (e) => {
    setisWriteInput((isWrite) => !isWrite);
    setcommentKeyWord('');
    e.target.value = null;
  };
  const onChangeHandler = (e) => {
    setcommentKeyWord(e.target.value);
  };

  const location = useLocation();
  const params =  new URLSearchParams(location.search);
  const videoId = params.get("id");

  const postComment = async () => {
    console.log('post');
    await api.postCommentList(videoId, commentKeyWord);
  };
  

  return (
    <div className="CommentAdd">
      <div className="profileCircle"></div>
      <div className="inputArea">
        <input
          className="commentInput"
          type="text"
          placeholder="댓글 추가..."
          onClick={toggleTrueWriteArea}
          onChange={onChangeHandler}
          value={commentKeyWord}
        ></input>

        {isWriteInput && (
          <div className="commentOption">
            <button className="delete" onClick={toggleWriteArea}>
              취소
            </button>
            <button className="insert" onClick={postComment}>
              댓글
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
export default CommentAdd;
