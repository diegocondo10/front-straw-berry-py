import { useMutation } from '@apollo/client';
import useCustomToast from '@hooks/useCustomToast';
import PrivateLayout from '@layouts/privateLayout';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import AplicacionFormContainer from 'src/components/pages/auth/aplicaciones/form';
import AuthMutations from '@graphql/Auth/mutations.gql';

const CreateAppContainer = ({ title, items }) => {
  const [loadBtn, setLoadBtn] = useState(false);

  const methods = useForm({ mode: 'onChange' });

  const [createApp, { loading }] = useMutation(AuthMutations.createAplicacion);

  const { addSuccessToast } = useCustomToast();

  const router = useRouter();

  const onSubmit = async (formData) => {
    setLoadBtn(true);
    await createApp({ variables: { input: formData } });
    setLoadBtn(false);

    addSuccessToast('SE HA AGREGADO UNA NUEVA APLICACION');
    router.push('/auth/aplicaciones');
  };

  return (
    <FormProvider {...methods}>
      <PrivateLayout title={title} loading={loading}>
        <AplicacionFormContainer
          title={title}
          items={items}
          onSubmit={onSubmit}
          loadBtn={loadBtn}
        />
      </PrivateLayout>
    </FormProvider>
  );
};

CreateAppContainer.getInitialProps = () => {
  let title = 'Agregar Aplicación';

  const breadCrumbItems = [
    {
      title: 'Aplicaciones',
      href: '/auth/aplicaciones',
    },
    { title, active: true },
  ];

  return { items: breadCrumbItems, title };
};
export default CreateAppContainer;
