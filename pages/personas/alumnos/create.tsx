import { useMutation, useQuery } from '@apollo/client';
import AlumnoFormContainer from '@components/pages/personas/alumnos/form';
import PrivateLayout from '@layouts/privateLayout';
import { useRouter } from 'next/router';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import PersonaQueries from '@graphql/Matriculas/queries.gql';
import PersonaMutations from '@graphql/Matriculas/mutations.gql';

const defaultValue = {
  persona: '1',
  padre: {
    identificacion: '123123123',
    primerNombre: 'sfdasdfsadfasdf',
    segundoNombre: 'SDFASDFASDF',
    primerApellido: 'ASDFASDFASDF',
    segundoApellido: 'dsfasdfasdfasd',
    ocupacion: 'sdfasdfasdasdf',
    direccion: 'SADFASDFASDF',
    telefono: '123112341234',
    celular: '123212341234',
  },
  madre: {
    identificacion: '213412341234123',
    primerNombre: 'dsfasdasdf',
    segundoNombre: 'dafasdfa',
    primerApellido: 'asdf',
    segundoApellido: 'adsfasdfasdf',
    ocupacion: 'asdfsadf',
    direccion: 'sadfsadf',
    telefono: '21312312',
    celular: '123123123',
  },
  contactoEmergencia: {
    identificacion: '34213412',
    primerNombre: 'dsafasda',
    segundoNombre: 'asfasdf',
    primerApellido: 'asdfasdfadsf',
    segundoApellido: 'sdfasfasd',
    telefono: '1231212',
    celular: '123123',
  },
};

const CreateAlumnoContainer = ({ items, title }) => {
  const methods = useForm({
    mode: 'onChange',
    defaultValues: defaultValue,
  });

  const { loading, data } = useQuery(PersonaQueries.getAllCustom('str'));
  const [create] = useMutation(PersonaMutations.createAlumno);
  const router = useRouter();

  const onSubmit = async (input) => {
    console.log(JSON.stringify(input));

    const res = await create({ variables: { input } });
    console.log(res);
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
