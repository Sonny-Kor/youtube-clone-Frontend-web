import {formatTime} from '../../common/functions';
import './ReCommentItem.scss';

function ReCommentItem({
  commentId,
  contents,
  createdTime,
  updatedTime,
  likeCount,
  like, //좋아요 상태
  channelId,
  channelName,
  channelProfileImg,
}) {
  createdTime = new Date(createdTime).getTime() / 1000;
  return (
    <div className="ReCommentItem">
      <div className="reprofileCircleWrapper">
        <img
          className="reprofileCircle"
          src={channelProfileImg}
          alt="reprofileCircle"
        ></img>
      </div>
      <div className="rereCommentWrapper">
        <div className="reitemHead">
          <div className="reuserName">{channelName}</div>
          <div className="recreatedTime">{formatTime(createdTime)}</div>
        </div>
        <div className="reCommentContent">{contents}</div>
      </div>
    </div>
  );
}
export default ReCommentItem;