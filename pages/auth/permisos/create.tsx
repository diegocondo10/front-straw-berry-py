import { useMutation } from '@apollo/client';
import PermisoFormContainer from '@containers/Auth/permisos/form';
import AuthMutations from '@graphql/Auth/mutations.gql';
import PrivateLayout from 'src/layouts/privateLayout';
import { useRouter } from 'next/router';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

const CreatePermisoContainer = ({ items, title }) => {
  const methods = useForm({ mode: 'onChange' });
  const router = useRouter();

  const [create] = useMutation(AuthMutations.createPermiso);

  const onSubmit = async (input) => {
    await create({ variables: { input } });
    router.push('/auth/permisos');
  };

  return (
    <FormProvider {...methods}>
      <PrivateLayout>
        <PermisoFormContainer title={title} items={items} onSubmit={onSubmit} />
      </PrivateLayout>
    </FormProvider>
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
