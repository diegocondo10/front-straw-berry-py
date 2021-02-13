import { useMutation, useQuery } from '@apollo/client';
import AulasFormContainer from '@components/pages/matriculas/aulas/form';
import PrivateLayout from '@layouts/privateLayout';
import { useRouter } from 'next/router';
import React from 'react';
import { getParametrosFormAula } from '@graphql/Matriculas/queries.gql';
import MatriculaMutations from '@graphql/Matriculas/mutations.gql';
import { FormProvider, useForm } from 'react-hook-form';

const CreateAulaContainer = () => {
  const methods = useForm({ mode: 'onChange' });

  const { loading, data } = useQuery(getParametrosFormAula);

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
