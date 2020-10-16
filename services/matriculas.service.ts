import { gql } from '@apollo/client';

const PeriodosLectivos = {
  fragments: {
    periodoLectivoCompleto: gql`
      fragment PeriodoLectivo on PeriodoLectivoType {
        id
        nombre
        fechaInicio
        fechaFin
        fechaFinClases
        estado
      }
    `,
  },
};

export class PeriodoLectivo {
  static periodoLectivoCompleteFragment = `
    fragment PeriodoLectivo on PeriodoLectivoType {
      ...PeriodoLectivo
    }

    ${PeriodosLectivos.fragments.periodoLectivoCompleto}
  `;

  static getAll = gql`
    query getAll {
      periodosLectivos {
        id
        nombre
        fechaInicio
        fechaFin
        fechaFinClases
        estado
      }
    }
  `;

  static getById = gql`
    query getById($id: ID!) {
      periodoLectivo(id: $id) {
        id
        nombre
        fechaInicio
        fechaFin
        fechaFinClases
        estado
        observaciones
      }
    }
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
        id
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

export class Materia {
  static getAll = gql`
    query getAll {
      materias {
        id
        nombre
        codigo
        grado
        horasPresencial
        descripcion
        objetivo
        objetivoEspecifico
      }
    }
  `;

  static getById = gql`
    query getById($id: ID!) {
      materia(id: $id) {
        id
        nombre
        codigo
        grado
        horasPresencial
        descripcion
        objetivo
        objetivoEspecifico
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

export class Matricula {
  static dataFormFragment = `
    aulas {
      id
      nombre
    }
    alumnos {
      id
      persona {
        id
        str
      }
    }
  `;

  static getAll = gql`
    query getAll {
      matriculas {
        id
        tratamiento
        diagnostico
        matricula
        numeroMatricula
        aporteVoluntario
        diagnosticoFinal
        alumnos {
          id
          persona {
            id
            str
          }
        }
        aulas {
          id
          nombre
        }
      }
    }
  `;

  static getById = gql`
    query getById($id: ID!) {
      matricula(id: $id) {
        id
        tratamiento
        diagnostico
        matricula
        numeroMatricula
        aporteVoluntario
        diagnosticoFinal
        alumnos {
          id
          persona {
            id
            str
          }
        }
        aulas {
          id
          nombre
        }
      }
      ${Matricula.dataFormFragment}
    }
  `;

  static getDataForm = gql`
    query getDataForm {
      aulas {
        id
        nombre
      }
      alumnos {
        id
        persona {
          id
          str
        }
      }
    }
  `;

  static create = gql`
    mutation create($input: CreateMatriculaInput!) {
      createMatricula(input: $input) {
        matricula {
          id
          createdAt
        }
      }
    }
  `;

  static update = gql`
    mutation update($input: UpdateMatriculaInput!, $id: ID!) {
      updateMatricula(input: $input, id: $id) {
        matricula {
          id
          createdAt
        }
      }
    }
  `;

  static delete = gql`
    mutation delete($id: ID!) {
      deleteMatricula(id: $id) {
        found
        deletedId
      }
    }
  `;
}
