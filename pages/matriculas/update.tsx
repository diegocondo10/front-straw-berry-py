import { useMutation, useQuery } from '@apollo/client';
import MatriculaFormContainer from '@components/pages/matriculas/form';
import MatriculaMutations from '@graphql/Matriculas/mutations.gql';
import MatriculaQueries from '@graphql/Matriculas/queries.gql';
import PrivateLayout from '@layouts/privateLayout';
import { useRouter } from 'next/router';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

const UpdateMatriculaContainer = ({ id }) => {
  const methods = useForm({ mode: 'onChange' });

  const { loading, data } = useQuery(MatriculaQueries.getMatriculaByIdFormUpdate, {
    variables: { id },
    onCompleted: ({ matricula }) => methods.reset(matricula),
  });

  const router = useRouter();

  const [update, { loading: loadingUpdate }] = useMutation(
    MatriculaMutations.updateMatricula,
  );

  const onSubmit = async (input) => {
    const updateResult = await update({ variables: { input, id } });
    router.push('/matriculas');
  };

  const matricula = data?.matricula;

  return (
    <FormProvider {...methods}>
      <PrivateLayout title="Editar Matrícula" loading={loading || loadingUpdate}>
        <MatriculaFormContainer
          items={[
            {
              title: 'Matriculas',
              href: '/matriculas',
            },
            {
              title: `${matricula?.alumno?.personaStr} | ${matricula?.aula?.nombre}`,
              active: true,
            },
          ]}
          action="update"
          //loading={false}
          onSubmit={onSubmit}
          aulas={data?.aulas}
          alumnos={[matricula?.alumno]}
          title="Editar Matrícula"
        />
      </PrivateLayout>
    </FormProvider>
  );
};

UpdateMatriculaContainer.getInitialProps = ({ query }) => query;

export default UpdateMatriculaContainer;
