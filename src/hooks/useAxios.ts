import Axios from 'axios';

const useAxios = () => {
  const privateAxios = Axios.create({
    // baseURL: 'https://straw-berry-py.herokuapp.com/api/v1/',
    baseURL: 'http://localhost:9000/api/v1/',
  });

  return { privateAxios };
};

export default useAxios;
