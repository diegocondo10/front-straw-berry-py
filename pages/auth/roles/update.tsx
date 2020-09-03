import { useMutation, useQuery } from '@apollo/client';
import RolFormContainer from '@components/pages/auth/roles/form';
import PrivateLayout from '@layouts/privateLayout';
import { Permiso, Rol } from '@services/auth.service';
import { useRouter } from 'next/router';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

const UpdateRolContainer = ({ items, title, id }) => {
  const methods = useForm({ mode: 'onChange' });
  const router = useRouter();

  const { data, loading } = useQuery(Rol.getByIdToUpdate, {
    variables: { id },
    onCompleted: ({ grupo }) => {
      methods.reset(grupo);
    },
  });

  const [updateRol] = useMutation(Rol.update);

  const onSubmit = async (input) => {
    input.permisos = input.permisos.map((e) => e.id);
    await updateRol({ variables: { id, input } });
    router.push('/auth/roles');
  };

  return (
    <PrivateLayout title="IPCA | Roles de Usuario" loading={loading}>
      <FormProvider {...methods}>
        <RolFormContainer
          items={items}
          title={title}
          loading={loading}
          permisosDisponibles={data?.grupo?.permisosDisponibles}
          onSubmit={onSubmit}
        />
      </FormProvider>
    </PrivateLayout>
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
