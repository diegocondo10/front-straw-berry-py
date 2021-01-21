import { useMutation, useQuery } from '@apollo/client';
import PeriodoLectivoFormContainer from '@components/pages/matriculas/periodos/form';
import MatriculaMutations from '@graphql/Matriculas/mutations.gql';
import MatriculaQueries from '@graphql/Matriculas/queries.gql';
import PrivateLayout from '@layouts/privateLayout';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';

const UpdatePeriodoContainer: NextPage<any> = ({ id }) => {
  const { loading, data } = useQuery(MatriculaQueries.getByIdPeriodo, {
    variables: { id },
  });

  const [create, { loading: loadingGuardar }] = useMutation(
    MatriculaMutations.updatePeriodo,
  );

  const router = useRouter();

  const onSubmit = async (input) => {
    await create({ variables: { input, id } });
    router.push('/matriculas/periodos');
  };

  return (
    <PrivateLayout title="Editar Periodo Lectivo" loading={loading}>
      <PeriodoLectivoFormContainer
        title="Editar Periodo"
        onSubmit={onSubmit}
        loading={loadingGuardar}
        items={[
          { title: 'Periodos Lectivos', href: '/matriculas/periodos' },
          { title: data?.periodoLectivo?.nombre, active: true },
        ]}
        defaultData={data?.periodoLectivo}
        personal={data?.personalAll}
      />
    </PrivateLayout>
  );
};

UpdatePeriodoContainer.getInitialProps = ({ query }) => query;

export default UpdatePeriodoContainer;
