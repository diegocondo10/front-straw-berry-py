import { useMutation, useQuery } from '@apollo/client';
import PrivateLayout from '@layouts/privateLayout';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import AplicacionFormContainer from '../../../components/pages/auth/aplicaciones/form';
import AuthQueries from '@graphql/Auth/queries.gql';
import AuthMutations from '@graphql/Auth/mutations.gql';

const UpdateAppContainer = ({ title, items, id }) => {
  const methods = useForm({ mode: 'onChange' });
  const [loadBtn, setLoadBtn] = useState(false);

  const router = useRouter();

  const { loading: loadingQuery } = useQuery(AuthQueries.getAppById, {
    variables: { id },
    onCompleted: ({ aplicacion }) => {
      methods.reset(aplicacion);
    },
    onError: (error) => router.push('/auth/aplicaciones'),
  });

  const [updateApp] = useMutation(AuthMutations.updateApp, {
    onError: () => router.push('/auth/aplicaciones'),
  });

  const onSubmit = async (input) => {
    setLoadBtn(true);
    await updateApp({ variables: { id, input } });
    setLoadBtn(false);
    router.replace('/auth/aplicaciones');
  };

  return (
    <PrivateLayout title={title} loading={loadingQuery}>
      <FormProvider {...methods}>
        <AplicacionFormContainer
          title={title}
          items={items}
          onSubmit={onSubmit}
          loadBtn={loadBtn}
        />
      </FormProvider>
    </PrivateLayout>
  );
};

UpdateAppContainer.getInitialProps = ({ query }) => {
  let title = 'Editar Aplicación';

  const breadCrumbItems = [
    {
      title: 'Aplicaciones',
      href: '/auth/aplicaciones',
    },
    { title, active: true },
  ];

  return { items: breadCrumbItems, title, id: query.id };
};

export default UpdateAppContainer;
