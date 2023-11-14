import axios from 'axios';
const controller = new AbortController();
const api = () => {
  const instance = axios.create({
    baseURL: 'https://dummyjson.com',
    timeout: 1000,
    Accept: 'application/xml',
  });

  //   instance.interceptors.request.use(
  //     config => {
  //       console.log('axios data config3 ', config);
  //       return config;
  //     },
  //     error => Promise.reject(error),
  //   );

  instance.interceptors.response.use(
    response => {
      //console.log('Interceptor response', response);
      return response;
    },
    error => {
      console.log('ERROR In Utilities', JSON.stringify(error));
    },
  );

  return instance;
};

export default api;
