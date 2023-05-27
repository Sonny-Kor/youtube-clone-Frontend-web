import './CommentAdd.scss';
import cx from 'classnames';
import React, { useState, useEffect } from 'react';
import useInputs from '../../hooks/useInputs';

function CommentAdd() {
  const [isWriteInput, setisWriteInput] = useState(false); //isWriteInput : focus 공간 할당여부
  const toggleWriteArea = (e) => {
    setisWriteInput((isWrite) => !isWrite);
  };

  let name = 'commentKeyword';
  let value = '';
  const [commentKeyWord, setcommentKeyWord] = useState(value); //commentKeyWord : 댓글 내용
  const [form, onChange] = useInputs({
    commentKeyword: '',
  });
  useEffect(() => {
    const { commentKeyword } = form;

    if (commentKeyword != '') {
      setisWriteValue((isWriteValue) => !isWriteValue);
    }
  }, [form]);
  const onChangeHandler = (e) => {
    setcommentKeyWord(e.target.value);
    onChange({
      target: {
        name,
        value: commentKeyWord,
      },
    });
  };
  const [isWriteValue, setisWriteValue] = useState(false); //버튼 파란색 활성화
  return (
    <div className="CommentAdd">
      <div className="profileCircle"></div>
      <div className="inputArea">
        <input
          className="commentInput"
          type="text"
          placeholder="댓글 추가..."
          onClick={toggleWriteArea}
          onChange={onChangeHandler}
          on
        ></input>

        {isWriteInput && (
          <div className="commentOption">
            <button className="delete" onClick={toggleWriteArea}>
              취소
            </button>
            <button className={cx('insert', { isWriteBtn: isWriteValue })}>
              댓글
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
export default CommentAdd;
