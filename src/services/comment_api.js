import axios from 'axios';

const api = axios.create({
  baseURL: 'http://118.34.185.100:54114',
});

const getCommentList = async (videoId) => {
  const response = await api.get(`/comments?page=0&size=5&videoId=${videoId}`);
  console.log(response)
  return response.data
};

const getCommentCount = async (videoId, header) => {
  const commentCount = await api.get(`/comments/count/?videoId=${videoId}`, header);
  return commentCount.data["Video CountOfComments"]
};

const postCommentList = async (videoId, commentKeyWord, access_token, header) => {
  const data = {
    dtd_content: commentKeyWord,
  };
  if (access_token)
    await api.post(`/comments?page=0&size=5&videoId=${videoId}`, data, header);
};

const postCommentLikeCount = async (commentId, access_token, header) => {
  if (access_token)
    await api.post(`/comments/${commentId}/like`, header);
};

const deleteCommentLikeCount = async (commentId, access_token, header) => {
  if (access_token)
    await api.delete(`/comments/${commentId}/like`, header);
};

const postSubscribeCount = async (channelId, access_token, header) => {
  if (access_token)
    await api.post(`/channels/${channelId}/subscription`, header);
};

const deleteSubscribeCount = async (channelId, access_token, header) => {
  if (access_token)
    await api.delete(`/channels/${channelId}/subscription`, header);
};

const postVideoLikeCount = async (videoId, access_token, header) => {
  if (access_token)
    await api.post(`/videos/${videoId}/like`, header);
};

const deleteVideoLikeCount = async (videoId, access_token, header) => {
  if (access_token)
    await api.delete(`/videos/${videoId}/like`, header);
};

const getSubscribeList = async (myChannelId, channelId, header) => {
  const isSubscribe = await api.get(`/${channelId}/subscribed/${myChannelId}`, channelId, header);
  console.log(isSubscribe)
  return isSubscribe.data;
}

const postReComment = async (commentId, access_token, header) => {
  if (access_token)
    await api.post(`/comments/reply/${commentId}`, header);
};

const getReComment = async (commentId, header) => {
  const reComment = await api.get(`/comments/reply/?page=0&size=1&commentId=${commentId}`, header);
  console.log(reComment)
  return reComment.data;
}


export { getCommentList, getCommentCount, postCommentList, postCommentLikeCount, deleteCommentLikeCount,
  postSubscribeCount, deleteSubscribeCount, postVideoLikeCount, deleteVideoLikeCount, getSubscribeList, postReComment, 
  getReComment };