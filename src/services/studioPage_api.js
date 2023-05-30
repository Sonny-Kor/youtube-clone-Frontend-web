import React, { useEffect } from 'react';
import axios from 'axios';
import * as cookie from '../common/cookie';

const mychannelId = '103';
const setCookie = cookie.setCookie(
  'access_token',
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBQ0NFU1NfVE9LRU4iLCJpYXQiOjE2ODUxOTAwNTEsImV4cCI6MTY4NjA1NDA1MSwiRU1BSUwiOiIyMDE5MDYxM0BrdW1vaC5hYy5rciIsIlJPTEUiOiJST0xFX1VTRVIiLCJNRU1CRVJfSUQiOiJOM3lNV1JNT3ZMa3JSWEVQSkQ1TTV3PT0iLCJDSEFOTkVMX0lEIjoiRm9TaXlhT1pVc1k0a1lWek5Lb1BQUT09In0.KxO_n5zOr2IdaBL578c6nv8KVhxacgN1bszpwxo9gU4'
);
const access_token = cookie.getCookie('access_token');
const api = axios.create({
  baseURL: 'http://118.34.185.100:54114',
  headers: {
    Authorization: 'Bearer' + access_token,
  },
});

const getVideoInfo = async () => {
  return '';
};
const getChannelVideo = async () => {
  const channelResponse = await axios({
    method: 'GET',
    url: `http://118.34.185.100:54114/channels/${mychannelId}/videos`,
    mode: 'cors',
    headers: {
      Authorization:
        'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBQ0NFU1NfVE9LRU4iLCJpYXQiOjE2ODUxOTAwNTEsImV4cCI6MTY4NjA1NDA1MSwiRU1BSUwiOiIyMDE5MDYxM0BrdW1vaC5hYy5rciIsIlJPTEUiOiJST0xFX1VTRVIiLCJNRU1CRVJfSUQiOiJOM3lNV1JNT3ZMa3JSWEVQSkQ1TTV3PT0iLCJDSEFOTkVMX0lEIjoiRm9TaXlhT1pVc1k0a1lWek5Lb1BQUT09In0.KxO_n5zOr2IdaBL578c6nv8KVhxacgN1bszpwxo9gU4',
    },
  });
  const videoIds = channelResponse.data;
  const videos = [];
  for (const videoId of videoIds) {
    const videoResponse = await axios({
      method: 'GET',
      url: `http://118.34.185.100:54114/videos/${videoId}`,
      mode: 'cors',
      headers: {
        Authorization:
          'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBQ0NFU1NfVE9LRU4iLCJpYXQiOjE2ODUxOTAwNTEsImV4cCI6MTY4NjA1NDA1MSwiRU1BSUwiOiIyMDE5MDYxM0BrdW1vaC5hYy5rciIsIlJPTEUiOiJST0xFX1VTRVIiLCJNRU1CRVJfSUQiOiJOM3lNV1JNT3ZMa3JSWEVQSkQ1TTV3PT0iLCJDSEFOTkVMX0lEIjoiRm9TaXlhT1pVc1k0a1lWek5Lb1BQUT09In0.KxO_n5zOr2IdaBL578c6nv8KVhxacgN1bszpwxo9gU4',
      },
    });

    videos.push(videoResponse.data);
  }
  return videos;
};

const deleteChannel = async () => {
  const response = await api.delete(`/channels/` + mychannelId);
  return response.data;
};

const getChannelInfo = async () => {
  const response = await api.get('/channels/' + mychannelId);
  const data = response.data;
  return data;
};

