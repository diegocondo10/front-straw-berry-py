import { useMutation, useQuery } from '@apollo/client';
import AulasFormContainer from '@containers/Aulas/form';
import MatriculaMutations from '@graphql/Matriculas/mutations.gql';
import { getParametrosFormAula } from '@graphql/Matriculas/queries.gql';
import useCustomToast from 'src/hooks/useCustomToast';
import PrivateLayout from 'src/layouts/privateLayout';
import { useRouter } from 'next/router';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

const CreateAulaContainer = () => {
  const methods = useForm({ mode: 'onChange' });

  const { addWarningToast } = useCustomToast();

  const { loading, data } = useQuery(getParametrosFormAula, {
    onCompleted: ({ periodosLectivos }) => {
      if (periodosLectivos?.length === 0) {
        addWarningToast('No hay periodos lectivos abiertos.');
        return router.push('/matriculas/aulas');
      }
    },
  });

  const [create, { loading: loadingCreate }] = useMutation(
    MatriculaMutations.createAula,
  );

  const router = useRouter();

  const items = [
    {
      title: 'Aulas',
      href: '/matriculas/aulas',
    },
    {
      title: 'Crear Aula',
      active: true,
    },
  ];

  const onSubmit = async (input) => {
    await create({ variables: { input } });
    router.push('/matriculas/aulas');
  };

  return (
    <FormProvider {...methods}>
      <PrivateLayout title="Crear Aula" loading={loading}>
        <AulasFormContainer
          title="Crear Aula"
          items={items}
          onSubmit={onSubmit}
          loading={loadingCreate}
          periodos={data?.periodosLectivos}
          docentes={data?.personalByFunciones}
        />
      </PrivateLayout>
    </FormProvider>
  );
};

export default CreateAulaContainer;
