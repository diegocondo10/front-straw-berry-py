import { useMutation, useQuery } from '@apollo/client';
import AulasFormContainer from '@components/pages/matriculas/aulas/form';
import PrivateLayout from '@layouts/privateLayout';
import { Aula } from '@services/matriculas.service';
import { useRouter } from 'next/router';
import React from 'react';

const CreateAulaContainer = () => {
  const { loading, data } = useQuery(Aula.getDataForm);

  const [create, { loading: loadingCreate }] = useMutation(Aula.create);

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
    <PrivateLayout title="Crear Aula" loading={loading}>
      <AulasFormContainer
        title="Crear Aula"
        items={items}
        onSubmit={onSubmit}
        loading={loadingCreate}
        periodos={data?.periodosLectivos}
        docentes={data?.docentes}
      />
    </PrivateLayout>
  );
};

export default CreateAulaContainer;
