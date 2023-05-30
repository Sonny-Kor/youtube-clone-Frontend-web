import React, { useState, useEffect } from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import SmsFailedIcon from '@mui/icons-material/SmsFailed';
import CloseIcon from '@mui/icons-material/Close';
import './DeleteChannelModal.scss';
import Button from '../../common/Button/TransparentButton';
import axios from 'axios';
import * as api from '../../services/studioPage_api.js';

const DeleteChannelModal = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleDeleteSubmit = async () => {
    try {
      setIsLoading(true);
      await api.deleteChannel();
      setIsLoading(false);
      console.log('채널 삭제가 완료되었습니다.');
    } catch (error) {
      console.error('채널 삭제 중 오류가 발생했습니다.', error);
    }
    closeModal();
  }

  return (
    <div className="DeleteChannelModal">
      <button className="DeleteChannelModalButton" onClick={handleButtonClick}>
        <DeleteForeverIcon style={{ color: 'red' }} /> 채널 삭제
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
            이 채널을 완전히 삭제하시겠습니까?
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
              <div className='titleText'>YouTube에서 채널이 영구적으로 삭제되며, 취소할 수 없음을 이해합니다.</div>
              <button className="uploadButton" onClick={handleDeleteSubmit}>
                채널 삭제
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeleteChannelModal;
