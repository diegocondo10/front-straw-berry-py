import { useMutation, useQuery } from '@apollo/client';
import DocenteFormContainer from '@components/pages/personas/personal/form';
import PrivateLayout from '@layouts/privateLayout';
import { useRouter } from 'next/router';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import PersonaQueries from '@graphql/Matriculas/queries.gql';
import PersonaMutations from '@graphql/Matriculas/mutations.gql';

const UpdateDocenteContainer = ({ title, items, id }) => {
  const methods = useForm({
    mode: 'onChange',
  });

  const { loading, data } = useQuery(PersonaQueries.getByIdWithParams, {
    variables: { id },
    onCompleted: ({ docente }) => {
      console.log(docente);
      methods.reset(docente);
    },
  });

  const [update] = useMutation(PersonaMutations.updateDocente);

  const router = useRouter();

  const onSubmit = async (input) => {
    input.persona = input.persona.id;
    console.log(input);
    await update({
      variables: {
        id,
        input,
      },
    });

    router.push('/personas/docentes');
  };

  return (
    <PrivateLayout loading={loading}>
      <FormProvider {...methods}>
        <DocenteFormContainer
          title={title}
          items={items}
          onSubmit={onSubmit}
          personas={data?.personas}
        />
      </FormProvider>
    </PrivateLayout>
  );
};

UpdateDocenteContainer.getInitialProps = ({ query }) => {
  let title = 'Editar Docente';
  const items = [
    { title: 'Docente', href: '/personas/docentes' },
    { title: 'Editar Docente', active: true },
  ];

  return {
    items,
    title,
    id: query.id,
  };
};

export default UpdateDocenteContainer;
