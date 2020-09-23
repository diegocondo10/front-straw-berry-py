import { useMutation } from '@apollo/client';
import PeriodoLectivoFormContainer from '@components/pages/auth/periodoLectivo/form';
import PrivateLayout from '@layouts/privateLayout';
import { PeriodoLectivo } from '@services/matriculas.service';
import { useRouter } from 'next/router';
import React from 'react';

const CreatePeriodoLectivoContainer = () => {
  const [create, { loading }] = useMutation(PeriodoLectivo.create);

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
