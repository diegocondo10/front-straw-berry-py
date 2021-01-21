import { useMutation, useQuery } from '@apollo/client';
import TitleBreadCrumb from '@components/BreadCrumbs/titleBreadCrumb';
import { BtnRegresar } from '@components/Buttons';
import DynamicDetailTable from '@components/Details/DynamicDetailTable';
import Hreft from '@components/utils/Link';
import MatriculaMutations from '@graphql/Matriculas/mutations.gql';
import MatriculaQueries from '@graphql/Matriculas/queries.gql';
import PrivateLayout from '@layouts/privateLayout';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { Button } from 'react-bootstrap';

const PeriodoLectivoDetailContainer: NextPage<any> = ({ id }) => {
  const history = useRouter();

  const { loading, data } = useQuery(MatriculaQueries.getByIdPeriodo, {
    variables: { id },
  });
  const [deletePeriodo] = useMutation(MatriculaMutations.deletePeriodo, {
    variables: { id },
  });
  const periodo = data?.periodoLectivo;

  const onClickEliminar = async () => {
    await deletePeriodo();
    history.push('/matriculas/periodos');
  };

  return (
    <PrivateLayout loading={loading}>
      <main className="container-fluid">
        <TitleBreadCrumb
          title="Periodo Lectivo"
          items={[
            { title: 'Periodos Lectivos', href: '/matriculas/periodos' },
            { title: periodo?.nombre, active: true },
          ]}
        />

        <div className="row justify-content-center">
          <div className="col-md-8">
            <h4 className="text-underline">Información del Período Lectivo</h4>

            <DynamicDetailTable
              source={periodo}
              diccionario={[
                { label: 'Nombre', path: 'nombre' },
                { label: 'Estado', path: 'estado' },
                { label: 'Fecha de Inicio', path: 'fechaInicio' },
                { label: 'Fecha de Fin', path: 'fechaFin' },
                { label: 'Fecha Fin de Clases', path: 'fechaFinClases' },
                {
                  label: 'Coordinador/a',
                  body: ({ coordinador }) => (
                    <Hreft
                      href={`/personas/personal/detail?id=${coordinador?.id}`}
                      children={coordinador?.personaStr}
                    />
                  ),
                },
                {
                  label: 'Subcoordinador/a',
                  body: ({ subCoordinador }) => (
                    <Hreft
                      href={`/personas/personal/detail?id=${subCoordinador?.id}`}
                      children={subCoordinador?.personaStr}
                    />
                  ),
                },
              ]}
            />
          </div>
        </div>
        <div className="row justify-content-center my-3">
          <div className="col-md-4 my-1">
            <BtnRegresar variant="outline-info" href="/matriculas/periodos" />
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

PeriodoLectivoDetailContainer.getInitialProps = async ({ query }) => query;

export default PeriodoLectivoDetailContainer;
