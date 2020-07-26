import Axios from 'axios';
import { urlBaseApi } from './service.urls';
import { GET, POST } from './service.utils';

export class Categoria {
  id = '';
  nombre = '';
  descripcion = '';

  static URL_BASE = `${urlBaseApi}categorias/`;

  static getAll = async () => {
    return await Axios.get(this.URL_BASE);
  };

  static getById = async (id) => {
    const res = await GET(`${this.URL_BASE}${id}`);
    return res.data;
  };

  static create = async (categoria) => {
    return await POST(`${this.URL_BASE}`, categoria);
  };

  static update = async (id, categoria) => {
    return await Axios.put(`${this.URL_BASE}${id}`, categoria);
  };
}

export class Producto {
  static URL_BASE = `${urlBaseApi}productos/`;
  static getAll = async () => {
    return await Axios.get(this.URL_BASE);
  };
  static getById = async (id) => {
    const res = await Axios.get(`${this.URL_BASE}${id}`);
    return res.data;
  };
}
