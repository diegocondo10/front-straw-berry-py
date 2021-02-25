import { useMutation, useQuery } from '@apollo/client';
import PersonasMutations from '@graphql/Personas/mutations.gql';
import { getParametrosFormPersonal } from '@graphql/Personas/queries.gql';
import { useRouter } from 'next/router';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import PersonalFormContainer from 'src/containers/Personal/form';
import PrivateLayout from 'src/layouts/privateLayout';

const CreatePersonalContainer = ({ items, title }) => {
  const methods = useForm({
    mode: 'onChange',
  });

  const { loading, data } = useQuery(getParametrosFormPersonal);
  const [create] = useMutation(PersonasMutations.createPersonal);
  const router = useRouter();

  const onSubmit = async (input) => {
    await create({ variables: { input } });
    router.push('/personas/personal');
  };

  return (
    <PrivateLayout loading={loading}>
      <FormProvider {...methods}>
        <PersonalFormContainer
          title={title}
          items={items}
          onSubmit={onSubmit}
          personas={data?.personas}
          funcionesPersonal={data?.funcionesPersonal}
        />
      </FormProvider>
    </PrivateLayout>
  );
};

CreatePersonalContainer.getInitialProps = () => {
  let title = 'Agregar Personal';
  const items = [
    { title: 'Personal', href: '/personas/personal' },
    { title: 'Agregar Personal', active: true },
  ];

  return {
    items,
    title,
  };
};

export default CreatePersonalContainer;
