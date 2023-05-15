import { formatCountNumber, formatTime, formatComma } from '../../common/functions';

import CheckBox from '../../common/CheckBox/CheckBox';

import './StudioVideoItem.scss';
function StudioVideoItem({
  video_title,
  thumb_img,
  video_describe,
  video_status,
  video_copyright,
  created_time,
  view_count,
  comment_count,
  like_count
}) {
  return (
    <div className='StudioVideoItem'>
      <div className="tableRow">
        <div className="cell checkbox">
          <CheckBox />
        </div>
        <div className="cell summary">
          <div className="cellVideo">
            <div className="thumbnailWrapper">
              <img
                className="thumbnail"
                src={thumb_img}
                alt="thumbnail"
              ></img>
            </div>

            <div className="cellvideoText">
              <div className="cellvideoTitle">{video_title}</div>
              <div className="cellvideoDescribe">
                {video_describe}
              </div>
            </div>
          </div>
        </div>
        <div className="cell status">{video_status === true ? '공개' : '비공개'}</div>
        <div className="cell copyright">{video_copyright === true ? '저작권' : '없음'}</div>
        <div className="cell date">
          <div className="cellDate">
            <div>{formatTime(created_time)}</div>
            <div>게시 날짜</div>
          </div>
        </div>
        <div className="cell view">{formatCountNumber(view_count)}</div>
        <div className="cell comment">{formatComma(comment_count)}</div>
        <div className="cell like">
          <div className="likeCell">
            <div className="likePercent">100.0%</div>
            <div className="likeCount">좋아요 {formatComma(like_count)}개</div>
            <div className="likeRate">
              <progress value="90" max="100" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudioVideoItem;
