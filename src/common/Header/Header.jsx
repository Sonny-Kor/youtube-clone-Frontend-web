import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';

import useInputs from '../../hooks/useInputs';

import SearchBar from './SearchBar';

import './Header.scss';

function Header(props) {
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

  return (
    <div className="Header">
      <input type="checkbox" id="asideBar"></input>
      <div className="head">
        <div className="leftSide">
          <label className="frame1" for="asideBar">
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
          <div className="loginButton">
            <div className="accountCircle">
              <AccountCircleIcon />
            </div>
            <div className="login">로그인</div>
          </div>
        </div>
      </div>

      <div className="body">
        <div className="hAsideBar">
          <div className="asideBarHead">
            <label className="frame1" for="asideBar">
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
      </div>
      <label for="asideBar" className="backGround"></label>
    </div>
  );
}

export default Header;
