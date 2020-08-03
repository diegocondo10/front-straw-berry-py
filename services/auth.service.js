import Axios from 'axios';
import { urlBaseApi } from './service.urls';
import BaseService from './service.utils';

const axios = Axios.create({
  baseURL: `${urlBaseApi}auth/`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export class Aplicacion extends BaseService {
  nombre;
  decripcion;
  permisos;

  static URL_BASE = `aplicaciones/`;

  static getAll = async () => {
    return await axios.get(this.URL_BASE);
  };

  static getById = async (id) => {
    return await axios.get(`${this.URL_BASE}${id}/`);
  };

  static create = async (data) => {
    return await axios.post(this.URL_BASE, data);
  };

  static update = async (id, body) => {
    return await axios.put(`${this.URL_BASE}${id}/`, body);
  };

  static delete = async (id) => {
    return await axios.delete(`${this.URL_BASE}${id}/`);
  };
}

export class Permiso extends BaseService {
  nombre;
  decripcion;
  aplicacion;

  static URL_BASE = `permisos/`;
  static getAll = async () => {
    return await axios.get(this.URL_BASE);
  };

  static getById = async (id) => {
    return await axios.get(`${this.URL_BASE}${id}/`);
  };

  static create = async (data) => {
    return await axios.post(this.URL_BASE, data);
  };

  static update = async (id, body) => {
    return await axios.put(`${this.URL_BASE}${id}/`, body);
  };

  static delete = async (id) => {
    return await axios.delete(`${this.URL_BASE}${id}/`);
  };
}

export class Rol extends BaseService {
  static URL_BASE = `roles/`;
  static getAll = async () => {
    return await axios.get(this.URL_BASE);
  };

  static getById = async (id) => {
    return await axios.get(`${this.URL_BASE}${id}/`);
  };

  static create = async (data) => {
    return await axios.post(this.URL_BASE, data);
  };

  static update = async (id, body) => {
    return await axios.put(`${this.URL_BASE}${id}/`, body);
  };

  static delete = async (id) => {
    return await axios.delete(`${this.URL_BASE}${id}/`);
  };
}

export class Usuario extends BaseService {
  static URL_BASE = `usuarios/`;
  static getAll = async () => {
    return await axios.get(this.URL_BASE);
  };

  static getById = async (id) => {
    return await axios.get(`${this.URL_BASE}${id}/`);
  };

  static create = async (data) => {
    return await axios.post(this.URL_BASE, data);
  };

  static update = async (id, body) => {
    return await axios.put(`${this.URL_BASE}${id}/`, body);
  };

  static delete = async (id) => {
    return await axios.delete(`${this.URL_BASE}${id}/`);
  };
}
