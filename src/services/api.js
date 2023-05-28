import React, {useEffect} from "react";
import axios from "axios";
import { getCookie, setCookie } from '../common/cookie'

const mychannelId = '103';
const api = axios.create({
  baseURL: 'http://118.34.185.100:54114',
  headers: {
    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBQ0NFU1NfVE9LRU4iLCJpYXQiOjE2ODUxOTAwNTEsImV4cCI6MTY4NjA1NDA1MSwiRU1BSUwiOiIyMDE5MDYxM0BrdW1vaC5hYy5rciIsIlJPTEUiOiJST0xFX1VTRVIiLCJNRU1CRVJfSUQiOiJOM3lNV1JNT3ZMa3JSWEVQSkQ1TTV3PT0iLCJDSEFOTkVMX0lEIjoiRm9TaXlhT1pVc1k0a1lWek5Lb1BQUT09In0.KxO_n5zOr2IdaBL578c6nv8KVhxacgN1bszpwxo9gU4'
  }
});

const getChannelInfo = async () =>{
  const response = await api.get('/channels/'+mychannelId);
  const data = response.data
  return data
}
const deleteVideo = async (videoId) =>{
  try {
    const videoResponse = await axios({
      method: "DELETE",
      url: `http://118.34.185.100:54114/videos/${videoId}`,
      mode: "cors",
      headers: {
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBQ0NFU1NfVE9LRU4iLCJpYXQiOjE2ODUxOTAwNTEsImV4cCI6MTY4NjA1NDA1MSwiRU1BSUwiOiIyMDE5MDYxM0BrdW1vaC5hYy5rciIsIlJPTEUiOiJST0xFX1VTRVIiLCJNRU1CRVJfSUQiOiJOM3lNV1JNT3ZMa3JSWEVQSkQ1TTV3PT0iLCJDSEFOTkVMX0lEIjoiRm9TaXlhT1pVc1k0a1lWek5Lb1BQUT09In0.KxO_n5zOr2IdaBL578c6nv8KVhxacgN1bszpwxo9gU4',
      }
    })
    console.log('영상제목/설명 업로드 성공:', videoResponse.data);
  } catch (error) {
    console.error('영상제목/설명 업로드 실패:', error);
  }
}
const EditVideo = async(videoId,videoTitle, videoDescription) => {
  const data2 = {
    "title": videoTitle,
    "description": videoDescription
  };
  try {
    const videoResponse = await axios({
      method: "POST",
      url: `http://118.34.185.100:54114/videos/${videoId}`,
      mode: "cors",
      headers: {
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBQ0NFU1NfVE9LRU4iLCJpYXQiOjE2ODUxOTAwNTEsImV4cCI6MTY4NjA1NDA1MSwiRU1BSUwiOiIyMDE5MDYxM0BrdW1vaC5hYy5rciIsIlJPTEUiOiJST0xFX1VTRVIiLCJNRU1CRVJfSUQiOiJOM3lNV1JNT3ZMa3JSWEVQSkQ1TTV3PT0iLCJDSEFOTkVMX0lEIjoiRm9TaXlhT1pVc1k0a1lWek5Lb1BQUT09In0.KxO_n5zOr2IdaBL578c6nv8KVhxacgN1bszpwxo9gU4',
        "Content-Type": "application/json"
      },
      data: {"title":videoTitle,"description":videoDescription}, 
    })
    console.log('영상제목/설명 업로드 성공:', videoResponse.data);
  } catch (error) {
    console.error('영상제목/설명 업로드 실패:', error);
  }
}
const UploadVideo = async (video,thumb_img) => {
  const videoFormData = new FormData();
  videoFormData.append('videoFile', video);
  videoFormData.append('thumbImg', thumb_img);

  try {
    // 비디오 업로드
    const videoResponse = await axios({
      method: "POST",
      url: `http://118.34.185.100:54114/videos`,
      mode: "cors",
      headers: {
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBQ0NFU1NfVE9LRU4iLCJpYXQiOjE2ODUxOTAwNTEsImV4cCI6MTY4NjA1NDA1MSwiRU1BSUwiOiIyMDE5MDYxM0BrdW1vaC5hYy5rciIsIlJPTEUiOiJST0xFX1VTRVIiLCJNRU1CRVJfSUQiOiJOM3lNV1JNT3ZMa3JSWEVQSkQ1TTV3PT0iLCJDSEFOTkVMX0lEIjoiRm9TaXlhT1pVc1k0a1lWek5Lb1BQUT09In0.KxO_n5zOr2IdaBL578c6nv8KVhxacgN1bszpwxo9gU4',
        "Content-Type": "multipart/form-data", 
      },
      data: videoFormData, 
    })
    console.log('비디오 업로드 성공:', videoResponse.data);
    return videoResponse.data.videoId;
  } catch (error) {
    console.error('파일 업로드 실패:', error);
  }
};




