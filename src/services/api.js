import axios from 'axios';

const api = axios.create({
  baseURL: 'http://118.34.185.100:54114',
});


const getVideoList = async () => {
  const response = await api.get('/home');
  console.log(response)
  return response.data
};

export { getVideoList };