import React from 'react';


import FilterListIcon from '@mui/icons-material/FilterList';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import CheckBox from '../../common/CheckBox/CheckBox';
import StudioVideoList from './StudioVideoList'
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
            <div className="cell checkbox"><CheckBox name='all'/></div>
            <div className="cell summary">동영상</div>
            <div className="cell status">공개 상태</div>
            <div className="cell copyright">제한사항</div>
            <div className="cell date">날짜<ArrowDownwardIcon className='arrowIcon'/></div>
            <div className="cell view">조회수</div>
            <div className="cell comment">댓글</div>
            <div className="cell like">좋아요(싫어요 대비)</div>
          </div>
          <StudioVideoList />
        </div>
    </div>
  );
}
export default StudioVideoTable;