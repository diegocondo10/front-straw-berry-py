import { useMutation, useQuery } from '@apollo/client';
import MatriculaFormContainer from '@components/pages/matriculas/form';
import PrivateLayout from '@layouts/privateLayout';
import { useRouter } from 'next/router';
import React from 'react';
import { getDataForm } from '@graphql/Matriculas/queries.gql';
import { createMatricula } from '@graphql/Matriculas/mutations.gql';

const CreateMatriculaContainer = () => {
  const { loading, data } = useQuery(getDataForm);

  const [create, { loading: loadingCreate }] = useMutation(createMatricula);

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
      <main className="container  ">
        <h1>Prueba</h1>
      </main>
    </PrivateLayout>
  );
};

export default CreateMatriculaContainer;
