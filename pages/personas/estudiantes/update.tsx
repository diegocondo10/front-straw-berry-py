import { useMutation, useQuery } from '@apollo/client';
import EstudianteFormContainer from '@components/pages/personas/estudiantes/form';
import PrivateLayout from '@layouts/privateLayout';
import { Estudiante } from '@services/personas.service';
import { useRouter } from 'next/router';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

const UpdateEstudianteContainer = ({ title, items, id }) => {
  const methods = useForm({
    mode: 'onChange',
  });

  const { loading, data } = useQuery(Estudiante.getById, {
    variables: { id },
    onCompleted: ({ estudiante }) => {
      methods.reset(estudiante);
    },
  });

  const [update] = useMutation(Estudiante.update);

  const router = useRouter();
  const onSubmit = async (input) => {
    console.log(input);
    await update({ variables: { input, id } });
    router.push('/personas/estudiantes');
  };

  return (
    <PrivateLayout loading={loading}>
      <FormProvider {...methods}>
        <EstudianteFormContainer
          title={title}
          items={items}
          onSubmit={onSubmit}
          personas={data?.personas}
        />
      </FormProvider>
    </PrivateLayout>
  );
};

UpdateEstudianteContainer.getInitialProps = ({ query }) => {
  let title = 'Editar Estudiante';
  const items = [
    { title: 'Estudiante', href: '/personas/estudiantes' },
    { title: 'Editar Estudiante', active: true },
  ];

  return {
    items,
    title,
    id: query.id,
  };
};

export default UpdateEstudianteContainer;
