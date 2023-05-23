import React, { useState } from 'react';

import VideoCallIcon from '@mui/icons-material/VideoCall';
import SmsFailedIcon from '@mui/icons-material/SmsFailed';
import CloseIcon from '@mui/icons-material/Close';
import UploadIcon from '@mui/icons-material/Upload';

import './UploadModal.scss'; 
import Button from '../../common/Button/Button';

const UploadModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='UploadModal'>
      <button className='uploadButton' onClick={handleButtonClick}><VideoCallIcon style={{color:'red'}}/>만들기</button>

      {isModalOpen && (
        <div className="modalOverlay">
          <div className="modal">
            <div className='modalHeader'>
              동영상 업로드
              <div className='modalIcon'>
                <Button description="의견 보내기">
                  <SmsFailedIcon />
                </Button>
                <Button description="닫기">
                  <CloseIcon onClick={closeModal}/>
                </Button>
              </div>
            </div>
            <div className='modalContent'>
              <button className='uploadImageButton'><UploadIcon style={{fontSize:'70px',opacity:'0.5'}}/></button>
              <div className='contentLabel'>동영상 파일을 드래그 앤 드롭하여 업로드</div>
              <div className='contentSubLabel'>동영상을 게시하기 전에는 비공개로 설정됩니다.</div>
              <button className='uploadButton'>파일 선택</button>
            </div>
            <div className='modalFooter'>
              <div className='footerLabel'>YouTube에 동영상을 제출하면 YouTube <span className='blueText'>서비스 약관</span> 및 <span className='blueText'>커뮤니티 가이드</span>에 동의하게 됩니다.</div>
              <div className='footerLabel'>불법촬영물 게재시 삭제 조치되고 관련 법에 따라 처벌 받을 수 있습니다. 타인의 저작권 또는 개인 정보 보호 권리를 침해해서는 안 됩니다. <span className='blueText'>자세히 알아보기</span></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadModal;