import { useMutation, useQuery } from '@apollo/client';
import PeriodoLectivoFormContainer from '@components/pages/auth/periodoLectivo/form';
import PrivateLayout from '@layouts/privateLayout';
import { PeriodoLectivo } from '@services/matriculas.service';
import { useRouter } from 'next/router';
import React from 'react';

const UpdatePeriodoContainer = ({ id }) => {
  const { loading, data } = useQuery(PeriodoLectivo.getById, { variables: { id } });

  const [create, { loading: loadingGuardar }] = useMutation(PeriodoLectivo.update);

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
      />
    </PrivateLayout>
  );
};

UpdatePeriodoContainer.getInitialProps = ({ query }) => query;

export default UpdatePeriodoContainer;
