import { useMutation, useQuery } from '@apollo/client';
import PeriodoLectivoFormContainer from '@containers/PeriodosLectivos/form';
import MatriculaMutations from '@graphql/Matriculas/mutations.gql';
import MatriculaQueries from '@graphql/Matriculas/queries.gql';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import PrivateLayout from 'src/layouts/privateLayout';

const UpdatePeriodoContainer: NextPage<any> = ({ id }) => {
  const methods = useForm({ mode: 'onChange' });

  const { loading, data } = useQuery(MatriculaQueries.getByIdPeriodo, {
    variables: { id },
    onCompleted: ({ periodoLectivo }) => methods.reset(periodoLectivo),
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
    <FormProvider {...methods}>
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
    </FormProvider>
  );
};

UpdatePeriodoContainer.getInitialProps = ({ query }) => query;

export default UpdatePeriodoContainer;
