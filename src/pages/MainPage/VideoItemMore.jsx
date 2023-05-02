import React, { useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './VideoItemMore.scss';

import cx from 'classnames';


function VideoItemMore(props) {

    const [isOpenedMoreMenu, setOpenedMoreMenu] = useState(false);
    const toggleMoreMenu = e => {
      setOpenedMoreMenu(isOpened => !isOpened);
    };

    return (
      <div className={cx('button', {isOpened: isOpenedMoreMenu})}>
        <button className='btnMore' onClick={toggleMoreMenu}>
          <MoreVertIcon className='icon' fontSize='small' />
        </button>
        {isOpenedMoreMenu && 
        <div className='ContextMenu'>
            <div className='ContextItem'>
                <div className='Rectangle'></div>
                <div className='Context'>현재 재생목록에 추가</div>
            </div>
            <div className='ContextItem'>
                <div className='Rectangle'></div>
                <div className='Context'>공유</div>
            </div>
        </div>}
      </div>
    )
  }

  export default VideoItemMore;