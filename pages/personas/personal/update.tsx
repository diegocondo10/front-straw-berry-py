import { useMutation, useQuery } from '@apollo/client';
import DocenteFormContainer from '@components/pages/personas/personal/form';
import PrivateLayout from '@layouts/privateLayout';
import { useRouter } from 'next/router';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { getPersonalByIdFormUpdate } from '@graphql/Personas/queries.gql';
import { updatePersonal } from '@graphql/Personas/mutations.gql';

const UpdatePersonalContainer = ({ id }) => {
  const methods = useForm({
    mode: 'onChange',
  });

  const { loading, data } = useQuery(getPersonalByIdFormUpdate, {
    variables: { id },
    onCompleted: ({ personal }) => {
      methods.reset(personal);
    },
  });

  console.log(data);

  const [update] = useMutation(updatePersonal);

  const router = useRouter();

  const onSubmit = async (input) => {
    console.log(input);
    await update({ variables: { id, input } });

    router.push('/personas/personal');
  };

  return (
    <PrivateLayout loading={loading}>
      <FormProvider {...methods}>
        <DocenteFormContainer
          title="Editar"
          items={[
            { title: 'Personal', href: '/personas/personal' },
            { title: data?.personal?.persona?.str, active: true },
          ]}
          onSubmit={onSubmit}
          personas={data?.personas}
          funcionesPersonal={data?.funcionesPersonal}
        />
      </FormProvider>
    </PrivateLayout>
  );
};

UpdatePersonalContainer.getInitialProps = ({ query }) => query;

export default UpdatePersonalContainer;
