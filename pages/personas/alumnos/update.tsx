import { useMutation, useQuery } from '@apollo/client';
import AlumnoFormContainer from '@components/pages/personas/alumnos/form';
import PersonaMutations from '@graphql/Personas/mutations.gql';
import PersonaQueries from '@graphql/Personas/queries.gql';
import PrivateLayout from '@layouts/privateLayout';
import { useRouter } from 'next/router';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

const UpdateAlumnoContainer = ({ id }) => {
  const methods = useForm({
    mode: 'onChange',
  });

  const { loading, data } = useQuery(PersonaQueries.getAlumnoByIdFormUpdate, {
    variables: { id },
    onCompleted: ({ alumno }) => {
      methods.reset(alumno);
    },
  });

  const [update] = useMutation(PersonaMutations.updateAlumno);

  const router = useRouter();
  const onSubmit = async (input) => {
    console.log(input);
    await update({ variables: { input, id } });
    router.push('/personas/alumnos');
  };

  return (
    <FormProvider {...methods}>
      <PrivateLayout loading={loading}>
        <AlumnoFormContainer
          title="Editar Alumno"
          items={[
            { title: 'Alumnos', href: '/personas/alumnos' },
            { title: 'Editar Alumno', active: true },
          ]}
          onSubmit={onSubmit}
          personas={data?.personas}
          action="upt"
        />
      </PrivateLayout>
    </FormProvider>
  );
};

UpdateAlumnoContainer.getInitialProps = ({ query }) => query;

export default UpdateAlumnoContainer;
