import './CommentItem.scss';

import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
function CommentItem() {
  return (
    <div className="CommentItem">
      <div className="profileCircle"></div>
      <div className="commentWrapper">
        <div className="itemHead">
          <div className="userName">김시완</div>
          <div className="createdTime">1년 전</div>
        </div>
        <div className="commentContent">내내용내욘애뇨애뇽</div>
        <div className="commentOption">
          <div className="likeWrapper">
            <div className="icon">
              <ThumbUpOffAltIcon />
            </div>
            <div className="likeCount">6만</div>
          </div>
          <div className="reComment">답글</div>
        </div>
      </div>
    </div>
  );
}
export default CommentItem;
