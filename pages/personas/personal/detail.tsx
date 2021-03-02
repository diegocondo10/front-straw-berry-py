import { useMutation, useQuery } from '@apollo/client';
import PersonalMutations from '@graphql/Personas/mutations.gql';
import PersonaQueries from '@graphql/Personas/queries.gql';
import useCustomToast from '@hooks/useCustomToast';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { Button } from 'react-bootstrap';
import BreadCrumbTitle from 'src/components/BreadCrumbs/titleBreadCrumb';
import { BtnRegresar } from 'src/components/Buttons';
import DynamicDetailTable from 'src/components/Details/DynamicDetailTable';
import PrivateLayout from 'src/layouts/privateLayout';

const DetailDocenteContainer = ({ id }) => {
  const history = useRouter();

  //const data = {};
  const { data, loading } = useQuery(PersonaQueries.getPersonalByIdDetail, {
    variables: { id },
  });

  const { addWarningToast } = useCustomToast();
  const [
    deletePersonal,
    { loading: loadingDelete },
  ] = useMutation(PersonalMutations.deletePersonal, { variables: { id } });

  const onClickEliminar = async () => {
    if (data?.personal?.canDelete) {
      await deletePersonal();
      return history.push('/personas/personal');
    }

    addWarningToast(
      'No se puede eliminar a este miembro del personal, debido a que esta siendo referenciado en otros lugares',
    );
  };

  return (
    <PrivateLayout loading={loading || loadingDelete}>
      <main className="container-fluid">
        <BreadCrumbTitle
          title="Personal IPCA"
          items={[
            { title: 'Personal', href: '/personas/personal' },
            {
              title: data?.personal?.persona?.str,
              active: true,
            },
          ]}
        />
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h3 className="text-underline">Información</h3>

            <DynamicDetailTable
              source={data?.personal}
              diccionario={[
                {
                  label: 'Persona',
                  body: (value) => {
                    return (
                      <Link href={`/personas/detail?id=${value?.persona?.id}`}>
                        <a>{value?.persona?.str}</a>
                      </Link>
                    );
                  },
                },
                {
                  label: 'Funciones que ejerce',
                  body: (value) => {
                    return (
                      <ul>
                        {value?.funciones?.map?.((funcion, index) => (
                          <li key={index}>{funcion?.nombre}</li>
                        ))}
                      </ul>
                    );
                  },
                },
                {
                  label: 'Título',
                  path: 'titulo',
                },
                {
                  label: 'Tipo de título',
                  path: 'tipoTitulo',
                },
                {
                  label: 'Área de trabajo',
                  path: 'areaDeTrabajo',
                },
              ]}
            />
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-4 my-1 order-md-1">
            <Button variant="outline-danger" block onClick={onClickEliminar}>
              Eliminar
            </Button>
          </div>
          <div className="col-md-4 my-1">
            <BtnRegresar variant="outline-info" href="/personas/personal" />
          </div>
        </div>
      </main>
    </PrivateLayout>
  );
};

DetailDocenteContainer.getInitialProps = async ({ query }) => query;

export default DetailDocenteContainer;
