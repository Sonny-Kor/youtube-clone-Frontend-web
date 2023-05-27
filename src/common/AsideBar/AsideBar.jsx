import React from 'react';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';

import './AsideBar.scss';

function AsideBar() {
  return (
    <div className="AsideBar expand">
      <div className="asideGroup min">
        <button className="asideItem">
          <div className="asideItemIcon"><HomeOutlinedIcon /></div>
          <div className="asideText">홈</div>
        </button>
        <button className="asideItem">
          <div className="asideItemIcon"><SubscriptionsOutlinedIcon/></div>
          <div className="asideText">구독</div>
        </button>
      </div>
      <div className="underLine"></div>
      <div className="asideGroup min">
        <button className="asideItem">
          <div className="asideItemIcon"><VideoLibraryOutlinedIcon /></div>
          <div className="asideText">보관함</div>
        </button>
      </div>
      <div className="underLine"></div>
      <div className="asideGroup">
        <div className="loginAlert">
          <div className="loginText">
            로그인하면 동영상에 좋아요를 표시하고 댓글을 달거나 구독할 수
            있습니다.
          </div>
          <div className="loginButton">
            <div className="accountCircle">
              <AccountCircleIcon />
            </div>
            <div className="login">로그인</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AsideBar;
