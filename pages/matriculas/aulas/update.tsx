import { useQuery } from '@apollo/client';
import AulasFormContainer from '@components/pages/matriculas/aulas/form';
import PrivateLayout from '@layouts/privateLayout';
import React from 'react';
import { getAulaByIdForm } from '@graphql/Matriculas/queries.gql';
import { FormProvider, useForm } from 'react-hook-form';

const UpdateAulaContainer = ({ id }) => {
  const methods = useForm({ mode: 'onChange' });

  const { loading, data } = useQuery(getAulaByIdForm, {
    variables: { id },
    onCompleted: ({ aula }) => methods.reset(aula),
  });

  const onSubmit = async (input) => {
    console.log(input);
  };

  return (
    <PrivateLayout title="Editar Aula" loading={loading}>
      <FormProvider {...methods}>
        <AulasFormContainer
          docentes={data?.personalByFunciones}
          title="Editar Aula"
          items={[
            {
              title: 'Aulas',
              href: '/matriculas/aulas',
            },
            {
              title: data?.aula?.nombre,
              active: true,
            },
          ]}
          loading={false}
          onSubmit={onSubmit}
          periodos={data?.periodosLectivos}
          defaultData={data?.aula}
        />
      </FormProvider>
    </PrivateLayout>
  );
};

UpdateAulaContainer.getInitialProps = ({ query }) => query;

export default UpdateAulaContainer;
