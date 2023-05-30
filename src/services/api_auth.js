import axios from 'axios';
import { getCookie, setCookie } from '../common/cookie';

const api = axios.create({
  baseURL: 'http://118.34.185.100:54114'
});

const CommonError = {
  status: 500,
  reason: '알 수 없는 오류 발생'
};

const getHeaders = () => {
  const authToken = getCookie('access_token');
  return authToken
    ? {
        headers: { Authorization: authToken }
      }
    : {};
};

const requestLogin = async ({ email, password }) => {
  try {
    const response = await api.post(
      '/auth/login',
      { email, password },
      getHeaders()
    );
    console.log(response);
    if (response.status == 200) {
      console.log(response.headers);
      if (response.headers['authorization']) {
        setCookie('access_token', response.headers['authorization']);
      }
      return {
        status: 200,
        data: response.data
      };
    } else {
      return CommonError;
    }
  } catch ({ response }) {
    if (response.status == 400) {
      // 잘못된 입력값
      return {
        status: 400,
        reason: response.data?.errors[0]?.reason || '알 수 없는 에러'
      };
    } else if (response.status == 401) {
      // 로그인 실패
      return {
        status: 401,
        reason: '계정이 존재하지 않거나 비밀번호가 잘못되었습니다.'
      };
    } else {
      return CommonError;
    }
  }
};
const requestSignup = async ({ email, password }) => {
  try {
    const response = await api.post(
      '/auth/register',
      { email, password },
      getHeaders()
    );
    console.log(response);
    if (response.status == 200) {
      return {
        status: 200
      };
    } else {
      return CommonError;
    }
  } catch ({ response }) {
    if (response.status == 400) {
      // 잘못된 입력값
      return {
        status: 400,
        reason: response.data?.errors[0]?.reason || '알 수 없는 에러'
      };
    } else if (response.status == 409) {
      // 로그인 실패
      return {
        status: 409,
        reason: '이미 사용중인 이메일 주소입니다.'
      };
    } else {
      return CommonError;
    }
  }
};
const selectChannel = async ({ key }) => {
  try {
    const response = await api.post('/auth/channel', { key }, getHeaders());
    console.log(response);
    if (response.status == 200) {
      if (response.headers['authorization']) {
        setCookie('access_token', response.headers['authorization']);
      }
      setCookie('current_channel', key);
      return {
        status: 200
      };
    } else {
      return CommonError;
    }
  } catch ({ response }) {
    if (response.status == 400) {
      // 잘못된 입력값
      return {
        status: 400,
        reason: '존재하지 않는 채널입니다.'
      };
    } else {
      return CommonError;
    }
  }
};
const applyChannel = async ({ title, description }) => {
  try {
    const header = getHeaders();
    header.headers['Content-Type'] = 'multipart/form-data';

    const ChannelFormData = new FormData();
    ChannelFormData.append(
      'dto',
      new Blob([JSON.stringify({ title, description })], {
        type: 'application/json'
      })
    );
    const response = await api.post('/channels', ChannelFormData, header);
    console.log(response);
    if (response.status >= 200 && response.status < 300) {
      return {
        status: 200,
        data: response.data
      };
    } else {
      return CommonError;
    }
  } catch ({ response }) {
    if (response.status == 400) {
      return {
        status: 400,
        reason: '잘못된 요청입니다.'
      };
    } else if (response.status == 401) {
      // 로그인 필요
      return {
        status: 401,
        reason: '로그인이 필요합니다.'
      };
    } else {
      return CommonError;
    }
  }
};

export { requestLogin, requestSignup, selectChannel, applyChannel };
