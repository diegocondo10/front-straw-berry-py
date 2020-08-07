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
          createdAt
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

  static getSimple = gql`
    query getSimple {
      permisos {
        id
        nombre
      }
    }
  `;
}

export class Rol extends BaseService {
  static getAll = gql`
    query getRoles {
      grupos {
        id
        nombre
        descripcion
      }
    }
  `;

  static getByIdToUpdate = gql`
    query getById($id: ID!) {
      grupo(id: $id) {
        id
        nombre
        permisos {
          id
          nombre
        }
        permisosDisponibles {
          id
          nombre
        }
        descripcion
      }
    }
  `;

  static getById = gql`
    query getById($id: ID!) {
      grupo(id: $id) {
        id
        nombre
        permisos {
          id
          nombre
        }
        descripcion
      }
    }
  `;

  static create = gql`
    mutation createRol($input: CreateGrupoInput!) {
      createGrupo(input: $input) {
        grupo {
          id
          createdAt
        }
      }
    }
  `;

  static update = gql`
    mutation updateGrupo($id: ID!, $input: UpdateGrupoInput!) {
      updateGrupo(id: $id, input: $input) {
        grupo {
          id
          createdAt
        }
      }
    }
  `;
}

export class Usuario extends BaseService {}
