import { useMutation, useQuery } from '@apollo/client';
import MatriculaFormContainer from '@components/pages/matriculas/form';
import { createMatricula } from '@graphql/Matriculas/mutations.gql';
import { getParametrosFormMatriculaCreate } from '@graphql/Matriculas/queries.gql';
import useCustomRouter from '@hooks/useCustomRouter';
import PrivateLayout from '@layouts/privateLayout';
import classnames from 'classnames';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

const CreateMatriculaContainer: React.FC = () => {
  const methods = useForm({ mode: 'onChange' });

  const { loading, data } = useQuery(getParametrosFormMatriculaCreate);

  const [create, { loading: loadingCreate }] = useMutation(createMatricula);

  const router = useCustomRouter();

  const onSubmit = async (input) => {
    console.log(input);

    const res = await create({ variables: { input } });
    console.log(res);
    //router.push('/matriculas');
  };

  return (
    <PrivateLayout
      title="Crear Matricula"
      loadingText={classnames({
        'Cargando...': loading,
        'Guardando...': loadingCreate,
      })}
      loading={loading || loadingCreate}
    >
      <FormProvider {...methods}>
        <MatriculaFormContainer
          title="Crear Matricula"
          items={[
            {
              title: 'Matriculas',
              href: '/matriculas',
            },
            {
              title: 'Crear Matricula',
              active: true,
            },
          ]}
          onSubmit={onSubmit}
          //loading={loadingCreate}
          aulas={data?.aulas}
          alumnos={data?.alumnos}
        />
      </FormProvider>
    </PrivateLayout>
  );
};

export default CreateMatriculaContainer;
