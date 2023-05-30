import axios from 'axios';
import { getCookie, setCookie } from '../common/cookie';

const api = axios.create({
  baseURL: 'http://118.34.185.100:54114'
});

const getHeaders = () => {
  const authToken = getCookie('access_token');
  return authToken
    ? {
        headers: { Authorization: authToken }
      }
    : {};
};

const getCommentList = async videoId => {
  const response = await api.get(`/comments?page=0&size=5&videoId=${videoId}`);
  console.log(response);
  return response.data;
};

const getCommentCount = async videoId => {
  const commentCount = await api.get(
    `/comments/count/?videoId=${videoId}`,
    getHeaders()
  );
  return commentCount.data['Video CountOfComments'];
};

const postCommentList = async (videoId, content) => {
  const header = getHeaders();
  header.headers['Content-Type'] = 'multipart/form-data';

  const commentFormData = new FormData();
  commentFormData.append(
    'dto',
    new Blob([JSON.stringify({ content })], {
      type: 'application/json'
    })
  );
  return await api.post(`/comments/${videoId}`, commentFormData, header);
};

const postCommentLikeCount = async commentId => {
  return await api.post(`/comments/${commentId}/like`, getHeaders());
};

const deleteCommentLikeCount = async commentId => {
  return await api.delete(`/comments/${commentId}/like`, getHeaders());
};

const postSubscribeCount = async channelId => {
  return await api.post(
    `/channels/${channelId}/subscription`,
    {},
    getHeaders()
  );
};

const deleteSubscribeCount = async channelId => {
  return await api.delete(
    `/channels/${channelId}/subscription`,
    {},
    getHeaders()
  );
};

const postVideoLikeCount = async videoId => {
  return await api.post(`/videos/${videoId}/like`, getHeaders());
};

const deleteVideoLikeCount = async videoId => {
  return await api.delete(`/videos/${videoId}/like`, getHeaders());
};

const getSubscribed = async channelId => {
  const myChannelId = getCookie('current_channel');
  if (!myChannelId) {
    return { status: false };
  }
  try {
    const response = await api.get(
      `/${channelId}/subscribed/${myChannelId}`,
      channelId,
      getHeaders()
    );
    console.log(response);
    return response.data;
  } catch (e) {
    return { status: false };
  }
};

const postReComment = async (commentId, content) => {
  const header = getHeaders();
  header.headers['Content-Type'] = 'multipart/form-data';

  const commentFormData = new FormData();
  commentFormData.append(
    'dto',
    new Blob([JSON.stringify({ content })], {
      type: 'application/json'
    })
  );
  return await api.post(`/comments/reply/${commentId}`, commentFormData, header);
};

const getReComment = async (commentId, header) => {
  const reComment = await api.get(
    `/comments/reply/?page=0&size=1&commentId=${commentId}`,
    getHeaders()
  );
  console.log(reComment);
  return reComment.data;
};

export {
  getCommentList,
  getCommentCount,
  postCommentList,
  postCommentLikeCount,
  deleteCommentLikeCount,
  postSubscribeCount,
  deleteSubscribeCount,
  postVideoLikeCount,
  deleteVideoLikeCount,
  getSubscribed,
  postReComment,
  getReComment
};
