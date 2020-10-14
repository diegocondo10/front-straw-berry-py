import { useMutation, useQuery } from '@apollo/client';
import AlumnoFormContainer from '@components/pages/personas/alumnos/form';
import PrivateLayout from '@layouts/privateLayout';
import { Alumno, Persona } from '@services/personas.service';
import { useRouter } from 'next/router';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

const CreateAlumnoContainer = ({ items, title }) => {
  const methods = useForm({
    mode: 'onChange',
  });

  const { loading, data } = useQuery(Persona.getAllCustom('str'));
  const [create] = useMutation(Alumno.create);
  const router = useRouter();

  const onSubmit = async (input) => {
    console.log(input);

    //const res = await create({ variables: { input } });

    //router.push('/personas/alumnos');
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

CreateAlumnoContainer.getInitialProps = () => {
  let title = 'Agregar Alumno';
  const items = [
    { title: 'Alumno', href: '/personas/alumnos' },
    { title: 'Agregar Alumno', active: true },
  ];

  return {
    items,
    title,
  };
};

export default CreateAlumnoContainer;
