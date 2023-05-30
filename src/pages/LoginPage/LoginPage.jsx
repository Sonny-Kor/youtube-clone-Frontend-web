import react, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import useInputs from '../../hooks/useInputs';

import BasicButton from '../../common/Button/BasicButton';
import TransparentButton from '../../common/Button/TransparentButton';
import CircleImg from '../../common/CircleImg/CircleImg';

import * as api from '../../services/api_auth';

import styles from './LoginPage.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function LoginPage(props) {
  const [pageState, setPageState] = useState('login'); // login, channel_select, signup
  const [failedReason, setFailedReason] = useState('');
  const [channelList, setChannelList] = useState([]);
  const requestLogin = async form => {
    const res = await api.requestLogin(form);
    console.log(res);
    if (res.status == 200) {
      // 채널 선택창으로 넘어감
      setChannelList(res.data.users);
      setPageState('channel_select');
      setFailedReason('');
    } else if (res.status >= 400) {
      setFailedReason(res.reason);
    }
  };
  const requestSignup = async form => {
    const res = await api.requestSignup(form);
    console.log(res);
    if (res.status == 200) {
      setPageState('login');
      setFailedReason('');
    } else if (res.status >= 400) {
      setFailedReason(res.reason);
    }
  };
  const requestApplyChannel = async form => {
    const res = await api.applyChannel(form);
    console.log(res);
    if (res.status >= 200 && res.status < 300) {
      setFailedReason('');
      await requestSelectChannel({
        key: res.data.id
      });
    } else if (res.status >= 400) {
      setFailedReason(res.reason);
    }
  };
  const navigate = useNavigate();
  const requestSelectChannel = async form => {
    const res = await api.selectChannel(form);
    console.log(res);
    if (res.status == 200) {
      navigate('/'); //로그인 성공!!
    } else if (res.status >= 400) {
      setFailedReason(res.reason);
    }
  };
  return (
    <div className="LoginPage">
      {pageState.includes('login') && (
        <LoginForm
          onClickSignup={() => setPageState('signup')}
          onSubmit={requestLogin}
          failedReason={failedReason}
          isFailed={!!failedReason}
        />
      )}
      {pageState.includes('signup') && (
        <SignupForm
          onBack={() => setPageState('login')}
          onSubmit={requestSignup}
          failedReason={failedReason}
          isFailed={!!failedReason}
        />
      )}
      {pageState.includes('channel_select') && (
        <ChannelSelect
          channelList={channelList}
          onSubmit={requestSelectChannel}
          onApplyChannel={requestApplyChannel}
          failedReason={failedReason}
          isFailed={!!failedReason}
        />
      )}
    </div>
  );
}

function LoginForm({
  onClickSignup = () => {},
  onSubmit = () => {},
  failedReason = '',
  isFailed = false
}) {
  const [form, onChange] = useInputs({
    email: '',
    password: ''
  });

  return (
    <div className={cx('LoginForm', 'pageForm', { failed: isFailed })}>
      <div className="title">로그인</div>
      <div className="formWrapper">
        <input
          type="email"
          className="form id"
          name="email"
          value={form.email}
          onChange={onChange}
          placeholder="이메일"
        />
        <input
          type="password"
          className="form password"
          name="password"
          value={form.password}
          onChange={onChange}
          placeholder="비밀번호"
          onKeyDown={e => e.code == 'Enter' && onSubmit(form)}
        />
      </div>
      <div className="failedMsg">{isFailed && failedReason}</div>
      <div className="buttonArea">
        <TransparentButton onClick={onClickSignup}>
          계정 만들기
        </TransparentButton>
        <BasicButton onClick={() => onSubmit(form)}>로그인</BasicButton>
      </div>
    </div>
  );
}

function SignupForm({
  onBack = () => {},
  onSubmit = () => {},
  isFailed = false,
  failedReason = ''
}) {
  const [form, onChange] = useInputs({
    email: '',
    password: ''
  });

  return (
    <div className={cx('SignupForm', 'pageForm', { failed: isFailed })}>
      <div className="title">회원가입</div>
      <div className="formWrapper">
        <input
          type="text"
          className="form id"
          name="email"
          value={form.email}
          onChange={onChange}
          placeholder="이메일"
        />
        <input
          type="password"
          className="form password"
          name="password"
          value={form.password}
          onChange={onChange}
          placeholder="비밀번호"
          onKeyDown={e => e.code == 'Enter' && onSubmit(form)}
        />
      </div>
      <div className="failedMsg">{isFailed && failedReason}</div>
      <div className="buttonArea">
        <TransparentButton onClick={onBack}>돌아가기</TransparentButton>
        <BasicButton onClick={() => onSubmit(form)}>회원가입</BasicButton>
      </div>
    </div>
  );
}
function ChannelSelect({
  onSubmit = () => {},
  onApplyChannel = () => {},
  channelList = [],
  isFailed = false,
  failedReason = ''
}) {
  const [form, onChange] = useInputs({
    title: '',
    description: ''
  });
  const [isOpenedApplyForm, setOpenedApplyForm] = useState(false);

  const list = /*[
    {
      name: '채널1',
      key: 1
    },
    {
      name: '채널2',
      key: 2
    },
    {
      name: '채널3',
      key: 3
    }
  ]*/ channelList.map(
    item => (
      <TransparentButton
        key={`channelItem_${item.key}`}
        className="channelItem"
        onClick={e => onSubmit({ key: item.key })}
      >
        <CircleImg className="profileImg"></CircleImg>
        <span className="name">{item.name}</span>
      </TransparentButton>
    )
  );

  return (
    <div className={cx('ChannelSelect', 'pageForm', { failed: isFailed })}>
      <div className="title">채널 선택</div>
      <ul className="channelList">{list}</ul>
      {isOpenedApplyForm ? (
        <div className="formWrapper channelApply">
          <div className="title">채널 생성</div>
          <input
            type="text"
            className="form name"
            name="title"
            value={form.title}
            onChange={onChange}
            placeholder="이름"
          />
          <input
            type="text"
            className="form description"
            name="description"
            value={form.description}
            onChange={onChange}
            placeholder="설명"
          />
          <div className="buttonArea">
            <BasicButton onClick={() => onApplyChannel(form)}>
              채널 생성
            </BasicButton>
          </div>
        </div>
      ) : (
        <BasicButton
          className="openApplyForm"
          onClick={() => setOpenedApplyForm(true)}
        >
          채널 등록
        </BasicButton>
      )}
      <div className="failedMsg">{isFailed && failedReason}</div>
    </div>
  );
}
export default LoginPage;
