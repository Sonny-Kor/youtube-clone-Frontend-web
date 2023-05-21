import React, { useState } from 'react';

import ToolTip from '../../common/ToolTip/ToolTip'
import './HoverItem.scss';
import EditIcon from '@mui/icons-material/Edit';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import CommentIcon from '@mui/icons-material/Comment';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import MoreVertIcon from '@mui/icons-material/MoreVert';
function HoverItem(props) {
  const [tooltipValue, setTooltipValue] = useState('');
  
  console.log(tooltipValue);

  return (
    <div className="HoverItem">
      <ToolTip description={tooltipValue}>
        <EditIcon
          className="editIcon"
          onMouseEnter={() => setTooltipValue('세부정보')}
          onMouseLeave={() => setTooltipValue('')}
        />
      </ToolTip>
      <ToolTip description={tooltipValue}>
        <InsertChartIcon
          className="chartIcon"
          onMouseEnter={() => setTooltipValue('분석')}
          onMouseLeave={() => setTooltipValue('')}
        />
      </ToolTip>
      <ToolTip description={tooltipValue}>
        <CommentIcon
          className="commentIcon"
          onMouseEnter={() => setTooltipValue('댓글')}
          onMouseLeave={() => setTooltipValue('')}
        />
      </ToolTip>
      <ToolTip description={tooltipValue}>
        <SmartDisplayIcon
          className="videoIcon"
          onMouseEnter={() => setTooltipValue('Youtube에서 보기')}
          onMouseLeave={() => setTooltipValue('')}
        />
      </ToolTip>
      <ToolTip description={tooltipValue}>
        <MoreVertIcon
          className="moreIcon"
          onMouseEnter={() => setTooltipValue('옵션')}
          onMouseLeave={() => setTooltipValue('')}
        />
      </ToolTip>
    </div>
  );
}

export default HoverItem;
