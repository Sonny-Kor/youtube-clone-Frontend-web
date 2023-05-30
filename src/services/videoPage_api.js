import axios from 'axios';

const api = axios.create({
  baseURL: 'http://118.34.185.100:54114'
});

const getVideo = async videoId => {
  const response = await api.get(`/videos/${videoId}`);
  console.log(response);
  return response.data;
};

export { getVideo };
