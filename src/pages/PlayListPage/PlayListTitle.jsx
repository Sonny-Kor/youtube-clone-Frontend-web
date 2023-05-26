import React from 'react';

import * as api from '../../services/api';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import './PlayListTitle.scss';

function PlayListTitle() {
  let videoList = api.getVideoList();
  return (
    <div className="PlayListTitle">
      <div className="thumbnailWrapper">
        <img className="thumbnail" src={videoList[0].thumb_img}></img>
      </div>

      <div className="titleBodyWrapper">
        <div className="playListNameWrapper">
          <div className="playListName">노래</div>
          <div className="Reviser">
            <CreateOutlinedIcon />
          </div>
        </div>
        <div className="userName">김시완</div>
        <div className="openOption">
          <div className="optionName">비공개</div>
          <div className="selector">
            <KeyboardArrowDownOutlinedIcon />
          </div>
        </div>
        <div className="playListInformation"></div>
        <div className="playListOption"></div>
      </div>
      <div className="playType"></div>
      <div className="descriptionWrapper">
        <div className="description"></div>
        <div className="Reviser">
          <CreateOutlinedIcon />
        </div>
      </div>
    </div>
  );
}

export default PlayListTitle;
