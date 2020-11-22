import { useMutation, useQuery } from '@apollo/client';
import MateriaFormContainer from '@components/pages/matriculas/materias/form';
import PrivateLayout from '@layouts/privateLayout';
import { useRouter } from 'next/router';
import React from 'react';
import MatriculaQueries from '@graphql/Matriculas/queries.gql';
import MatriculaMutations from '@graphql/Matriculas/mutations.gql';

const UpdateMateriaContainer = ({ title, id }) => {
  const { loading, data } = useQuery(MatriculaQueries.getByIdMateria, {
    variables: { id },
  });

  const [update] = useMutation(MatriculaMutations.updateMateria);

  const router = useRouter();

  const onSubmit = async (input) => {
    try {
      const res = await update({ variables: { id, input } });
      router.push('/matriculas/materias');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PrivateLayout loading={loading}>
      <MateriaFormContainer
        title={title}
        items={[
          { title: 'Materias', href: '/matriculas/materias' },
          { title: data?.materia?.nombre, active: true },
        ]}
        onSubmit={onSubmit}
        defaultData={data?.materia}
      />
    </PrivateLayout>
  );
};

UpdateMateriaContainer.getInitialProps = ({ query }) => {
  let title = 'Editar Materia';

  return {
    title,
    id: query.id,
  };
};

export default UpdateMateriaContainer;
