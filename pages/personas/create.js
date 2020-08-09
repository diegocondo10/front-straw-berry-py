import PersonaFormContainer from '@components/pages/personas/form';
import PrivateLayout from '@layouts/privateLayout';
import { useRouter } from 'next/router';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

const CreatePersonaContainer = ({ items, title }) => {
  const methods = useForm({
    mode: 'onChange',
  });
  const router = useRouter();

  const data = {};

  const onSubmit = async (input) => {
    console.log('INPUT: ', input);
  };

  return (
    <PrivateLayout>
      <FormProvider {...methods}>
        <PersonaFormContainer title={title} items={items} onSubmit={onSubmit} />
      </FormProvider>
    </PrivateLayout>
  );
};

CreatePersonaContainer.getInitialProps = () => {
  let title = 'Agregar Persona';
  const items = [
    { title: 'Personas', href: '/personas' },
    { title: 'Agregar Persona', active: true },
  ];

  return {
    items,
    title,
  };
};

export default CreatePersonaContainer;
