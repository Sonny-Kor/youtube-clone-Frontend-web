import React, { useEffect, useState } from "react";
import axios from 'axios';
import VideoItem from "./VideoItem";
import * as api from "../../services/api";

import './VideoList.scss';

function VideoList(props) {
  let videoList = api.getVideoList();

  // const [videoList, setVideoList] = useState(null);

  // const fetchVideoList = async () => {
  //   const response = await axios.get("http://118.34.185.100:54114/videos/1/");
  //   setVideoList(response.data);
  // }
  // useEffect(() => {
  //   fetchVideoList();
  // }, []);


  return (<ul className="VideoList">
    {videoList.map((video,index)=>(
      <VideoItem key={video.video_id}
      title ={video.title} 
      thumbnail={video.thumb_img}  
      channelId={video.channelId}
      channelTitle={video.channel_title} 
      videoId={video.video_id}
      profileImg={video.profile_img} 
      viewCount = {video.view_count} 
      createdTime = {video.created_time}/>
    ))}
  </ul>);
}

export default VideoList;