const editChannelInfo = async (
  channel_name,
  channel_description,
  channel_thumbnail = new Blob([], { type: 'image/png' })
) => {
  const data = {
    title: channel_name,
    description: channel_description,
  };
  const ChannelFormData = new FormData();
  ChannelFormData.append(
    'dto',
    new Blob([JSON.stringify(data)], { type: 'application/json' })
  );
  console.log(channel_thumbnail.size);
  if (channel_thumbnail.size > 0) {
    ChannelFormData.append(
      'profileImg',
      channel_thumbnail,
      `${channel_name}.png`
    );
  }

  try {
    const channelResponse = await axios({
      method: 'PATCH',
      url: `http://118.34.185.100:54114/channels/${mychannelId}`,
      mode: 'cors',
      headers: {
        Authorization:
          'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBQ0NFU1NfVE9LRU4iLCJpYXQiOjE2ODUxOTAwNTEsImV4cCI6MTY4NjA1NDA1MSwiRU1BSUwiOiIyMDE5MDYxM0BrdW1vaC5hYy5rciIsIlJPTEUiOiJST0xFX1VTRVIiLCJNRU1CRVJfSUQiOiJOM3lNV1JNT3ZMa3JSWEVQSkQ1TTV3PT0iLCJDSEFOTkVMX0lEIjoiRm9TaXlhT1pVc1k0a1lWek5Lb1BQUT09In0.KxO_n5zOr2IdaBL578c6nv8KVhxacgN1bszpwxo9gU4',
        'Content-Type': 'multipart/form-data',
      },
      data: ChannelFormData,
    });
    console.log('체널이름/설명 수정 성공:', channelResponse.data);
    return channelResponse.data;
  } catch (error) {
    console.error('체널이름/설명 수정 실패:', error);
  }
};
const deleteVideo = async (videoId) => {
  try {
    const videoResponse = await axios({
      method: 'DELETE',
      url: `http://118.34.185.100:54114/videos/${videoId}`,
      mode: 'cors',
      headers: {
        Authorization:
          'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBQ0NFU1NfVE9LRU4iLCJpYXQiOjE2ODUxOTAwNTEsImV4cCI6MTY4NjA1NDA1MSwiRU1BSUwiOiIyMDE5MDYxM0BrdW1vaC5hYy5rciIsIlJPTEUiOiJST0xFX1VTRVIiLCJNRU1CRVJfSUQiOiJOM3lNV1JNT3ZMa3JSWEVQSkQ1TTV3PT0iLCJDSEFOTkVMX0lEIjoiRm9TaXlhT1pVc1k0a1lWek5Lb1BQUT09In0.KxO_n5zOr2IdaBL578c6nv8KVhxacgN1bszpwxo9gU4',
      },
    });
    console.log('영상제목/설명 업로드 성공:', videoResponse.data);
  } catch (error) {
    console.error('영상제목/설명 업로드 실패:', error);
  }
};
const EditVideo = async (videoId, videoTitle, videoDescription) => {
  const data2 = {
    title: videoTitle,
    description: videoDescription,
  };
  try {
    const videoResponse = await axios({
      method: 'POST',
      url: `http://118.34.185.100:54114/videos/${videoId}`,
      mode: 'cors',
      headers: {
        Authorization:
          'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBQ0NFU1NfVE9LRU4iLCJpYXQiOjE2ODUxOTAwNTEsImV4cCI6MTY4NjA1NDA1MSwiRU1BSUwiOiIyMDE5MDYxM0BrdW1vaC5hYy5rciIsIlJPTEUiOiJST0xFX1VTRVIiLCJNRU1CRVJfSUQiOiJOM3lNV1JNT3ZMa3JSWEVQSkQ1TTV3PT0iLCJDSEFOTkVMX0lEIjoiRm9TaXlhT1pVc1k0a1lWek5Lb1BQUT09In0.KxO_n5zOr2IdaBL578c6nv8KVhxacgN1bszpwxo9gU4',
        'Content-Type': 'application/json',
      },
      data: { title: videoTitle, description: videoDescription },
    });
    console.log('영상제목/설명 업로드 성공:', videoResponse.data);
  } catch (error) {
    console.error('영상제목/설명 업로드 실패:', error);
  }
};
const UploadVideo = async (video, thumb_img) => {
  const videoFormData = new FormData();
  videoFormData.append('videoFile', video);
  videoFormData.append('thumbImg', thumb_img);

  try {
    // 비디오 업로드
    const videoResponse = await axios({
      method: 'POST',
      url: `http://118.34.185.100:54114/videos`,
      mode: 'cors',
      headers: {
        Authorization:
          'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBQ0NFU1NfVE9LRU4iLCJpYXQiOjE2ODUxOTAwNTEsImV4cCI6MTY4NjA1NDA1MSwiRU1BSUwiOiIyMDE5MDYxM0BrdW1vaC5hYy5rciIsIlJPTEUiOiJST0xFX1VTRVIiLCJNRU1CRVJfSUQiOiJOM3lNV1JNT3ZMa3JSWEVQSkQ1TTV3PT0iLCJDSEFOTkVMX0lEIjoiRm9TaXlhT1pVc1k0a1lWek5Lb1BQUT09In0.KxO_n5zOr2IdaBL578c6nv8KVhxacgN1bszpwxo9gU4',
        'Content-Type': 'multipart/form-data',
      },
      data: videoFormData,
    });
    console.log('비디오 업로드 성공:', videoResponse.data);
    return videoResponse.data.videoId;
  } catch (error) {
    console.error('파일 업로드 실패:', error);
  }
};

export {
  getChannelInfo,
  UploadVideo,
  EditVideo,
  deleteVideo,
  editChannelInfo,
  deleteChannel,
  getChannelVideo,
};
