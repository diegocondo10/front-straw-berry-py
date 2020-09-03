import { gql } from '@apollo/client';

export class Persona {
  static create = gql`
    mutation createPersona($input: CreatePersonaInput!) {
      createPersona(input: $input) {
        persona {
          id
          createdAt
        }
      }
    }
  `;

  static getAll = gql`
    query getAll {
      personas {
        id
        tipoIdentificacion
        identificacion
        primerNombre
        segundoNombre
        primerApellido
        segundoApellido
      }
    }
  `;

  static getParametrosForm = gql`
    query getParametrosForm {
      discapacidades {
        id
        nombre
      }
    }
  `;
}

export class Discapacidad {
  static getAll = gql`
    query getAll {
      discapacidades {
        id
        nombre
        descripcion
        porcentaje
      }
    }
  `;

  static getById = gql`
    query getById($id: ID!) {
      discapacidad(id: $id) {
        id
        nombre
        descripcion
        porcentaje
        createdAt
        updatedAt
      }
    }
  `;

  static create = gql`
    mutation create($input: CreateDiscapacidadInput!) {
      createDiscapacidad(input: $input) {
        discapacidad {
          id
          createdAt
        }
      }
    }
  `;
  static update = gql`
    mutation update($id: ID!, $input: UpdateDiscapacidadInput!) {
      updateDiscapacidad(input: $input, id: $id) {
        discapacidad {
          id
          createdAt
        }
      }
    }
  `;
  static delete = gql`
    mutation delete($id: ID!) {
      deleteDiscapacidad(id: $id) {
        found
        deletedId
      }
    }
  `;
}
