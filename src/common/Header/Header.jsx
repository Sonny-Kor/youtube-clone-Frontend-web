import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import * as cookie from '../../common/cookie';

import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import VideocamIcon from '@mui/icons-material/Videocam';
import LogoutIcon from '@mui/icons-material/Logout';

import useInputs from '../../hooks/useInputs';

import SearchBar from './SearchBar';

import './Header.scss';
import { Logout } from '@mui/icons-material';

function Header(props) {
  const access_token = cookie.getCookie('access_token');

  const [form, onChange] = useInputs({
    searchKeyword: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    const { searchKeyword } = form;

    if (searchKeyword != '') {
      navigate({
        pathname: '/search',
        search: `keyword=${searchKeyword}`,
      });
    }
  }, [form]);

  const [toggleMyProfile, setToggleMyProfile] = useState(false);
  const toggleArea = () => {
    setToggleMyProfile((toggleMyProfile) => !toggleMyProfile);
  };


  return (
    <div className="Header">
      <input type="checkbox" id="asideBar1"></input>
      <div className="head">
        <div className="leftSide">
          <label className="frame1" for="asideBar1">
            <MenuIcon className="menu" />
          </label>
          <Link className="youTube" to="/">
            YOUTUBE
          </Link>
        </div>
        <div className="centerSide">
          <SearchBar name="searchKeyword" onChange={onChange} />
        </div>
        <div className="rightSide">
          {!access_token ? (
            <Link className="loginButton" to="/login">
              <div className="accountCircle">
                <AccountCircleIcon />
              </div>
              <div className="login">로그인</div>
            </Link>
          ) : (
            <div className="rightBtns">
              <Link className="videoCreateBtn" to="/Studio">
                <VideoCallOutlinedIcon />
              </Link>
              <div className="myProfileBtnWrapper">
                <button className="myProfileBtn" onClick={toggleArea}>
                  MY
                </button>
                {toggleMyProfile && (
                  <div className="myProfileWrapper" >
                    <Link className="studioBtn" to ="/Studio">
                      <div className="icon">
                        <VideocamIcon />
                      </div>
                      <div className="text">YouTube 스튜디오</div>
                    </Link>
                    <button className="logoutBtn" onClick = {() => {cookie.setCookie('access_token', ''); window.location.reload()}}>
                      <div className="icon">
                        <LogoutIcon />
                      </div>
                      <div className="text">로그아웃</div>
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="hAsideBar">
        <div className="asideBarHead">
          <label className="frame1" for="asideBar1">
            <MenuIcon className="menu" />
          </label>
          <Link className="youTube" to="/">
            YOUTUBE
          </Link>
        </div>
        <div className="asideGroup">
          <button className="asideItem">
            <div className="asideItemIcon">
              <HomeOutlinedIcon />
            </div>
            <div className="asideText">홈</div>
          </button>
          <button className="asideItem">
            <div className="asideItemIcon">
              <SubscriptionsOutlinedIcon />
            </div>
            <div className="asideText">구독</div>
          </button>
        </div>
        <div className="underLine"></div>
        <div className="asideGroup">
          <button className="asideItem">
            <div className="asideItemIcon">
              <VideoLibraryOutlinedIcon />
            </div>
            <div className="asideText">보관함</div>
          </button>
        </div>
      </div>
      <label for="asideBar1" className="backGround"></label>
    </div>
  );
}

export default Header;
