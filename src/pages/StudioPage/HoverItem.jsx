import React from 'react';

import './HoverItem.scss';
import EditIcon from '@mui/icons-material/Edit';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import CommentIcon from '@mui/icons-material/Comment';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function HoverItem(props) {

  return (
    <div className='HoverItem'>
        <EditIcon className='editIcon'/>
        <InsertChartIcon className='chartIcon'/>
        <CommentIcon className='commentIcon'/>
        <SmartDisplayIcon className='videoIcon'/>
        <MoreVertIcon className='moreIcon'/>
    </div>
  );
}

export default HoverItem;
