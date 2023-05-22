import React from 'react';

import FilterListIcon from '@mui/icons-material/FilterList';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import CheckBox from '../../common/CheckBox/CheckBox';
import StudioVideoList from './StudioVideoList';
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
      
      <div className="videoTable">
        <StudioVideoList />
      </div>
    </div>
  );
}
export default StudioVideoTable;
