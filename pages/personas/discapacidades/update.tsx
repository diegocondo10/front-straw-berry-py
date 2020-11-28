import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { useRouter } from 'next/router';
import { useQuery, useMutation } from '@apollo/client';
import PrivateLayout from '@layouts/privateLayout';
import DiscapacidadFormContainer from '@components/pages/personas/discapacidades/form';
import { getDiscapacidadById } from '@graphql/Personas/queries.gql';
import PersonaMutations from '@graphql/Personas/mutations.gql';

const UpdateDiscapacidadContainer = ({ id }) => {
  const methods = useForm({ mode: 'onChange' });

  const router = useRouter();

  const { loading: loadingQuery, data } = useQuery(getDiscapacidadById, {
    variables: { id },
    onCompleted: ({ discapacidad }) => {
      methods.reset(discapacidad);
    },
    onError: (error) => router.push('/personas/discapacidades'),
  });

  const [updateDiscapacidad] = useMutation(PersonaMutations.updateDiscapacidad, {
    onError: () => router.push('/personas/discapacidades'),
  });

  const onSubmit = async (input) => {
    await updateDiscapacidad({
      variables: {
        id,
        input,
      },
    });

    router.replace('/personas/discapacidades');
  };

  return (
    <PrivateLayout title="Editar Discapacidad" loading={loadingQuery}>
      <FormProvider {...methods}>
        <DiscapacidadFormContainer
          title="Editar Discapacidad"
          items={[
            {
              title: 'Discapacidades',
              href: '/personas/discapacidades',
            },
            { title: data?.discapacidad?.nombre, active: true },
          ]}
          onSubmit={onSubmit}
        />
      </FormProvider>
    </PrivateLayout>
  );
};

UpdateDiscapacidadContainer.getInitialProps = ({ query }) => query;

export default UpdateDiscapacidadContainer;
