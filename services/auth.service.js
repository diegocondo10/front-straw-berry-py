import { urlBaseApi } from './service.urls';
import BaseService from './service.utils';
import Axios from 'axios';

export class Aplicacion extends BaseService {
  nombre;
  decripcion;
  permisos;

  static URL_BASE = `${urlBaseApi}auth/aplicaciones`;

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

export class Permiso extends BaseService {
  nombre;
  decripcion;
  aplicacion;

  static URL_BASE = `${urlBaseApi}auth/permisos`;
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
