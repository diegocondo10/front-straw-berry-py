import { useQuery, useMutation } from '@apollo/client';
import PersonalFormContainer from '@components/pages/personas/personal/form';
import PrivateLayout from '@layouts/privateLayout';
import { useRouter } from 'next/router';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import PersonasQueries from '@graphql/Personas/queries.gql';
import PersonasMutations from '@graphql/Personas/mutations.gql';

const CreateDocenteContainer = ({ items, title }) => {
  const methods = useForm({ mode: 'onChange' });

  const { loading, data } = useQuery(PersonasQueries.getPersonasFormPersonal);
  const [create] = useMutation(PersonasMutations.createPersonal);
  const router = useRouter();

  const onSubmit = async (input) => {
    input.persona = input.persona.id;
    console.log('INPUT: ', input);

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
        />
      </FormProvider>
    </PrivateLayout>
  );
};

CreateDocenteContainer.getInitialProps = () => {
  let title = 'Agregar Personal';
  const items = [
    { title: 'Docentes', href: '/personas/personal' },
    { title: 'Agregar Personal', active: true },
  ];

  return {
    items,
    title,
  };
};

export default CreateDocenteContainer;
