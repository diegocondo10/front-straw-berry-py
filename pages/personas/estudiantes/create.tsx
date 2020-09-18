import { useMutation, useQuery } from '@apollo/client';
import EstudianteFormContainer from '@components/pages/personas/estudiantes/form';
import PrivateLayout from '@layouts/privateLayout';
import { Estudiante, Persona } from '@services/personas.service';
import { useRouter } from 'next/router';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

const CreateEstudianteContainer = ({ items, title }) => {
  const methods = useForm({
    mode: 'onChange',
  });

  const { loading, data } = useQuery(Persona.getAllCustom('str'));
  const [create] = useMutation(Estudiante.create);
  const router = useRouter();

  const onSubmit = async (input) => {
    const res = await create({ variables: { input } });

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

CreateEstudianteContainer.getInitialProps = () => {
  let title = 'Agregar Estudiante';
  const items = [
    { title: 'Estudiante', href: '/personas/estudiantes' },
    { title: 'Agregar Estudiante', active: true },
  ];

  return {
    items,
    title,
  };
};

export default CreateEstudianteContainer;
