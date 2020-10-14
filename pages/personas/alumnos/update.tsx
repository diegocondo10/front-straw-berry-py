import { useMutation, useQuery } from '@apollo/client';
import AlumnoFormContainer from '@components/pages/personas/alumnos/form';
import PrivateLayout from '@layouts/privateLayout';
import { Alumno } from '@services/personas.service';
import { useRouter } from 'next/router';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

const UpdateAlumnoContainer = ({ title, items, id }) => {
  const methods = useForm({
    mode: 'onChange',
  });

  const { loading, data } = useQuery(Alumno.getById, {
    variables: { id },
    onCompleted: ({ alumno }) => {
      methods.reset(alumno);
    },
  });

  const [update] = useMutation(Alumno.update);

  const router = useRouter();
  const onSubmit = async (input) => {
    console.log(input);
    await update({ variables: { input, id } });
    router.push('/personas/alumnos');
  };

  return (
    <PrivateLayout loading={loading}>
      <FormProvider {...methods}>
        <AlumnoFormContainer
          title={title}
          items={items}
          onSubmit={onSubmit}
          personas={data?.personas}
        />
      </FormProvider>
    </PrivateLayout>
  );
};

UpdateAlumnoContainer.getInitialProps = ({ query }) => {
  let title = 'Editar Alumno';
  const items = [
    { title: 'Alumno', href: '/personas/alumnos' },
    { title: 'Editar Alumno', active: true },
  ];

  return {
    items,
    title,
    id: query.id,
  };
};

export default UpdateAlumnoContainer;
