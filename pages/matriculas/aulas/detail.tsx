import { useQuery } from '@apollo/client';
import TitleBreadCrumb from 'src/components/BreadCrumbs/titleBreadCrumb';
import { BtnRegresar } from 'src/components/Buttons/BtnRegresar';
import DynamicDetailTable from 'src/components/Details/DynamicDetailTable';
import Hreft from 'src/components/utils/Link';
import { getAulaByIdDetail } from '@graphql/Matriculas/queries.gql';
import PrivateLayout from 'src/layouts/privateLayout';
import { NextPage } from 'next';
import React from 'react';
import { Button } from 'react-bootstrap';

const AulaDetailContainer: NextPage<any> = ({ id }) => {
  const { data, loading } = useQuery(getAulaByIdDetail, { variables: { id } });
  return (
    <PrivateLayout loading={loading}>
      <main className="container-fluid animated animate__fadeIn">
        <TitleBreadCrumb
          title="Aula"
          items={[
            { title: 'Aula', href: '/aulas' },
            { title: data?.aula?.nombre, href: `/matriculas/aulas/?id=${id}` },
          ]}
        />

        <div className="row justify-content-center">
          <div className="col-md-8">
            <h4 className="text-underline">Información</h4>
            <DynamicDetailTable
              source={data?.aula}
              diccionario={[
                {
                  label: 'ID',
                  path: 'id',
                },
                {
                  label: 'Nombre',
                  path: 'nombre',
                },
                {
                  label: 'Grado',
                  path: 'grado',
                },
                {
                  label: 'Capacidad',
                  path: 'capacidad',
                  mask: '<{value}> alumnos',
                },
                {
                  label: 'Periodo Lectivo',
                  path: 'periodo.nombre',
                },
                {
                  label: 'Docentes',
                  body: (value) => {
                    return (
                      <ul className="list-unstyled">
                        {value?.docentes?.map((docente, index) => (
                          <li key={index}>
                            <Hreft
                              href={`/personas/personal/detail?id=${docente?.id}`}
                            >
                              - {docente?.personaStr}
                            </Hreft>
                          </li>
                        ))}
                      </ul>
                    );
                  },
                },
                {
                  label: 'Alumnos',
                  body: (value) => {
                    return (
                      <ul className="list-unstyled">
                        {value?.alumnos?.map((alumno, index) => (
                          <li key={index}>
                            <Hreft
                              href={`/personas/alumnos/detail?id=${alumno?.id}`}
                            >
                              - {alumno?.personaStr}
                            </Hreft>
                          </li>
                        ))}
                      </ul>
                    );
                  },
                },
              ]}
            />
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-4 my-1">
            <BtnRegresar variant="outline-info" href="/matriculas/aulas" />
          </div>

          <div className="col-md-4 my-1 order-md-1">
            <Button
              variant="outline-danger"
              block
              // onClick={onClickEliminar}
            >
              Eliminar
            </Button>
          </div>
        </div>
      </main>
    </PrivateLayout>
  );
};

AulaDetailContainer.getInitialProps = async ({ query }) => query;

export default AulaDetailContainer;
