import React, { useState } from 'react';

import Button from '../../common/Button/Button'
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
      <Button description={tooltipValue}>
        <EditIcon
          className="editIcon"
          onMouseEnter={() => setTooltipValue('세부정보')}
          onMouseLeave={() => setTooltipValue('')}
        />
      </Button>
      <Button description={tooltipValue}>
        <InsertChartIcon
          className="chartIcon"
          onMouseEnter={() => setTooltipValue('분석')}
          onMouseLeave={() => setTooltipValue('')}
        />
      </Button>
      <Button description={tooltipValue}>
        <CommentIcon
          className="commentIcon"
          onMouseEnter={() => setTooltipValue('댓글')}
          onMouseLeave={() => setTooltipValue('')}
        />
      </Button>
      <Button description={tooltipValue}>
        <SmartDisplayIcon
          className="videoIcon"
          onMouseEnter={() => setTooltipValue('Youtube에서 보기')}
          onMouseLeave={() => setTooltipValue('')}
        />
      </Button>
      <Button description={tooltipValue}>
        <MoreVertIcon
          className="moreIcon"
          onMouseEnter={() => setTooltipValue('옵션')}
          onMouseLeave={() => setTooltipValue('')}
        />
      </Button>
    </div>
  );
}

export default HoverItem;
