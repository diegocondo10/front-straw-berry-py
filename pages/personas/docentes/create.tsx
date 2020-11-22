import { useQuery, useMutation } from '@apollo/client';
import DocenteFormContainer from '@components/pages/personas/docentes/form';
import PrivateLayout from '@layouts/privateLayout';
import { useRouter } from 'next/router';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import PersonaQueries from '@graphql/Matriculas/queries.gql';
import PersonaMutations from '@graphql/Matriculas/mutations.gql';

const CreateDocenteContainer = ({ items, title }) => {
  const methods = useForm({ mode: 'onChange' });

  const { loading, data } = useQuery(PersonaQueries.personasNoDocentes);
  const [create] = useMutation(PersonaMutations.createDocente);
  const router = useRouter();

  const onSubmit = async (input) => {
    input.persona = input.persona.id;
    console.log('INPUT: ', input);

    await create({ variables: { input } });
    router.push('/personas/docentes');
  };

  return (
    <PrivateLayout loading={loading}>
      <FormProvider {...methods}>
        <DocenteFormContainer
          title={title}
          items={items}
          onSubmit={onSubmit}
          personas={data?.personasNoDocentes}
        />
      </FormProvider>
    </PrivateLayout>
  );
};

CreateDocenteContainer.getInitialProps = () => {
  let title = 'Agregar Docente';
  const items = [
    { title: 'Docentes', href: '/personas/docentes' },
    { title: 'Agregar Docente', active: true },
  ];

  return {
    items,
    title,
  };
};

export default CreateDocenteContainer;
