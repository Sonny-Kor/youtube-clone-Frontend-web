import React, { useEffect, useState } from 'react';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import Button from '../../common/Button/Button';
import * as api from '../../services/api';

import './StudioAsideBar.scss';

function StudioAsideBar() {
  const [channelInfo, setChannelInfo] = useState({
    name: '',
    description: '',
    channelImage: '',
  });

  useEffect(() => {
    const fetchChannelInfo = async () => {
      try {
        const data = await api.getChannelInfo(); 
        const imageURL = `data:image/png;base64, ${data.channelImage}`;
        
        setChannelInfo({
          name: data.title,
          description: data.description,
          channelImage: imageURL,
        });
      } catch (error) {
        console.error('Error fetching channel info:', error);
      }
    };
    
    fetchChannelInfo();
  }, []);

  return (
    <div className="StudioAsideBar expand">
      <div className="asideGroup">
        <div className="channelFrame">
          <Button description={'Youtube 채널에서 보기'}>
            <img
              className="profileCircle"
              src={channelInfo.channelImage}
              alt="profileImg"
            ></img>
          </Button>
          <div className="profileWrapper">
            <div className="channelName">{channelInfo.name}</div>
            <div className="userName">{channelInfo.description}</div>
          </div>
        </div>
      </div>
      <div className="asideGroup min">
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
      <div className="asideGroup min">
        <button className="asideItem">
          <div className="asideItemIcon">
            <VideoLibraryOutlinedIcon />
          </div>
          <div className="asideText">보관함</div>
        </button>
      </div>
      <div className="underLine"></div>
    </div>
  );
}

export default StudioAsideBar;
