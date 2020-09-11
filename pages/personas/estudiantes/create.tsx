import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { useRouter } from 'next/router';
import PrivateLayout from '@layouts/privateLayout';
import EstudianteFormContainer from '@components/pages/personas/estudiantes/form';
import { useQuery } from '@apollo/client';
import { Persona } from '@services/personas.service';

const CreateEstudianteContainer = ({ items, title }) => {
  const methods = useForm({
    mode: 'onChange',
  });

  const { loading, data } = useQuery(Persona.getAllCustom('id str'));

  const router = useRouter();

  const onSubmit = async (input) => {
    console.log('INPUT: ', input);
  };

  return (
    <PrivateLayout loading={loading}>
      <FormProvider {...methods}>
        <EstudianteFormContainer title={title} items={items} onSubmit={onSubmit} />
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
