import Axios from 'axios';
import { URL_BASE } from 'urls';

const useAxios = () => {
  const privateAxios = Axios.create({
    // baseURL: 'https://straw-berry-py.herokuapp.com/api/v1/',
    baseURL: `${URL_BASE}api/v1/`,
  });

  return { privateAxios };
};

export default useAxios;