const getVideoList = () => {
  const data = [
    {
      video_id: 'YudHcBIxlYw',
      thumb_img: 'https://i.ytimg.com/vi/YudHcBIxlYw/hqdefault.jpg',
      title: 'JISOO - ‘꽃(FLOWER)’ M/V',
      channelId: 'UCOmHUn--16B90oW2L6FRR3A',
      profile_img:
        'https://yt3.googleusercontent.com/hZDUwjoeQqigphL4A1tkg9c6hVp5yXmbboBR7PYFUSFj5PIJSA483NB5v7b0XVoTN9GCku3tqQ=s176-c-k-c0x00ffffff-no-rj',
      channel_title: 'BLACKPINK',
      created_time: 1680262260,
      video_sec: 185,
      view_count: 88300
    },
    {
      video_id: '1wvz8Rs7dgc',
      thumb_img: 'https://i.ytimg.com/vi/1wvz8Rs7dgc/hqdefault.jpg',
      title:
        "[리무진서비스] EP.56 만우절 특집 with 방탄소년단 지민 | April Fools' Day Special with...",
      channelId: 'KBSKpop',
      profile_img:
        'https://yt3.googleusercontent.com/XIrz2X4rxeRt59xggde9am7KqkZQ7e3TSaY3bZVWr6bWAVToAKNNH05ZAyovMCJySVxTjZHD=s176-c-k-c0x00ffffff-no-rj',
      channel_title: 'KBS Kpop',
      created_time: 1680348660,
      video_sec: 2039,
      view_count: 1160000
    },
    {
      video_id: 'u9Y3hZ9UP9I',
      thumb_img: 'https://i.ytimg.com/vi/u9Y3hZ9UP9I/hqdefault.jpg',
      title: '풍자가 30번 넘게 간 강원도 원주 찐맛집 공개 | 또간집 EP.25',
      channelId: 'STUDIO_SUZE',
      profile_img:
        'https://yt3.googleusercontent.com/QbyeYFIBzd_UcW-QwKBLjwbKy2U7syqwAr2V1oZA6WZFyhbVLcUk4Kn7YXqg5fMHEg3B9dusGrA=s176-c-k-c0x00ffffff-no-rj',
      channel_title: '재밌는 거 올라온다',
      created_time: 1680089460,
      video_sec: 2386,
      view_count: 1140000
    }
  ];
  return [...data, ...data, ...data];
};


const getStudioVideoList = () => {
  const data = [
    {
      video_id: 'YudHcBIxlYw',
      video_title: 'JISOO - ‘꽃(FLOWER)’ M/V',
      thumb_img: 'https://i.ytimg.com/vi/YudHcBIxlYw/hqdefault.jpg',
      video_describe: '영상 설명입니다 ㅁㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄹ',
      video_status: true,
      video_copyright: false,
      created_time: 16800894601,
      view_count: 1140000,
      comment_count: 1234,
      like_count: 138
      
    },
    {
      video_id: '1wvz8Rs7dgc',
      video_title: "[리무진서비스] EP.56 만우절 특집 with 방탄소년단 지민 | April Fools' Day Special with...",
      thumb_img: 'https://i.ytimg.com/vi/1wvz8Rs7dgc/hqdefault.jpg',
      video_describe: '영상 설명22입니다 ㅁㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄹ',
      video_status: false,
      video_copyright: false,
      created_time: 168008946,
      view_count: 1140000,
      comment_count: 1234,
      like_count: 138
    },
    {
      video_id: 'u9Y3hZ9UP9I',
      video_title: '풍자가 30번 넘게 간 강원도 원주 찐맛집 공개 | 또간집 EP.25',
      thumb_img: 'https://i.ytimg.com/vi/u9Y3hZ9UP9I/hqdefault.jpg',
      video_describe: '영상 설명입니다 ㅁㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄹ',
      video_status: true,
      video_copyright: false,
      created_time: 1680089460,
      view_count: 1140000,
      comment_count: 1234,
      like_count: 1348
    } 
  ];
  return [...data ,...data,...data];
}

export { getVideoList, getStudioVideoList, getChannelInfo, UploadVideo ,EditVideo,deleteVideo };
