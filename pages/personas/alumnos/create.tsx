import { useMutation, useQuery } from '@apollo/client';
import AlumnoFormContainer from 'src/components/pages/personas/alumnos/form';
import PersonaMutations from '@graphql/Personas/mutations.gql';
import { getParametrosFormAlumnos } from '@graphql/Personas/queries.gql';
import PrivateLayout from '@layouts/privateLayout';
import { useRouter } from 'next/router';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

const CreateAlumnoContainer = ({ items, title }) => {
  const methods = useForm({ mode: 'onChange' });

  const { loading, data } = useQuery(getParametrosFormAlumnos);
  const [create] = useMutation(PersonaMutations.createAlumno);
  const router = useRouter();

  const onSubmit = async (input) => {
    console.log(JSON.stringify(input));

    const res = await create({ variables: { input } });
    console.log(res);
    router.push('/personas/alumnos');
  };

  return (
    <FormProvider {...methods}>
      <PrivateLayout loading={loading}>
        <AlumnoFormContainer
          title={title}
          items={items}
          onSubmit={onSubmit}
          personas={data?.personas}
        />
      </PrivateLayout>
    </FormProvider>
  );
};

CreateAlumnoContainer.getInitialProps = () => {
  let title = 'Agregar Alumno';
  const items = [
    { title: 'Alumnos', href: '/personas/alumnos' },
    { title: 'Agregar Alumno', active: true },
  ];

  return {
    items,
    title,
  };
};

export default CreateAlumnoContainer;
