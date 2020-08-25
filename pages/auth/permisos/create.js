import { useMutation, useQuery } from '@apollo/client';
import PrivateLayout from '@layouts/privateLayout';
import { Permiso } from '@services/auth.service';
import { useRouter } from 'next/router';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import PermisoFormContainer from '@components/pages/auth/permisos/form';

const CreatePermisoContainer = ({ items, title }) => {
  const methods = useForm({ mode: 'onChange' });
  const router = useRouter();

  const { data, loading } = useQuery(Permiso.getAppsPermisos);

  const [create] = useMutation(Permiso.createMutation);

  const onSubmit = async (input) => {
    input.aplicacion = input.aplicacionId;
    delete input.aplicacionId;
    await create({ variables: { input } });
    router.push('/auth/permisos');
  };

  return (
    <PrivateLayout>
      <FormProvider {...methods}>
        <PermisoFormContainer
          loading={loading}
          title={title}
          items={items}
          onSubmit={onSubmit}
          aplicaciones={data?.aplicaciones.map((e) => ({
            label: e.nombre,
            value: e.id,
          }))}
        />
      </FormProvider>
    </PrivateLayout>
  );
};

CreatePermisoContainer.getInitialProps = () => {
  let title = 'Agregar Permiso';
  const items = [
    { title: 'Permisos', href: '/auth/permisos' },
    { title: 'Agregar Permiso', active: true },
  ];

  return {
    items,
    title,
  };
};

export default CreatePermisoContainer;
