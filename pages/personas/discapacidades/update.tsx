import { useMutation, useQuery } from '@apollo/client';
import DiscapacidadFormContainer from 'src/components/pages/personas/discapacidades/form';
import PersonaMutations from '@graphql/Personas/mutations.gql';
import { getDiscapacidadById } from '@graphql/Personas/queries.gql';
import PrivateLayout from 'src/layouts/privateLayout';
import { useRouter } from 'next/router';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

const UpdateDiscapacidadContainer = ({ id }) => {
  const methods = useForm({ mode: 'onChange' });

  const router = useRouter();

  const { loading: loadingQuery, data } = useQuery(getDiscapacidadById, {
    variables: { id },
    onCompleted: ({ discapacidad }) => methods.reset(discapacidad),
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
    <FormProvider {...methods}>
      <PrivateLayout title="Editar Discapacidad" loading={loadingQuery}>
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
      </PrivateLayout>
    </FormProvider>
  );
};

UpdateDiscapacidadContainer.getInitialProps = ({ query }) => query;

export default UpdateDiscapacidadContainer;
