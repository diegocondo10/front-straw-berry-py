import { useQuery } from '@apollo/client';
import AulasFormContainer from '@components/pages/matriculas/aulas/form';
import PrivateLayout from '@layouts/privateLayout';
import React from 'react';
import MatriculaQueries from '@graphql/Matriculas/queries.gql';

const UpdateAulaContainer = ({ id }) => {
  const { loading, data } = useQuery(MatriculaQueries.getByIdAula, {
    variables: { id },
  });

  console.log(data);
  const items = [
    {
      title: 'Aulas',
      href: '/matriculas/aulas',
    },
    {
      title: data?.aula?.nombre,
      active: true,
    },
  ];
  const onSubmit = async (input) => {
    console.log(input);
  };

  return (
    <PrivateLayout title="Editar Aula" loading={loading}>
      <AulasFormContainer
        docentes={data?.docentes}
        items={items}
        loading={false}
        onSubmit={onSubmit}
        periodos={data?.periodosLectivos}
        title="Editar Aula"
        defaultData={data?.aula}
      />
    </PrivateLayout>
  );
};

UpdateAulaContainer.getInitialProps = ({ query }) => query;

export default UpdateAulaContainer;
