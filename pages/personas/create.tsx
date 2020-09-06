import PersonaFormContainer from '@components/pages/personas/form';
import PrivateLayout from '@layouts/privateLayout';
import { useRouter } from 'next/router';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useMutation, useQuery } from '@apollo/client';
import { Persona } from '@services/personas.service';

const CreatePersonaContainer = ({ items, title }) => {
  const methods = useForm({ mode: 'onChange' });

  const [create] = useMutation(Persona.create);

  const router = useRouter();

  const { data, loading } = useQuery(Persona.getParametrosForm);

  const onSubmit = async (input) => {
    if (input.discapacidades) {
      input.discapacidades = input.discapacidades.map((e) => e.id);
    }

    console.log(input);
    console.log('INPUT: ', JSON.stringify(input));
    const res = await create({ variables: { input } });

    console.log('RESPONSE: ', res);

    router.push('/personas');
  };

  return (
    <PrivateLayout title="Crear Persona" loading={loading}>
      <FormProvider {...methods}>
        <PersonaFormContainer
          title={title}
          items={items}
          onSubmit={onSubmit}
          discapacidades={data?.discapacidades}
        />
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
