import { useQuery } from '@apollo/client';
import BreadCrumbTitle from 'src/components/BreadCrumbs/titleBreadCrumb';
import { BtnRegresar } from 'src/components/Buttons/BtnRegresar';
import DynamicDetailTable from 'src/components/Details/DynamicDetailTable';
import Hreft from 'src/components/utils/Link';
import MatriculaQueries from '@graphql/Matriculas/queries.gql';
import PrivateLayout from '@layouts/privateLayout';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { Button } from 'react-bootstrap';

const DetailMatriculaContainer: NextPage<any> = ({ id }) => {
  const history = useRouter();
  const { data, loading } = useQuery(MatriculaQueries.getMatriculaByIdDetail, {
    variables: { id },
  });
  const onClickEliminar = async () => {
    history.push('/matriculas');
  };

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

  return (
    <PrivateLayout loading={loading}>
      <main className="container-fluid">
        <BreadCrumbTitle
          title="Matrícula"
          items={[
            { title: 'Matrículas', href: '/matriculas' },
            {
              title: data?.matricula?.matricula,
              href: `/matriculas/update/?id=${id}`,
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
          <div className="col-md-4 my-1">
            <BtnRegresar variant="outline-info" href="/matriculas" />
          </div>

          <div className="col-md-4 my-1 order-md-1">
            <Button variant="outline-danger" block onClick={onClickEliminar}>
              Eliminar
            </Button>
          </div>
        </div>
      </main>
    </PrivateLayout>
  );
};

DetailMatriculaContainer.getInitialProps = async ({ query }) => query;

export default DetailMatriculaContainer;
