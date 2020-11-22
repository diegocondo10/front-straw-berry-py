import { useMutation, useQuery } from '@apollo/client';
import MatriculaFormContainer from '@components/pages/matriculas/form';
import PrivateLayout from '@layouts/privateLayout';
import { useRouter } from 'next/router';
import React from 'react';
import MatriculaQueries from '@graphql/Matriculas/queries.gql';
import MatriculaMutations from '@graphql/Matriculas/mutations.gql';

const CreateMatriculaContainer = () => {
  const { loading, data } = useQuery(MatriculaQueries.getDataForm);

  const [create, { loading: loadingCreate }] = useMutation(MatriculaMutations.createMatricula);

  const router = useRouter();

  const onSubmit = async (input) => {
    console.log(input);

    await create({ variables: { input } });

    router.push('/matriculas');
  };

  return (
    <PrivateLayout title="Crear Matricula" loading={loading || loadingCreate}>
      <MatriculaFormContainer
        title="Crear Matricula"
        items={[
          {
            title: 'Matricula',
            href: '/matriculas',
          },
          {
            title: 'Crear Matricula',
            active: true,
          },
        ]}
        onSubmit={onSubmit}
        //loading={loadingCreate}
        aulas={data?.aulas}
        alumnos={data?.alumnos}
      />
    </PrivateLayout>
  );
};

export default CreateMatriculaContainer;
