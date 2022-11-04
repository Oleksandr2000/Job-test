import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://joble-app-server.herokuapp.com',
});

instance.interceptors.request.use((config: any) => {
  config.headers.authorization = 'Bearer wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu';
  return config;
});

export default instance;