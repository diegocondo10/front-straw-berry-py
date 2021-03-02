import { useMutation, useQuery } from '@apollo/client';
import HrefButton from '@components/Buttons/HrefButton';
import PersonaMutations from '@graphql/Personas/mutations.gql';
import PersonaQueries from '@graphql/Personas/queries.gql';
import useCustomToast from '@hooks/useCustomToast';
import { useRouter } from 'next/router';
import React from 'react';
import BreadCrumbTitle from 'src/components/BreadCrumbs/titleBreadCrumb';
import DynamicDetailTable from 'src/components/Details/DynamicDetailTable';
import Hreft from 'src/components/utils/Link';
import PrivateLayout from 'src/layouts/privateLayout';
import { concatIfExist } from 'src/utils/funciones';

const DetailAlumnoContainer = ({ id }) => {
  const history = useRouter();
  const { addWarningToast } = useCustomToast();
  const { data, loading } = useQuery(PersonaQueries.getAlumnoByIdDetail, {
    variables: { id },
  });

  const [deleteAlumno, { loading: loadingDelete }] = useMutation<any>(
    PersonaMutations.deleteAlumno,
    { variables: { id } },
  );

  const onClickEliminar = async () => {
    if (data?.alumno?.canDelete) {
      await deleteAlumno();
      return history.push('/alumnos');
    }
    addWarningToast('No se puede eliminar una persona referenciada como "Alumno"');
  };

  return (
    <PrivateLayout loading={loading || loadingDelete}>
      <main className="container-fluid mb-5">
        <BreadCrumbTitle
          title="Alumno"
          items={[
            { title: 'Alumno', href: '/personas/alumnos' },
            {
              title: data?.alumno?.persona?.str,
              active: true,
            },
          ]}
        />
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <h3 className="text-underline">Información:</h3>
            <DynamicDetailTable
              source={data?.alumno}
              diccionario={[
                {
                  label: 'Información personal',
                  body: ({ persona }) => (
                    <Hreft
                      href={`/personas/detail?id=${persona?.id}`}
                      children={persona?.str}
                    />
                  ),
                },
                {
                  label: 'Historia Clinica',
                  path: 'historiaClinica',
                },
                {
                  label: 'Trastornos asociados',
                  path: 'trastornosAsociados',
                },
                {
                  label: 'Bono',
                  path: 'bono',
                },
                {
                  label: 'Tipo de Bono',
                  path: 'tipoBono',
                },
                {
                  label: 'Afiliacion al IESS',
                  path: 'afiliacionIess',
                },
                {
                  label: 'Quintil pobreza',
                  path: 'quintilPobreza',
                },
                {
                  label: 'Información del Padre',
                  body: (value) => (
                    <DynamicDetailTable
                      source={value?.padre}
                      diccionario={[
                        {
                          label: 'Identificacíon',
                          path: 'identificacion',
                        },
                        {
                          label: 'Nombres',
                          body: (value) => {
                            return (
                              <p>
                                {concatIfExist([
                                  value?.primerApellido,
                                  value?.segundoApellido,
                                  value?.primerNombre,
                                  value?.segundoNombre,
                                ])}
                              </p>
                            );
                          },
                        },
                        {
                          label: 'Ocupación',
                          path: 'ocupacion',
                        },
                        {
                          label: 'Dirección',
                          path: 'direccion',
                        },
                      ]}
                    />
                  ),
                },
                {
                  label: 'Información de la Madre',
                  body: (value) => (
                    <DynamicDetailTable
                      source={value?.madre}
                      diccionario={[
                        {
                          label: 'Identificacíon',
                          path: 'identificacion',
                        },
                        {
                          label: 'Nombres',
                          body: (value) => {
                            return (
                              <p>
                                {concatIfExist([
                                  value?.primerApellido,
                                  value?.segundoApellido,
                                  value?.primerNombre,
                                  value?.segundoNombre,
                                ])}
                              </p>
                            );
                          },
                        },
                        {
                          label: 'Ocupación',
                          path: 'ocupacion',
                        },
                        {
                          label: 'Dirección',
                          path: 'direccion',
                        },
                      ]}
                    />
                  ),
                },
                {
                  label: 'Contacto de emergencia',
                  body: ({ contactoEmergencia }) => (
                    <DynamicDetailTable
                      source={contactoEmergencia}
                      diccionario={[
                        { label: 'Nombres:', path: 'nombres' },
                        { label: 'Contacto', path: 'contacto' },
                      ]}
                    />
                  ),
                },
                {
                  label: 'Representante',
                  body: ({ representante }) => (
                    <DynamicDetailTable
                      source={representante}
                      diccionario={[
                        {
                          label: 'Nombre',
                          path: 'representante.nombres',
                        },
                        {
                          label: 'Parentesco',
                          path: 'representante.parentesco',
                          default: 'NO REGISTRA',
                        },
                      ]}
                    />
                  ),
                },
              ]}
            />
          </div>
        </div>

        <div className="col-md-10 col-lg-8">
          <div className="col-md-4 my-1">
            <HrefButton
              variant="info"
              href="/personas/alumnos"
              block
              label="Regresar"
            />
          </div>
          <div className="col-md-4 my-1 order-md-1">
            <HrefButton
              variant="danger"
              block
              onClick={onClickEliminar}
              label="Eliminar"
              permiso="ALUMNOS__ELIMINAR"
            />
          </div>
        </div>
      </main>
    </PrivateLayout>
  );
};

DetailAlumnoContainer.getInitialProps = async ({ query }) => query;

export default DetailAlumnoContainer;
