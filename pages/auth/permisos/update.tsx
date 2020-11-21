import { useQuery, useMutation } from '@apollo/client';
import PrivateLayout from '@layouts/privateLayout';
import { Permiso } from '@services/auth.service';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import PermisoFormContainer from '@components/pages/auth/permisos/form';
import { useRouter } from 'next/router';
import AuthQueries from '@graphql/Auth/queries.gql';
import AuthMutations from '@graphql/Auth/mutations.gql';

const UpdatePermisoContainer = ({ title, items, id }) => {
  const methods = useForm({ mode: 'onChange' });
  const router = useRouter();

  const { data, loading } = useQuery(AuthQueries.queryForUpdatePermiso, {
    variables: { id },
    onCompleted: ({ permiso }) => {
      methods.reset(permiso);
    },
  });

  const [updatePermiso] = useMutation(AuthMutations.updatePermiso);

  const onSubmit = async (input) => {
    input.aplicacion = input.aplicacionId;
    delete input.aplicacionId;
    await updatePermiso({ variables: { id, input } });
    router.push('/auth/permisos');
  };

  return (
    <PrivateLayout title={title} loading={loading}>
      {data && (
        <FormProvider {...methods}>
          <PermisoFormContainer
            loading={loading}
            title={title}
            items={items}
            onSubmit={onSubmit}
            aplicaciones={data.aplicaciones.map((e) => ({
              label: e.nombre,
              value: e.id,
            }))}
          />
        </FormProvider>
      )}
    </PrivateLayout>
  );
};

UpdatePermisoContainer.getInitialProps = ({ query }) => {
  let title = 'Editar Permiso';
  const items = [
    { title: 'Permisos', href: '/auth/permisos' },
    { title: 'Editar Permiso', active: true },
  ];

  return {
    items,
    title,
    id: query.id,
  };
};

export default UpdatePermisoContainer;
