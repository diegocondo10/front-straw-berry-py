import MatriculaFormContainer from '@components/pages/matriculas/form';
//import { createMatricula } from '@graphql/Matriculas/mutations.gql';
//import { getDataForm } from '@graphql/Matriculas/queries.gql';
import useCustomRouter from '@hooks/useCustomRouter';
import PrivateLayout from '@layouts/privateLayout';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

const CreateMatriculaContainer: React.FC = () => {
  const methods = useForm({ mode: 'onChange' });

  const data: any = {};
  //const { loading, data } = useQuery(getDataForm);

  //const [create, { loading: loadingCreate }] = useMutation(createMatricula);

  const router = useCustomRouter();

  const onSubmit = async (input) => {
    console.log(input);

    //await create({ variables: { input } });

    router.push('/matriculas');
  };

  return (
    <PrivateLayout title="Crear Matricula" loading={false}>
      <FormProvider {...methods}>
        <MatriculaFormContainer
          title="Crear Matricula"
          items={[
            {
              title: 'Matricula',
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
