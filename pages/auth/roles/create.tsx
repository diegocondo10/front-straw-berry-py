import { useMutation, useQuery } from '@apollo/client';
import RolFormContainer from '@components/pages/auth/roles/form';
import PrivateLayout from '@layouts/privateLayout';
import { Permiso, Rol } from '@services/auth.service';
import { useRouter } from 'next/router';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

const CreateRolContainer = ({ items, title }) => {
  const methods = useForm({ mode: 'onChange' });
  const router = useRouter();

  const { data, loading } = useQuery(Permiso.getSimple);

  const [createRol] = useMutation(Rol.create);

  const onSubmit = async (input) => {
    input.permisos = input.permisos.map((e) => e.id);
    await createRol({ variables: { input } });
    router.push('/auth/roles');
  };

  return (
    <PrivateLayout title="IPCA | Roles de Usuario" loading={loading}>
      <FormProvider {...methods}>
        <RolFormContainer
          items={items}
          title={title}
          loading={loading}
          permisosDisponibles={data?.permisos}
          onSubmit={onSubmit}
        />
      </FormProvider>
    </PrivateLayout>
  );
};

CreateRolContainer.getInitialProps = () => {
  let title = 'Agregar Rol';
  const items = [
    { title: 'Roles de Usuario', href: '/auth/roles' },
    { title: 'Agregar Rol', active: true },
  ];

  return {
    items,
    title,
  };
};

export default CreateRolContainer;
