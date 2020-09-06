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

  static update = gql`
    mutation updatePersona($id: ID!, $input: UpdatePersonaInput!) {
      updatePersona(id: $id, input: $input) {
        persona {
          id
          createdAt
          updatedAt
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
        telefono
        celular
        correo
      }
    }
  `;

  static getById = gql`
    query getById($id: ID!) {
      persona(id: $id) {
        id
        tipoIdentificacion
        identificacion
        primerApellido
        segundoApellido
        primerNombre
        segundoNombre
        genero
        sexo
        tipoSangre
        fechaNacimiento
        edad
        callePrincipal
        calleSecundaria
        lugarReferencia
        numeroCasa
        telefono
        celular
        correo
        ocupacion
        nivelFormacion
        tieneDiscapacidad
        carnetConadis
        porcentajeDiscapacidad
        discapacidades {
          id
          nombre
        }
        discapacidadesDisponibles {
          id
          nombre
        }
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

  static deleteById = gql`
    mutation deletePersona($id: ID!) {
      deletePersona(id: $id) {
        found
        deletedId
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
