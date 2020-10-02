import { gql } from '@apollo/client';

export class PeriodoLectivo {
  static periodoLectivoCompleteFragment = gql`
    fragment PeriodoLectivo on PeriodoLectivoType {
      id
      nombre
      fechaInicio
      fechaFin
      fechaFinClases
      estado
    }
  `;

  static getAll = gql`
    query getAll {
      periodosLectivos {
        ...PeriodoLectivo
      }
    }
    ${PeriodoLectivo.periodoLectivoCompleteFragment}
  `;

  static getById = gql`
    query getById($id: ID!) {
      periodoLectivo(id: $id) {
        ...PeriodoLectivo
        observaciones
      }
    }

    ${PeriodoLectivo.periodoLectivoCompleteFragment}
  `;

  static create = gql`
    mutation create($input: CreatePeriodoLectivoInput!) {
      createPeriodoLectivo(input: $input) {
        periodoLectivo {
          id
          authEstado
        }
      }
    }
  `;

  static update = gql`
    mutation update($input: UpdatePeriodoLectivoInput!, $id: ID!) {
      updatePeriodoLectivo(input: $input, id: $id) {
        periodoLectivo {
          id
          authEstado
        }
      }
    }
  `;

  static delete = gql`
    mutation delete($id: ID!) {
      deletePeriodoLectivo(id: $id) {
        found
        deletedId
      }
    }
  `;
}

export class Aula {
  static getAll = gql`
    query getAll {
      aulas {
        id
        nombre
        capacidad
        docentes {
          id
          persona {
            id
            str
          }
        }
        periodo {
          id
          nombre
        }
      }
    }
  `;

  static dataForm = gql``;
}
