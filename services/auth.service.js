import { urlBaseApi } from "./service.urls";

export class Aplicacion {
  nombre;
  decripcion;
  permisos;

  static URL_BASE = `${urlBaseApi}aplicaciones/`;

  static getAll = async () => {
    return await Axios.get(this.URL_BASE);
  };

  static getById = async (id) => {
    return await Axios.get(`${this.URL_BASE}/${id}`);
  };

  static create = async () => {
    return await Axios.post(`${this.URL_BASE}`);
  };

  static update = async (id, body) => {
    return await Axios.put(`${this.URL_BASE}/${id}`, body);
  };

  static delete = async (id) => {
    return await Axios.delete(`${this.URL_BASE}/${id}`);
  };
}
