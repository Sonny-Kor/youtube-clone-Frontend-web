import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import useInputs from '../../hooks/useInputs';
import SearchBar from '../../common/Header/SearchBar';

import UploadModal from './UploadModal'
import './StudioHeader.scss';

function StudioHeader(props) {
  const [form, onChange] = useInputs({
    searchKeyword: ''
  });

  const navigate = useNavigate();

  useEffect(() => {
    const { searchKeyword } = form;

    if (searchKeyword != '') {
      navigate({
        pathname: '/search',
        search: `keyword=${searchKeyword}`
      });
    }
  }, [form]);

  return (
    <div className="StudioHeader">
      <div className="leftSide">
        <div className="frame1">
          <MenuIcon className="menu" />
        </div>
        <Link className="youTube" to="/">
          YOUTUBE
        </Link>
      </div>
      <div className="centerSide">
        <SearchBar name="searchKeyword" onChange={onChange} />
      </div>
      <div className="rightSide">
        <div className='MakeButton'>

        </div>
        
        <UploadModal/>
        <div className="loginButton">
          <div className="accountCircle">
            <AccountCircleIcon />
          </div>
          <div className="login">로그인</div>
        </div>
      </div>
    </div>
  );
}

export default StudioHeader;
