import { useMutation, useQuery } from '@apollo/client';
import PeriodoLectivoFormContainer from '@components/pages/matriculas/periodos/form';
import MatriculaMutations from '@graphql/Matriculas/mutations.gql';
import { getParametrosFormPeriodos } from '@graphql/Matriculas/queries.gql';
import PrivateLayout from '@layouts/privateLayout';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';

const CreatePeriodoLectivoContainer: NextPage<any> = () => {
  const { data } = useQuery(getParametrosFormPeriodos);
  const [create, { loading }] = useMutation(MatriculaMutations.createPeriodo);

  const router = useRouter();

  const onSubmit = async (input) => {
    await create({ variables: { input } });
    router.push('/matriculas/periodos');
  };

  return (
    <PrivateLayout title="Nuevo Periodo Lectivo">
      <PeriodoLectivoFormContainer
        title="Crear Periodo"
        onSubmit={onSubmit}
        loading={loading}
        items={[
          { title: 'Periodos Lectivos', href: '/matriculas/periodos' },
          { title: 'Crear Periodo Lectivo', active: true },
        ]}
        personal={data?.personalAll}
      />
    </PrivateLayout>
  );
};

export default CreatePeriodoLectivoContainer;
