import { useMutation, useQuery } from '@apollo/client';
import PersonaFormContainer from '@containers/Personas/form';
import PersonaMutations from '@graphql/Personas/mutations.gql';
import { getParamsFormPersonas } from '@graphql/Personas/queries.gql';
import PrivateLayout from 'src/layouts/privateLayout';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

const CreatePersonaContainer: NextPage<{
  items: any[];
  title: string;
}> = ({ items, title }) => {
  const methods = useForm({
    mode: 'onChange',
    defaultValues: {
      // tipoIdentificacion: 'CEDULA',
      // identificacion: faker.random.alpha({ count: 10 }),
      // primerApellido: faker.name.lastName(),
      // segundoApellido: faker.name.lastName(),
      // primerNombre: faker.name.firstName(),
      // segundoNombre: faker.name.firstName(),
      // fechaNacimiento: '2010-01-06',
      // paisNacimiento: faker.address.country(),
      // estadoCivil: 'Soltero/a',
      // etnia: 'Mestizo',
      // tipoSangre: 'O+',
      // paisResidencia: faker.address.country(),
      // provinciaResidencia: 'AZUAY',
      // cantonResidencia: 'CUENCA',
      // parroquiaResidencia: 'YANUNCAY',
      // direccionDomiciliaria: faker.address.direction(),
      // correo: faker.internet.email(),
      // telefono: faker.phone.phoneNumber(),
      // celularUno: faker.phone.phoneNumber(),
      // tieneDiscapacidad: 'SI',
      // carnetConadis: faker.random.alphaNumeric(10),
      // porcentajeDiscapacidad: 50,
    },
  });

  const [create] = useMutation(PersonaMutations.createPersona);

  const router = useRouter();

  const { data, loading } = useQuery(getParamsFormPersonas);

  const onSubmit = async (input) => {
    const res = await create({ variables: { input } });
    router.push('/personas');
  };

  return (
    <FormProvider {...methods}>
      <PrivateLayout title="Crear Persona">
        <PersonaFormContainer
          title={title}
          items={items}
          onSubmit={onSubmit}
          discapacidades={data?.discapacidades}
        />
      </PrivateLayout>
    </FormProvider>
  );
};

CreatePersonaContainer.getInitialProps = () => ({
  items: [
    { title: 'Personas', href: '/personas' },
    { title: 'Agregar Persona', active: true },
  ],
  title: 'Agregar Persona',
});

export default CreatePersonaContainer;
