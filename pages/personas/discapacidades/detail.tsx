import { useMutation, useQuery } from '@apollo/client';
import HrefButton from '@components/Buttons/HrefButton';
import PersonaMutations from '@graphql/Personas/mutations.gql';
import PersonaQueries from '@graphql/Personas/queries.gql';
import useCustomToast from '@hooks/useCustomToast';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import BreadCrumbTitle from 'src/components/BreadCrumbs/titleBreadCrumb';
import DynamicDetailTable from 'src/components/Details/DynamicDetailTable';
import PrivateLayout from 'src/layouts/privateLayout';

const DiscapacidadDetailContainer: NextPage<any> = ({ breadCrumb, id }) => {
  const router = useRouter();

  const { addWarningToast } = useCustomToast();

  const { data, loading } = useQuery(PersonaQueries.getDiscapacidadById, {
    variables: { id },
    onError: (error) => router.push('/personas/discapacidades'),
  });

  const [deleteDiscapacidad, { loading: loadingDelete }] = useMutation(
    PersonaMutations.deleteDiscapacidad,
    {
      variables: { id },
      onError: () => router.push('/personas/discapacidades'),
    },
  );

  const onClickEliminar = async () => {
    if (data?.discapacidad?.canDelete) {
      await deleteDiscapacidad();
      return router.push('/personas/discapacidades');
    }
    addWarningToast(
      'No se puede eliminar, debito a que esta referenciado en alguna persona',
    );
  };

  return (
    <PrivateLayout loading={loading || loadingDelete}>
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
                  <HrefButton
                    variant="danger"
                    block
                    onClick={onClickEliminar}
                    label="Eliminar"
                    permiso="DISCAPACIDADES__ELIMINAR"
                  />
                </div>
                <div className="col-md-5 my-1">
                  <HrefButton
                    variant="info"
                    label="Regresar"
                    block
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
