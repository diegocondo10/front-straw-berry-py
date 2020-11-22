import { useMutation, useQuery } from '@apollo/client';
import MatriculaFormContainer from '@components/pages/matriculas/form';
import PrivateLayout from '@layouts/privateLayout';
import MatriculaQueries from '@graphql/Matriculas/queries.gql';
import MatriculaMutations from '@graphql/Matriculas/mutations.gql';

import { useRouter } from 'next/router';
import React from 'react';

const UpdateMatriculaContainer = ({ id }) => {
  const { loading, data } = useQuery(MatriculaQueries.getMatriculaById, {
    variables: { id },
  });
  const router = useRouter();

  const [update, { loading: loadingUpdate }] = useMutation(MatriculaMutations.updateMatricula);

  console.log('MATRICULA: ', data);

  const onSubmit = async (input) => {
    const updateResult = await update({ variables: { input, id } });

    router.push('/matriculas');

    console.log('RESULT: ', updateResult);
  };

  const matricula = data?.matricula;

  return (
    <PrivateLayout title="Editar Matrícula" loading={loading || loadingUpdate}>
      <MatriculaFormContainer
        alumnos={data?.alumnos}
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
        //loading={false}
        onSubmit={onSubmit}
        aulas={data?.aulas}
        title="Editar Matrícula"
        defaultData={data?.matricula}
      />
    </PrivateLayout>
  );
};

UpdateMatriculaContainer.getInitialProps = ({ query }) => query;

export default UpdateMatriculaContainer;
