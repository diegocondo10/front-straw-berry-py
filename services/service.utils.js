import Axios from 'axios';
class BaseService {
  URL_BASE = '';
  static getAll = async () => {
    return await Axios.get(this.URL_BASE);
  };

  static getById = async (id) => {
    return await Axios.get(`${this.URL_BASE}/${id}`);
  };

  static create = async (data) => {
    return await Axios.post(`${this.URL_BASE}`, data);
  };

  static update = async (id, body) => {
    return await Axios.put(`${this.URL_BASE}/${id}`, body);
  };

  static delete = async (id) => {
    return await Axios.delete(`${this.URL_BASE}/${id}`);
  };
}

export default Object.defineProperty(BaseService, 'URL_BASE', {
  configurable: true,
  writable: true,
  value: '',
});
