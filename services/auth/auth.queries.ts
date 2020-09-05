import { gql } from '@apollo/client';

export const GET_APLICACIONES = gql`
  query getApps {
    aplicaciones {
      id
      nombre
      descripcion
    }
  }
`;

export const GET_APP_BY_ID = gql`
  query getAppById($id: ID!) {
    aplicacion(id: $id) {
      id
      createdAt
      updatedAt
      nombre
      descripcion
    }
  }
`;

export const CREATE_APP = gql`
  mutation createAplicacion($input: CreateAplicacionInput!) {
    createAplicacion(input: $input) {
      aplicacion {
        id
        createdAt
      }
    }
  }
`;

export const UPDATE_APP = gql`
  mutation updateApp($id: ID!, $input: UpdateAplicacionInput!) {
    updateAplicacion(id: $id, input: $input) {
      aplicacion {
        id
        updatedAt
        nombre
        descripcion
      }
    }
  }
`;

export const DELETE_APP = gql`
  mutation deleteApp($id: ID!) {
    deleteAplicacion(id: $id) {
      found
      deletedId
    }
  }
`;

export const GET_PERMISOS = gql`
  query getPermisos {
    permisos {
      id
      nombre
      descripcion
      aplicacion {
        nombre
      }
    }
  }
`;

export const GET_PERMISO_BY_ID = gql`
  query getPermisoById($id: ID!) {
    permiso(id: $id) {
      id
      nombre
      descripcion
      aplicacion {
        id
        nombre
      }
    }
  }
`;
