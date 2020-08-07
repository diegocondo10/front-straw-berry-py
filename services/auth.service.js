import { gql } from '@apollo/client';
import Axios from 'axios';
import { urlBaseApi } from './service.urls';
import BaseService from './service.utils';

const axios = Axios.create({
  baseURL: `${urlBaseApi}auth/`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export class Aplicacion {}

export class Permiso extends BaseService {
  static queryForUpdate = gql`
    query queryForUpdatePermiso($id: ID!) {
      permiso(id: $id) {
        id
        nombre
        descripcion
        aplicacionId
      }
      aplicaciones {
        id
        nombre
      }
    }
  `;

  static getAppsPermisos = gql`
    query getAppsPermsiso {
      aplicaciones {
        id
        nombre
      }
    }
  `;

  static updateMutation = gql`
    mutation updatePermiso($id: ID!, $input: UpdatePermisoInput!) {
      updatePermiso(id: $id, input: $input) {
        permiso {
          id
          nombre
          aplicacion {
            id
            nombre
          }
        }
      }
    }
  `;

  static createMutation = gql`
    mutation createPermiso($input: CreatePermisoInput!) {
      createPermiso(input: $input) {
        permiso {
          id
          createdAt
        }
      }
    }
  `;

  static deleteMutation = gql`
    mutation deletePermiso($id: ID!) {
      deletePermiso(id: $id) {
        found
        deletedId
      }
    }
  `;
}

export class Rol extends BaseService {}

export class Usuario extends BaseService {}
