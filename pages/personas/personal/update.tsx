import { useMutation, useQuery } from '@apollo/client';
import DocenteFormContainer from '@components/pages/personas/personal/form';
import PrivateLayout from '@layouts/privateLayout';
import { Docente } from '@services/personas.service';
import { useRouter } from 'next/router';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

const UpdateDocenteContainer = ({ title, items, id }) => {
  const methods = useForm({
    mode: 'onChange',
  });

  const { loading, data } = useQuery(Docente.getByIdWithParams, {
    variables: { id },
    onCompleted: ({ docente }) => {
      console.log(docente);
      methods.reset(docente);
    },
  });

  const [update] = useMutation(Docente.update);

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
