import { useMutation, useQuery } from '@apollo/client';
import RolFormContainer from 'src/components/pages/auth/roles/form';
import PrivateLayout from '@layouts/privateLayout';
import { useRouter } from 'next/router';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import AuthQueries from '@graphql/Auth/queries.gql';
import AuthMutations from '@graphql/Auth/mutations.gql';

const UpdateRolContainer = ({ items, title, id }) => {
  const methods = useForm({ mode: 'onChange' });
  const router = useRouter();

  const { data, loading } = useQuery(AuthQueries.getByIdUpdateRol, {
    variables: { id },
    onCompleted: ({ grupo }) => {
      methods.reset(grupo);
    },
  });

  const [updateRol] = useMutation(AuthMutations.updateGrupo);

  const onSubmit = async (input) => {
    input.permisos = input.permisos.map((e) => e.id);
    await updateRol({ variables: { id, input } });
    router.push('/auth/roles');
  };

  return (
    <FormProvider {...methods}>
      <PrivateLayout title="Roles de Usuario" loading={loading}>
        <RolFormContainer
          items={items}
          title={title}
          loading={loading}
          permisosDisponibles={data?.grupo?.permisosDisponibles}
          onSubmit={onSubmit}
        />
      </PrivateLayout>
    </FormProvider>
  );
};

UpdateRolContainer.getInitialProps = ({ query }) => {
  let title = 'Editar Rol';
  const items = [
    { title: 'Roles de Usuario', href: '/auth/roles' },
    { title: 'Editar Rol', active: true },
  ];

  return {
    items,
    title,
    id: query.id,
  };
};

export default UpdateRolContainer;
