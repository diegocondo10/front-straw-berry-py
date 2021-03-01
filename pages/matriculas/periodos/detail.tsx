import { useMutation, useQuery } from '@apollo/client';
import MatriculaMutations from '@graphql/Matriculas/mutations.gql';
import MatriculaQueries from '@graphql/Matriculas/queries.gql';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { confirmPopup } from 'primereact/confirmpopup'; // To use confirmPopup method
import React from 'react';
import { Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap';
import { AiOutlineWarning } from 'react-icons/ai';
import TitleBreadCrumb from 'src/components/BreadCrumbs/titleBreadCrumb';
import { BtnRegresar } from 'src/components/Buttons';
import DynamicDetailTable from 'src/components/Details/DynamicDetailTable';
import Hreft from 'src/components/utils/Link';
import useCustomToast from 'src/hooks/useCustomToast';
import PrivateLayout from 'src/layouts/privateLayout';

const PeriodoLectivoDetailContainer: NextPage<any> = ({ id }) => {
  const history = useRouter();
  const { addSuccessToast, addErrorToast } = useCustomToast();
  const { loading, data, refetch } = useQuery(
    MatriculaQueries.getPeriodoLectivoByIdDetail,
    {
      variables: { id },
    },
  );

  const [eliminarPeriodo] = useMutation(MatriculaMutations.updatePeriodo, {
    variables: { id, input: { authEstado: 'E' } },
  });

  const [cerrarPeriodo, { loading: loadingCerrarPeriodo }] = useMutation(
    MatriculaMutations.cerrarPeriodoLectivoById,
    {
      variables: { id },
    },
  );

  const periodo = data?.periodoLectivo;

  const onClickEliminar = async () => {
    if (periodo?.totalMatriculas !== 0) {
      return addErrorToast(
        'No se puede eliminar un periodo lectivo con matrículas activas',
      );
    }
    await eliminarPeriodo();
    addSuccessToast('El periodo se ha eliminado correctamente');
    history.push('/matriculas/periodos');
  };

  const onConfirmCerrarPeriodo = () => {
    cerrarPeriodo({ variables: { id } })
      .then(({ data: { response } }) => {
        console.log(response);
        if (response?.ok) {
          refetch();
        } else {
          addWarningToast(response?.error?.mensaje);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onClickCerrarPeriodo = (event) => {
    confirmPopup({
      target: event.currentTarget,
      message: (
        <div className="d-flex flex-row">
          <div className="align-self-center mr-2 ml-n3">
            <AiOutlineWarning color="#e74c3c" fontSize="30px" />
          </div>
          <p>
            Estas seguro de cerrar el periodo lectivo
            <br />
            Tenga en cuenta que al momento de cerrar el periódo lectivo
            <br />
            todas las matriculas de este periódo, cambiaran su estado a{' '}
            <strong>FINALIZADA</strong>
          </p>
        </div>
      ),
      header: <h4>Confirmación</h4>,
      acceptLabel: 'SI',
      rejectLabel: 'NO',
      // icon: 'pi pi-exclamation-triangle color-danger',
      accept: onConfirmCerrarPeriodo,
    });
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
                {
                  label: 'Opciones',
                  listen: [loadingCerrarPeriodo],
                  body: (value) => (
                    <div className="row">
                      <div className="col-12">
                        <ButtonToolbar>
                          <ButtonGroup>
                            <Button
                              variant="danger"
                              style={{ width: '140px' }}
                              onClick={onClickEliminar}
                            >
                              Eliminar
                            </Button>
                            {value?.habilitarCierre && (
                              <Button
                                onClick={onClickCerrarPeriodo}
                                disabled={loadingCerrarPeriodo}
                              >
                                {loadingCerrarPeriodo && (
                                  <React.Fragment>
                                    <i className="pi pi-spin pi-spinner mr-1" />
                                    Cerrando periodo...
                                  </React.Fragment>
                                )}
                                {!loadingCerrarPeriodo && 'Cerrar Periódo'}
                              </Button>
                            )}
                          </ButtonGroup>
                        </ButtonToolbar>
                      </div>
                    </div>
                  ),
                },

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
                {
                  label: 'Director/a',
                  body: ({ director }) => (
                    <Hreft
                      href={`/personas/personal/detail?id=${director?.id}`}
                      children={director?.personaStr}
                    />
                  ),
                },
                {
                  label: 'Información Matriculas',
                  body: (value) => {
                    return (
                      <DynamicDetailTable
                        source={value}
                        diccionario={[
                          {
                            label: 'Matriculas creadas',
                            path: 'matriculasCreadas',
                          },
                          {
                            label: 'Matriculas anuladas',
                            path: 'matriculasFinalizadas',
                          },
                          {
                            label: 'Matriculas finalizadas',
                            path: 'matriculasAnuladas',
                          },
                          { label: 'Total matriculas', path: 'totalMatriculas' },
                        ]}
                      />
                    );
                  },
                },
              ]}
            />
          </div>
        </div>
        <div className="row justify-content-center my-3">
          <div className="col-md-4 my-1">
            <BtnRegresar variant="outline-info" href="/matriculas/periodos" />
          </div>
        </div>
      </main>
    </PrivateLayout>
  );
};

PeriodoLectivoDetailContainer.getInitialProps = async ({ query }) => query;

export default PeriodoLectivoDetailContainer;
