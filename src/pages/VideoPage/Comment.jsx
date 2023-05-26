import CommentAdd from './CommentAdd';
import CommentItem from './CommentItem';

import SortIcon from '@mui/icons-material/Sort';

import './Comment.scss';

function Comment() {
  return (
    <div className="Comment">
      <div className="head">
        <div className="commentCount">댓글 n개</div>
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
      <div className="commentItem">
        <CommentItem />
      </div>
    </div>
  );
}
export default Comment;
