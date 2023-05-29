import React, { useState, useEffect } from 'react';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import SmsFailedIcon from '@mui/icons-material/SmsFailed';
import CloseIcon from '@mui/icons-material/Close';
import UploadIcon from '@mui/icons-material/Upload';
import './UploadModal.scss';
import Button from '../../common/Button/Button';
import axios from 'axios';
import * as api from '../../services/api.js';

const UploadModal = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVideoInputModalOpen, setVideoInputModalOpen] = useState(false);
  const [videoFile, setVideoFIle] = useState(null);
  const [ThumbnailFile, setThumbnailFile] = useState(null);
  const [videoTitle, setVideoTitle] = useState('');
  const [videoDescription, setVideoDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setVideoInputModalOpen(false);
    setVideoFIle(null);
    setThumbnailFile(null);
    setIsLoading(false);
    setVideoTitle('');
    setVideoDescription('');
    setImageUrl('');
  };

  const handleFileSubmit = async () => {
    if (videoFile) {
      setIsModalOpen(false);
      setVideoInputModalOpen(true);
    }
  };

  const handleEditSubmit = async () => {
    if (videoDescription && videoTitle && ThumbnailFile) {
      setIsLoading(true);
      const videoId = await api.UploadVideo(videoFile, ThumbnailFile);
      setIsLoading(false);

      setIsLoading(true);
      const result = await api.EditVideo(videoId, videoTitle, videoDescription);
      setIsLoading(false);
      closeModal();
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setVideoFIle(file);
  };

  const handleThumbnailFileChange = (e) => {
    const file = e.target.files[0];
    setThumbnailFile(file);
    const imageUrl = URL.createObjectURL(file);
    setImageUrl(imageUrl);
  };

  return (
    <div className="UploadModal">
      <button className="uploadModalButton" onClick={handleButtonClick}>
        <VideoCallIcon style={{ color: 'red' }} /> 동영상 업로드
      </button>
      {isLoading && (
        <div className="loadingOverlay">
          <div className="loadingSpinner"></div>
        </div>
      )}

      {isModalOpen && (
        <div className="modalOverlay">
          <div className="modal">
            {/* Modal content */}
            <div className="modalHeader">
              동영상 업로드
              <div className="modalIcon">
                <Button description="의견 보내기">
                  <SmsFailedIcon />
                </Button>
                <Button description="닫기">
                  <CloseIcon onClick={closeModal} />
                </Button>
              </div>
            </div>
            <div className="modalContent">
              {/* File upload area */}
              <button className="uploadImageButton">
                <UploadIcon
                  style={{ color: '#065fD4', fontSize: '70px', opacity: '0.7' }}
                />
              </button>
              <div className="contentLabel">
                동영상 파일을 드래그앤 드롭하여 업로드
              </div>
              <div className="contentSubLabel">
                동영상을 게시하기 전에는 비공개로 설정됩니다.
              </div>
              <div className="rowWrapper">
                <button
                  className="uploadButton"
                  onClick={() => document.getElementById('fileInput').click()}
                >
                  파일 선택
                </button>
              </div>
              <div className="rowWrapper">
                <div className="fileNameText">
                  {videoFile && videoFile.name}
                  <br />
                </div>
              </div>
              <button className="uploadButton" onClick={handleFileSubmit}>
                파일 전송
              </button>
              <input
                type="file"
                id="fileInput"
                style={{ display: 'none' }}
                onChange={handleFileChange}
              />
            </div>
            {/* Modal footer */}
            <div className="modalFooter">
              <div className="footerLabel">
                YouTube에 동영상을 제출하면 YouTube{' '}
                <span className="blueText">서비스 약관</span> 및{' '}
                <span className="blueText">커뮤니티 가이드</span>에 동의하게
                됩니다.
              </div>
              <div className="footerLabel">
                불법촬영물 게재시 삭제 조치되고 관련 법에 따라 처벌 받을 수
                있습니다. 타인의 저작권 또는 개인 정보 보호 권리를 침해해서는 안
                됩니다. <span className="blueText">자세히 알아보기</span>
              </div>
            </div>
          </div>
        </div>
      )}
      {isVideoInputModalOpen && (
        <div className="modalOverlay">
          <div className="modal">
            {/* Modal content */}
            <div className="modalHeader">
              동영상 업로드
              <div className="modalIcon">
                <Button description="의견 보내기">
                  <SmsFailedIcon />
                </Button>
                <Button description="닫기">
                  <CloseIcon onClick={closeModal} />
                </Button>
              </div>
            </div>
            <div className="detailContent">
              <div className="contentLabel">
                <div className="videoTitle">세부 정보</div>
                <div className="videoLabel">제목 (필수항목)</div>
                <textarea
                  type="textarea"
                  className="inputDescription"
                  id="videoTitle"
                  placeholder="동영상을 설명하는 제목 추가(채널을 맨션하려면 @입력)"
                  value={videoTitle}
                  onChange={(e) => setVideoTitle(e.target.value)}
                />
              </div>
              <div className="contentSubLabel">
                <div className="videoDescription">설명</div>
                <textarea
                  type="textarea"
                  className="inputDescription"
                  id="videoDescription"
                  placeholder="시청자들에게 동영상에 대해 이야기하기(채널을 맨션하려면 @입력)"
                  value={videoDescription}
                  onChange={(e) => setVideoDescription(e.target.value)}
                />
              </div>
              <div className="thumbnailInput">
                <button
                  className="uploadButton"
                  onClick={() =>
                    document.getElementById('ThumbnailFileInput').click()
                  }
                >
                  썸네일 선택
                </button>
                <div className="thumbnailWrapper">
                  {ThumbnailFile && (<img
                    className="thumbnail"
                    src={imageUrl}
                    alt="thumbnail"
                  ></img>)}
                  
                </div>
              </div>
              <div className='rightsideButton'>
                <button className="uploadButton" onClick={handleEditSubmit}>
                  영상 업로드
                </button>
              </div>
              <input
                type="file"
                id="ThumbnailFileInput"
                style={{ display: 'none' }}
                onChange={handleThumbnailFileChange}
              />
            </div>

            {/* Modal footer */}
            <div className="modalFooter">
              <div className="footerLabel">
                YouTube에 동영상을 제출하면 YouTube{' '}
                <span className="blueText">서비스 약관</span> 및{' '}
                <span className="blueText">커뮤니티 가이드</span>에 동의하게
                됩니다.
              </div>
              <div className="footerLabel">
                불법촬영물 게재시 삭제 조치되고 관련 법에 따라 처벌 받을 수
                있습니다. 타인의 저작권 또는 개인 정보 보호 권리를 침해해서는 안
                됩니다. <span className="blueText">자세히 알아보기</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadModal;
