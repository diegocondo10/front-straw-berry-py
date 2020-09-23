import { useMutation, useQuery } from '@apollo/client';
import PersonaFormContainer from '@components/pages/personas/form';
import PrivateLayout from '@layouts/privateLayout';
import { Persona } from '@services/personas.service';
import { useRouter } from 'next/router';
import React from 'react';

const CreatePersonaContainer = ({ items, title }) => {
  const [create] = useMutation(Persona.create);

  const router = useRouter();

  const { data, loading } = useQuery(Persona.getParametrosForm);

  const onSubmit = async (input) => {
    const res = await create({ variables: { input } });
    router.push('/personas');
  };

  return (
    <PrivateLayout title="Crear Persona" loading={loading}>
      <PersonaFormContainer
        title={title}
        items={items}
        onSubmit={onSubmit}
        discapacidades={data?.discapacidades}
      />
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
