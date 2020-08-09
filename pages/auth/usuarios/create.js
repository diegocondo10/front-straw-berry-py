import PrivateLayout from '@layouts/privateLayout';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import UsuarioFormContainer from '@components/pages/auth/usuarios/form';

const CreateUsuarioContainer = ({ items, title }) => {
  const methods = useForm({ mode: 'onChange' });

  const onSubmit = async (input) => {
    console.log(input);
  };

  return (
    <PrivateLayout>
      <FormProvider {...methods} onSubmit={onSubmit}>
        <UsuarioFormContainer title={title} items={items} />
      </FormProvider>
    </PrivateLayout>
  );
};

CreateUsuarioContainer.getInitialProps = () => {
  return {
    items: [
      { title: 'Usuarios', href: '/auth/usuarios' },
      {
        title: 'Agregar Usuario',
        active: true,
      },
    ],
    title: 'Agregar Usuario',
  };
};

export default CreateUsuarioContainer;
