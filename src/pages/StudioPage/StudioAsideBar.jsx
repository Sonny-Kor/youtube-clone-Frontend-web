import React, { useEffect, useState } from 'react';

import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import Button from '../../common/Button/Button';
import * as api from '../../services/studioPage_api';

import './StudioAsideBar.scss';

function StudioAsideBar() {
  const [channelInfo, setChannelInfo] = useState({
    name: '',
    description: '',
    channelImage: '',
  });

  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(channelInfo.name);
  const [description, setDescription] = useState(channelInfo.description);

  function handleFileInputChange(event) {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        const base64String = reader.result;
        const imageURL = base64String;
        setChannelInfo({
          name: channelInfo.name,
          description: channelInfo.description,
          channelImage: imageURL,
        });
      };
      reader.readAsDataURL(file);
      reader.onloadend();
    }
  }
  const handleEditClick = () => {
    setEditing(true);
  };
  const handleEditCloseClick = () => {
    setEditing(false);
  };

  const handleSaveClick = async () => {
    setEditing(false);
    const parts = channelInfo.channelImage.split(';base64,');
    const base64Data = parts[1];
  
    const byteCharacters = atob(base64Data);
    const byteArrays = [];
  
    for (let offset = 0; offset < byteCharacters.length; offset += 1024) {
      const slice = byteCharacters.slice(offset, offset + 1024);
  
      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
  
      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }
    const thumb_blob = new Blob(byteArrays, { type: 'image/png' });


    const data = await api.editChannelInfo(name, description,thumb_blob);
    // api.editChannelInfo(name,description,channelInfo.channelImage);
    const imageURL = `data:image/png;base64, ${data.channelImage}`;

    setChannelInfo({
      name: data.title,
      description: data.description,
      channelImage: imageURL,
    });
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

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
            <div className="rowWrapper">
              <div className="channelName">
                {editing ? (
                  <span>
                    채널명
                    <textarea
                      className="inputDescription"
                      value={name}
                      onChange={handleNameChange}
                      placeholder={channelInfo.name}
                      maxlength="28"
                      style={{ color: '#3d3d3d' }}
                    />
                  </span>
                ) : (
                  <span>{channelInfo.name}</span>
                )}
              </div>
              {!editing && (
                <SettingsIcon
                  style={{ color: '#3d3d3d', cursor: 'pointer' }}
                  onClick={handleEditClick}
                />
              )}
            </div>

            <div className="userName">
              {editing ? (
                <span>
                  채널 설명
                  <textarea
                    className="inputDescription"
                    value={description}
                    placeholder={channelInfo.description}
                    maxlength="150"
                    onChange={handleDescriptionChange}
                  />
                </span>
              ) : (
                <span>{channelInfo.description}</span>
              )}
            </div>
            <div className="rowWrapper">
              {editing && (
                <button
                  className="saveButton"
                  onClick={() => document.getElementById('thumbInput').click()}
                >
                  썸네일 수정
                </button>
              )}
              <input
                type="file"
                id="thumbInput"
                style={{ display: 'none' }}
                onChange={handleFileInputChange}
              />

              {editing && (
                <button className="saveButton" onClick={handleSaveClick}>
                  저장
                </button>
              )}
              {editing && (
                <button className="saveButton" onClick={handleEditCloseClick}>
                  취소
                </button>
              )}
            </div>
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
