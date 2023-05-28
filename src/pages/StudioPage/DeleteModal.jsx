import React, { useState, useEffect } from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import SmsFailedIcon from '@mui/icons-material/SmsFailed';
import CloseIcon from '@mui/icons-material/Close';
import './DeleteModal.scss';
import Button from '../../common/Button/Button';
import axios from 'axios';
import * as api from '../../services/api.js';

const DeleteModal = (
  {video_id}
) => {
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
      for (const id of video_id) {
        await api.deleteVideo(id);
      }
      console.log('동영상 삭제가 완료되었습니다.');
    } catch (error) {
      console.error('동영상 삭제 중 오류가 발생했습니다.', error);
    }
    console.log(video_id)
    closeModal();
  }

  return (
    <div className="DeleteModal">
      <button className="deleteButton" onClick={handleButtonClick}>
        <DeleteForeverIcon style={{ color: 'red' }} /> 삭제
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
            이 동영상을 완전히 삭제하시겠습니까?
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
              <div className='titleText'>YouTube에서 동영상 임시본이 영구적으로 삭제되며, 취소할 수 없음을 이해합니다.</div>
              <button className="uploadButton" onClick={handleDeleteSubmit}>
                동영상 삭제
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeleteModal;
