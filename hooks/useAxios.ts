import Axios from 'axios';

const useAxios = () => {
  const privateAxios = Axios.create({
    baseURL: 'http://localhost:9000/api/v1/',
  });

  return { privateAxios };
};

export default useAxios;
