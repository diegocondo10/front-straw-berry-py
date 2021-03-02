import { useMutation, useQuery } from '@apollo/client';
import HrefButton from '@components/Buttons/HrefButton';
import Persona from '@graphql/Personas/mutations.gql';
import PersonaQueries from '@graphql/Personas/queries.gql';
import useCustomToast from '@hooks/useCustomToast';
import { useRouter } from 'next/router';
import React, { useMemo } from 'react';
import BreadCrumbTitle from 'src/components/BreadCrumbs/titleBreadCrumb';
import DynamicDetailTable from 'src/components/Details/DynamicDetailTable';
import PrivateLayout from 'src/layouts/privateLayout';

const DetailPersonaContainer = ({ id }) => {
  const history = useRouter();
  const { addWarningToast } = useCustomToast();
  const { data, loading } = useQuery(PersonaQueries.getPersonaByIdDetail, {
    variables: { id },
  });

  const [deletePersona, { loading: loadingDelete }] = useMutation<any>(
    Persona.deletePersona,
    { variables: { id } },
  );

  const diccionario = useMemo(() => {
    const diccionarioItems: any[] = [
      { label: 'Identificación', path: 'identificacion' },
      { label: 'Tipo de identificación', path: 'tipoIdentificacion' },
      { label: 'Primer apellido', path: 'primerApellido' },
      { label: 'Segundo apellido', path: 'segundoApellido' },
      { label: 'Primer nombre', path: 'primerNombre' },
      { label: 'Segundo nombre', path: 'segundoNombre' },
      { label: 'Genero', path: 'genero' },
      { label: 'Tipo de sangre', path: 'tipoSangre' },
      { label: 'Fecha de nacimiento', path: 'fechaNacimiento' },
      { label: 'Edad', path: 'edad' },
      { label: 'Estado civil', path: 'estadoCivil' },
      { label: 'Etnia', path: 'etnia' },
      { label: 'Teléfono', path: 'telefono' },
      { label: 'Celular', path: 'celularUno' },
      { label: 'Correo', path: 'correo' },
      { label: 'Pais de nacimiento', path: 'paisNacimiento' },
      { label: 'País residencia', path: 'paisResidencia' },
      { label: 'Provincia residencia', path: 'provinciaResidencia' },
      { label: 'Cantón residencia', path: 'cantonResidencia' },
      { label: 'Parroquia residencia', path: 'parroquiaResidencia' },
      { label: 'Dirección', path: 'direccionDomiciliaria' },
    ];
    if (data?.persona?.tieneDiscapacidad === 'SI') {
      diccionarioItems.push(
        {
          label: 'Posee discapacidad',
          path: 'tieneDiscapacidad',
        },
        {
          label: 'Carnet del conadis',
          path: 'carnetConadis',
        },
        {
          label: 'Porcentaje de Discapacidad',
          path: 'porcentajeDiscapacidad',
        },
        {
          label: 'Discapacidades',
          body: (value) => {
            return (
              <ul>
                {value?.discapacidades?.map((item, index) => (
                  <li key={index}>{item.nombre}</li>
                ))}
              </ul>
            );
          },
        },
      );
    }

    return diccionarioItems;
  }, [data]);

  const onClickEliminar = async () => {
    if (data?.persona?.canDelete) {
      await deletePersona();
      return history.push('/personas');
    }
    addWarningToast(
      'No se puede eliminar una persona referenciada como "Personal" ó "Alumno"',
    );
  };

  return (
    <PrivateLayout loading={loading || loadingDelete}>
      <main className="container-fluid mb-3">
        <BreadCrumbTitle
          title="Persona"
          items={[
            { title: 'Personas', href: '/personas' },
            { title: data?.persona?.str, active: true },
          ]}
        />

        <div className="row justify-content-center">
          <div className="col-md-8">
            <h4 className="text-underline">Información Personal</h4>
            <DynamicDetailTable source={data?.persona} diccionario={diccionario} />
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-4 my-1">
            <HrefButton variant="info" href="/personas" block label="Regresar" />
          </div>

          <div className="col-md-4 my-1 order-md-1">
            <HrefButton
              variant="danger"
              block
              onClick={onClickEliminar}
              label="Eliminar"
              permiso="PERSONAS__ELIMINAR"
            />
          </div>
        </div>
      </main>
    </PrivateLayout>
  );
};

DetailPersonaContainer.getInitialProps = async ({ query }) => query;

export default DetailPersonaContainer;
