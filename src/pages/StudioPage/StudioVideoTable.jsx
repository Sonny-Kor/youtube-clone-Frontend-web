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
          <div className="tableRow">
            <div className="cell"><div className="checkBox"/></div>
            <div className="cell">동영상</div>
            <div className="cell">공개 상태</div>
            <div className="cell">제한사항</div>
            <div className="cell">날짜<ArrowDownwardIcon className='arrowIcon'/></div>
            <div className="cell">조회수</div>
            <div className="cell">댓글</div>
            <div className="cell">좋아요(싫어요 대비)</div>
          </div>
          
          <div className="tableRow">
            <div className="cell"><div className="checkBox"/></div>
            <div className="cell">
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
            <div className="cell">공개</div>
            <div className="cell">없음</div>
            <div className="cell">
              <div>2023. 5. 2.</div>
              <div>게시날자</div>
            </div>
            <div className="cell">1,078</div>
            <div className="cell">25</div>
            <div className="cell">
              <div>100.0%</div>
              <div>좋아요 138개</div>
            </div>
          </div>

          
        </div>
        
    </div>
  );
}

export default StudioVideoTable;
