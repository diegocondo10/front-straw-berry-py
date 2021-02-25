import { useMutation, useQuery } from '@apollo/client';
import BreadCrumbTitle from 'src/components/BreadCrumbs/titleBreadCrumb';
import { BtnRegresar } from 'src/components/Buttons';
import DynamicDetailTable from 'src/components/Details/DynamicDetailTable';
import PersonaMutations from '@graphql/Personas/mutations.gql';
import PersonaQueries from '@graphql/Personas/queries.gql';
import PrivateLayout from 'src/layouts/privateLayout';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { Button } from 'react-bootstrap';

const DiscapacidadDetailContainer: NextPage<any> = ({ breadCrumb, id }) => {
  const router = useRouter();

  const { data, loading } = useQuery(PersonaQueries.getDiscapacidadById, {
    variables: { id },
    onError: (error) => router.push('/personas/discapacidades'),
  });

  const [deleteDiscapacidad] = useMutation(PersonaMutations.deleteDiscapacidad, {
    variables: { id },
    onError: () => router.push('/personas/discapacidades'),
  });

  const onClickEliminar = async () => {
    await deleteDiscapacidad();

    router.push('/personas/discapacidades');
  };

  return (
    <PrivateLayout loading={loading}>
      <main className="container full_h">
        <BreadCrumbTitle
          title="Discapacidades"
          items={[
            {
              title: 'Discapacidades',
              href: '/personas/discapacidades',
            },
            {
              title: data?.discapacidad?.nombre,
              href: `/personas/discapacidades/update?id=${id}`,
            },
          ]}
        />
        {data && (
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-8">
              <DynamicDetailTable
                source={data?.discapacidad}
                diccionario={[
                  { label: 'ID', path: 'id' },
                  { label: 'Nombre', path: 'nombre' },
                  { label: 'Descripción', path: 'descripcion' },
                ]}
              />
            </div>

            <div className="col-md-10 col-lg-8">
              <div className="row justify-content-center">
                <div className="col-md-5 my-1 order-md-1">
                  <Button variant="outline-danger" block onClick={onClickEliminar}>
                    Eliminar
                  </Button>
                </div>
                <div className="col-md-5 my-1">
                  <BtnRegresar
                    variant="outline-info"
                    href="/personas/discapacidades"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </PrivateLayout>
  );
};

DiscapacidadDetailContainer.getInitialProps = ({ query }) => query;

export default DiscapacidadDetailContainer;
