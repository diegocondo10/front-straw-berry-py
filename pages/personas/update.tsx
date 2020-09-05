import PersonaFormContainer from '@components/pages/personas/form';
import PrivateLayout from '@layouts/privateLayout';
import { useRouter } from 'next/router';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useQuery } from '@apollo/client';
import { Persona } from '@services/personas.service';

const UpdatePersonaContainer = ({ title, items, id }) => {
  const methods = useForm({ mode: 'onChange' });

  const { loading } = useQuery(Persona.getById, {
    variables: { id },
    onCompleted: ({ persona }) => {
      console.log(persona);
    },
  });

  const router = useRouter();

  const onSubmit = async (input) => {
    console.log(input);
  };

  return (
    <PrivateLayout loading={loading} title={title}>
      <FormProvider {...methods}>
        <PersonaFormContainer title={title} items={items} onSubmit={onSubmit} />
      </FormProvider>
    </PrivateLayout>
  );
};

UpdatePersonaContainer.getInitialProps = ({ query }) => {
  let title = 'Editar Persona';
  const items = [
    { title: 'Personas', href: '/personas' },
    { title: 'Editar Persona', active: true },
  ];

  return {
    items,
    title,
    id: query.id,
  };
};

export default UpdatePersonaContainer;
