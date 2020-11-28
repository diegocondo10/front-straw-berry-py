import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import useCustomToast from '@hooks/useCustomToast';
import PrivateLayout from '@layouts/privateLayout';
import { useRouter } from 'next/router';
import { FormProvider, useForm } from 'react-hook-form';
import DiscapacidadFormContainer from '@components/pages/personas/discapacidades/form';
import { createDiscapacidad } from '@graphql/Personas/mutations.gql';

const CreateDiscapacidadContainer = ({ title, items }) => {
  const methods = useForm({ mode: 'onChange' });

  const [create, { loading }] = useMutation(createDiscapacidad);

  const { addSuccessToast } = useCustomToast();

  const router = useRouter();

  const onSubmit = async (formData) => {
    await create({
      variables: {
        input: formData,
      },
    });

    addSuccessToast('Se ha agregado una nueva discapacidad');
    router.push('/personas/discapacidades');
  };
  return (
    <PrivateLayout title={title} loading={loading}>
      <FormProvider {...methods}>
        <DiscapacidadFormContainer title={title} items={items} onSubmit={onSubmit} />
      </FormProvider>
    </PrivateLayout>
  );
};

CreateDiscapacidadContainer.getInitialProps = () => {
  let title = 'Agregar Discapacidad';

  const breadCrumbItems = [
    {
      title: 'Discapacidades',
      href: '/personas/discapacidades',
    },
    { title, active: true },
  ];

  return { items: breadCrumbItems, title };
};

export default CreateDiscapacidadContainer;
