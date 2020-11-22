import { useMutation } from '@apollo/client';
import PeriodoLectivoFormContainer from '@components/pages/matriculas/periodos/form';
import PrivateLayout from '@layouts/privateLayout';
import { useRouter } from 'next/router';
import React from 'react';
import MatriculaMutations from '@graphql/Matriculas/mutations.gql';

const CreatePeriodoLectivoContainer = () => {
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
      />
    </PrivateLayout>
  );
};

export default CreatePeriodoLectivoContainer;
