import React from 'react';

import FilterListIcon from '@mui/icons-material/FilterList';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import './StudioVideoTable.scss';

function StudioVideoTable(props) {
  return (
    <div className="StudioVideoTable">
        <div className="tableHeader">
          <div className="tableTitle">채널 콘텐츠</div>
          <div className="tableTab">
            <div>동영상</div>
            <div>실시간 스트리밍</div>
            <div>게시물</div>
            <div>재생목록</div>
            <div>팟캐스트</div>
          </div>
        </div>
        <div className="tableFilter">
          <FilterListIcon className='filterIcon'/>
          <div className="filterText">필터</div>
        </div>
        <div className="videoTable">
          <div className="tableRow header">
            <div className="cell checkbox"><div className="checkBox"/></div>
            <div className="cell summary">동영상</div>
            <div className="cell status">공개 상태</div>
            <div className="cell copyright">제한사항</div>
            <div className="cell date">날짜<ArrowDownwardIcon className='arrowIcon'/></div>
            <div className="cell view">조회수</div>
            <div className="cell comment">댓글</div>
            <div className="cell like">좋아요(싫어요 대비)</div>
          </div>
          {/* 나중에 MAP 이랑 props으로 만들기 */}
          <div className="tableRow">
            <div className="cell checkbox">
              <div className="checkBox"/>
            </div>
            <div className="cell summary">
              <div className="cellVideo">
                <div className="thumbnailWrapper">
                  <img className="thumbnail" src={"https://i.ytimg.com/vi/YudHcBIxlYw/hqdefault.jpg"} alt="thumbnail"></img>
                </div>

                <div className="cellvideoText">
                  <div className="cellvideoTitle">영상 제목</div>
                  <div className="cellvideoDescribe">영상 설명입니다 ㅁㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄹ</div>
                </div>
              </div>
            </div>
            <div className="cell status">공개</div>
            <div className="cell copyright">없음</div>
            <div className="cell date">
              <div className='cellDate'>
                <div>2023. 5. 2.</div>
                <div>게시날자</div>
              </div>
            </div>
            <div className="cell view">1,078</div>
            <div className="cell comment">25</div>
            <div className="cell like">
              <div className='likeCell'>
                <div className='likePercent'>100.0%</div>
                <div className='likeCount'>좋아요 138개</div>
                <div className='likeRate'>
                  <progress value="90" max="100"/>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
export default StudioVideoTable;
