import { useMutation, useQuery } from '@apollo/client';
import HrefButton from '@components/Buttons/HrefButton';
import { getAulaByIdDetail } from '@graphql/Matriculas/queries.gql';
import useCustomToast from '@hooks/useCustomToast';
import { NextPage } from 'next';
import React from 'react';
import TitleBreadCrumb from 'src/components/BreadCrumbs/titleBreadCrumb';
import DynamicDetailTable from 'src/components/Details/DynamicDetailTable';
import Hreft from 'src/components/utils/Link';
import PrivateLayout from 'src/layouts/privateLayout';

const AulaDetailContainer: NextPage<any> = ({ id }) => {
  const { data, loading } = useQuery(MatriculaQueries.getAulaByIdDetail, { variables: { id }, });
  const { addWarningToast } = useCustomToast();

  const [deleteAlumno, { loading: loadingDelete }] = useMutation<any>(
    MatriculaMutations.deleteAula, { variables: { id } },
  );

  const onClickEliminar = () => {
    if (data?.aula?.alumnos?.length > 0) {
      return addWarningToast('No se puede eliminar un aula con alumnos asignados');
    }
  };

  return (
    <PrivateLayout loading={loading}>
      <main className="container-fluid animated animate__fadeIn">
        <TitleBreadCrumb
          title="Aula"
          items={[
            { title: 'Aula', href: '/aulas' },
            { title: data?.aula?.nombre, active: true },
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
            <HrefButton
              variant="info"
              block
              href="/matriculas/aulas"
              label="Regresar"
            />
          </div>

          <div className="col-md-4 my-1 order-md-1">
            <HrefButton
              variant="danger"
              block
              onClick={onClickEliminar}
              label="Eliminar"
              permiso="AULAS__ELIMINAR"
            />
          </div>
        </div>
      </main>
    </PrivateLayout>
  );
};

AulaDetailContainer.getInitialProps = async ({ query }) => query;

export default AulaDetailContainer;
