import { useQuery } from '@apollo/client';
import HrefButton from '@components/Buttons/HrefButton';
import MatriculaQueries from '@graphql/Matriculas/queries.gql';
import { NextPage } from 'next';
import React from 'react';
import BreadCrumbTitle from 'src/components/BreadCrumbs/titleBreadCrumb';
import DynamicDetailTable from 'src/components/Details/DynamicDetailTable';
import Hreft from 'src/components/utils/Link';
import PrivateLayout from 'src/layouts/privateLayout';

const DetailMatriculaContainer: NextPage<any> = ({ id }) => {
  const { data, loading } = useQuery(MatriculaQueries.getMatriculaByIdDetail, {
    variables: { id },
  });

  const padreMadreComponent = (source) => (
    <DynamicDetailTable
      source={source}
      diccionario={[
        {
          label: 'IDENTIFICACIÓN',
          path: 'identificacion',
        },
        {
          label: 'NOMBRES',
          path: 'fullName',
        },
        {
          label: 'OCUPACION',
          path: 'ocupacion',
        },
        {
          label: 'DIRECCION',
          path: 'direccion',
        },
        {
          label: 'TELEFONO',
          path: 'telefono',
        },
        {
          label: 'CELULAR',
          path: 'celular',
        },
      ]}
    />
  );

  const estadoMatricula = data?.matricula?.estadoMatricula === 'Anulada' && {
    label: 'MOTIVO DE LA ANULACIÓN',
    path: 'motivoAnulacion',
  };

  return (
    <PrivateLayout loading={loading}>
      <main className="container-fluid">
        <BreadCrumbTitle
          title="Matrícula"
          items={[
            { title: 'Matrículas', href: '/matriculas' },
            {
              title: data?.matricula?.matricula,
              active: true,
            },
          ]}
        />
        <div className="row justify-content-center">
          <div className="col-lg-11 col-xl-10">
            <h4>Información</h4>
            <DynamicDetailTable
              source={data?.matricula}
              diccionario={[
                {
                  label: 'ESTADO DE LA MATRÍCULA',
                  path: 'estadoMatricula',
                },
                estadoMatricula,
                {
                  label: 'CEDULA',
                  body: (value) => (
                    <Hreft
                      href={`/personas/alumnos/detail?id=${value.alumno.id}`}
                      children={value?.alumno.persona.identificacion}
                    />
                  ),
                },
                { label: 'APELLIDOS', path: 'alumno.persona.apellidos' },
                { label: 'NOMBRES', path: 'alumno.persona.nombres' },
                {
                  label: 'FECHA DE NACIMIENTO',
                  path: 'alumno.persona.fechaNacimiento',
                },
                {
                  label: 'EDAD',
                  path: 'alumno.persona.edad',
                  mask: '<{value}> años',
                },
                {
                  label: 'CARNET DISCAPACIDAD',
                  path: 'alumno.persona.carnetConadis',
                },
                {
                  label: 'TIPO DE FAMILIA',
                  path: 'tipoFamilia',
                },
                {
                  label: 'AMIE',
                  path: 'amie',
                },
                {
                  label: 'MIES',
                  path: 'mies',
                },
                {
                  labe: 'HISTORIA CLINICA',
                  path: 'alumno.historiaClinica',
                },
                {
                  label: 'INFORMACIÓN DEL PADRE',
                  body: ({ alumno }) => padreMadreComponent(alumno?.padre),
                },
                {
                  label: 'INFORMACIÓN DE LA MADRE',
                  body: ({ alumno }) => padreMadreComponent(alumno?.madre),
                },
                {
                  label: 'CORREO ELECTRONICO',
                  path: 'alumno.persona.correo',
                },
                {
                  label: 'PROVINCIA',
                  path: 'alumno.persona.provinciaResidencia',
                },
                {
                  label: 'CANTON',
                  path: 'alumno.persona.cantonResidencia',
                },
                {
                  label: 'PARROQUIA',
                  path: 'alumno.persona.parroquiaResidencia',
                },
                {
                  label: 'TELEFONO',
                  path: 'alumno.persona.telefono',
                },

                {
                  label: 'AULA A LA QUE ASISTE',
                  path: 'aula.nombre',
                },
                {
                  label: 'NIVEL AL QUE ASISTE',
                  path: 'aula.grado',
                },

                {
                  label: 'MATRICULA',
                  path: 'matricula',
                },
                {
                  label: 'APORTE VOLUNTARIO',
                  path: 'aporteVoluntario',
                },
              ]}
            />
          </div>
        </div>

        <div className="row justify-content-center my-3">
          <div className="col-md-7">
            <HrefButton
              className="p-button-info btn-block"
              href="/matriculas"
              label="Regresar"
            />
          </div>
        </div>
      </main>
    </PrivateLayout>
  );
};

DetailMatriculaContainer.getInitialProps = async ({ query }) => query;

export default DetailMatriculaContainer;
