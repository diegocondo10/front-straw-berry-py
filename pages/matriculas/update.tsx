import { useMutation, useQuery } from '@apollo/client';
import MatriculaFormContainer from '@components/pages/matriculas/form';
import PrivateLayout from '@layouts/privateLayout';
import MatriculaQueries from '@graphql/Matriculas/queries.gql';
import MatriculaMutations from '@graphql/Matriculas/mutations.gql';

import { useRouter } from 'next/router';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

const UpdateMatriculaContainer = ({ id }) => {
  const methods = useForm({ mode: 'onChange' });

  const { loading, data } = useQuery(MatriculaQueries.getMatriculaByIdFormUpdate, {
    variables: { id },
    onCompleted: ({ matricula }) => {
      console.log('DATA: ', matricula);
      methods.reset(matricula);
    },
  });
  const router = useRouter();

  const [update, { loading: loadingUpdate }] = useMutation(
    MatriculaMutations.updateMatricula,
  );

  const onSubmit = async (input) => {
    const updateResult = await update({ variables: { input, id } });

    router.push('/matriculas');

    console.log('RESULT: ', updateResult);
  };

  const matricula = data?.matricula;

  return (
    <PrivateLayout title="Editar Matrícula" loading={loading || loadingUpdate}>
      <FormProvider {...methods}>
        <MatriculaFormContainer
          items={[
            {
              title: 'Matriculas',
              href: '/matriculas',
            },
            {
              title: `${matricula?.alumno?.persona?.str} | ${matricula?.aula?.nombre}`,
              active: true,
            },
          ]}
          action="update"
          //loading={false}
          onSubmit={onSubmit}
          aulas={data?.aulas}
          alumnos={data?.alumnos}
          title="Editar Matrícula"
        />
      </FormProvider>
    </PrivateLayout>
  );
};

UpdateMatriculaContainer.getInitialProps = ({ query }) => query;

export default UpdateMatriculaContainer;
