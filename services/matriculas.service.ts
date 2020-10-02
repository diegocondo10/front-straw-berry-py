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

  static getDataForm = gql`
    query getDataForm {
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
    }
  `;
}

export class Materia {
  static getAll = gql`
    query getAll {
      materias {
        id
        nombre
        codigo
        grado
        hora_presencial
        descripcion
        objetivo
        objetivo_especifico
      }
    }
  `;

  static getById = gql`
  query getById($id: ID!) {
    materias(id: $id) {
      str
      id
      nombre
      codigo
      grado
      hora_presencial
      descripcion
      objetivo
      objetivo_especifico
    }
  }
`;

  static create = gql`
    mutation create($input: CreateMateriaInput!) {
      createMateria(input: $input) {
        materia {
          id
          authEstado
        }
      }
    }
  `;

  static update = gql`
    mutation update($input: UpdateMateriaInput!, $id: ID!) {
      updateMateria(input: $input, id: $id) {
        materia {
          id
          authEstado
        }
      }
    }
  `;

  static delete = gql`
    mutation delete($id: ID!) {
      deleteMateria(id: $id) {
        found
        deletedId
      }
    }
  `;
}
