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
  static dataFormFragment = `
  periodosLectivos {
    id
    nombre
  }
  docentes {
    id
    persona {
      str
    }
  }
  `;

  static getAll = gql`
    query getAll {
      aulas {
        id
        nombre
        capacidad
        grado
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

  static getById = gql`
    query getById($id: ID!) {
      aula(id: $id) {
        id
        nombre
        periodo {
          id
          nombre
        }
        docentes {
          id
          persona {
            id
            str
          }
        }
        grado
        capacidad
      }
      ${Aula.dataFormFragment}
    }
  `;

  static getDataForm = gql`
    query getDataForm {
      ${Aula.dataFormFragment}
    }
  `;

  static create = gql`
    mutation create($input: CreateAulaInput!) {
      createAula(input: $input) {
        aula {
          id
          createdAt
        }
      }
    }
  `;

  static update = gql`
    mutation update($input: UpdateAulaInput!, $id: ID!) {
      updateAula(input: $input, id: $id) {
        aula {
          id
          createdAt
        }
      }
    }
  `;

  static delete = gql`
    mutation delete($id: ID!) {
      deleteAula(id: $id) {
        found
        deletedId
      }
    }
  `;
}
