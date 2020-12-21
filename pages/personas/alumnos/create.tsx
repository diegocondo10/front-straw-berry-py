import { useMutation, useQuery } from '@apollo/client';
import AlumnoFormContainer from '@components/pages/personas/alumnos/form';
import PrivateLayout from '@layouts/privateLayout';
import { useRouter } from 'next/router';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { getParametrosFormAlumnos } from '@graphql/Personas/queries.gql';
import PersonaMutations from '@graphql/Personas/mutations.gql';
import faker from 'faker';

const defaultValue = {
  persona: '1',
  padre: {
    identificacion: faker.random.alphaNumeric(10),
    primerNombre: faker.name.firstName(),
    segundoNombre: faker.name.firstName(),
    primerApellido: faker.name.lastName(),
    segundoApellido: faker.name.lastName(),
    ocupacion: faker.random.words(),
    direccion: faker.address.streetAddress(),
    telefono: faker.phone.phoneNumber(),
    celular: faker.phone.phoneNumber(),
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
    { title: 'Alumnos', href: '/personas/alumnos' },
    { title: 'Agregar Alumno', active: true },
  ];

  return {
    items,
    title,
  };
};

export default CreateAlumnoContainer;
