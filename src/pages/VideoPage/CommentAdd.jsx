import React, { useState, useEffect } from 'react';

import * as cookie from '../../common/cookie';
import * as api from '../../services/comment_api';

import useInputs from '../../hooks/useInputs';

import './CommentAdd.scss';

function CommentAdd({ videoId, onSubmit = () => {} }) {
  const [isWriteInput, setisWriteInput] = useState(false); //isWriteInput : focus 공간 할당여부
  const toggleTrueWriteArea = e => {
    setisWriteInput(isWrite => true);
  };
  const [form, onChange, reset] = useInputs({
    commentKeyWord: '',
  }); //commentKeyWord : 댓글 내용
  const toggleWriteArea = e => {
    setisWriteInput(isWrite => !isWrite);
    e.target.value = null;
  };

  const postComment = async () => {
    console.log('post');
    const res = await api.postCommentList(videoId, form.commentKeyWord);
    if (res.status < 300) {
      onSubmit();
      reset();
    }
  };

  return (
    <div className="CommentAdd">
      <div className="profileCircle"></div>
      <div className="inputArea">
        <input
          className="commentInput"
          type="text"
          name="commentKeyWord"
          placeholder="댓글 추가..."
          onClick={toggleTrueWriteArea}
          onChange={onChange}
          value={form.commentKeyWord}
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
