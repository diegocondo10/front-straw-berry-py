import { useMutation, useQuery } from '@apollo/client';
import PersonaFormContainer from '@components/pages/personas/form';
import PrivateLayout from '@layouts/privateLayout';
import { useRouter } from 'next/router';
import React from 'react';
import PersonaMutations from '@graphql/Personas/mutations.gql';
import { FormProvider, useForm } from 'react-hook-form';

const CreatePersonaContainer = ({ items, title }) => {
  const methods = useForm({ mode: 'onChange' });

  const [create] = useMutation(PersonaMutations.createPersona);

  const router = useRouter();

  //const { data, loading } = useQuery(PersonaQueries.getParametrosForm);

  const onSubmit = async (input) => {
    const res = await create({ variables: { input } });
    router.push('/personas');
  };

  return (
    <PrivateLayout title="Crear Persona">
      <FormProvider {...methods}>
        <PersonaFormContainer
          title={title}
          items={items}
          onSubmit={onSubmit}
          //discapacidades={data?.discapacidades}
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
