import PersonaFormContainer from '@components/pages/personas/form';
import PrivateLayout from '@layouts/privateLayout';
import { useRouter } from 'next/router';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { Persona } from '@services/personas.service';

const CreatePersonaContainer = ({ items, title }) => {
  const methods = useForm({
    mode: 'onChange',
    defaultValues: {
      tipoSangre: 'AB+',
      fechaNacimiento: '1998-06-06',
      identificacion: '0104925789',
      primerApellido: 'Diego',
      segundoApellido: 'Xavier',
      primerNombre: 'Condo',
      segundoNombre: 'Ortiz',
      edad: '22',
      callePrincipal: 'PRUEBA',
      calleSecundaria: 'PRUEBA',
      lugarReferencia: '123',
      numeroCasa: 's/n',
      telefono: '07405447265',
      celular: '0992813680',
      correo: 'diegocondo1007@gmail.com',
      discapacidad: 'NINGUNA',
      carnetConadis: 'ASDFASDFASDF',
      ocupacion: 'FASDFASDF',
      nivelFormacion: 'SDFASDFASDF',
      tipoIdentificacion: 'CEDULA',
      genero: 'MASCULINO',
      sexo: 'FEMENINO',
    },
  });

  const [create] = useMutation(Persona.create);

  const router = useRouter();

  const onSubmit = async (input) => {
    console.log('INPUT: ', JSON.stringify(input));
    await create({ variables: { input } });
  };

  return (
    <PrivateLayout>
      <FormProvider {...methods}>
        <PersonaFormContainer title={title} items={items} onSubmit={onSubmit} />
      </FormProvider>
    </PrivateLayout>
  );
};

CreatePersonaContainer.getInitialProps = () => {
  let title = 'Agregar Persona';
  const items = [
    { title: 'Personas', href: '/personas' },
    { title: 'Agregar Persona', active: true },
  ];

  return {
    items,
    title,
  };
};

export default CreatePersonaContainer;
