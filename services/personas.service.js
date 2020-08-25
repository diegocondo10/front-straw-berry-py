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
}
