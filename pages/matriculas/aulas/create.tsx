import { useQuery } from '@apollo/client';
import AulasFormContainer from '@components/pages/matriculas/aulas/form';
import PrivateLayout from '@layouts/privateLayout';
import { Aula } from '@services/matriculas.service';
import React from 'react';

const CreateAulaContainer = () => {
  const { loading, data } = useQuery(Aula.getDataForm);

  const title = 'Crear Aula';
  const items = [
    {
      title: 'Aulas',
      href: '/matriculas',
    },
    {
      title: 'Crear Aula',
      active: true,
    },
  ];

  const onSubmit = async (input) => {
    console.log(input);
  };

  return (
    <PrivateLayout title="Crear Aula">
      <AulasFormContainer
        title={title}
        items={items}
        onSubmit={onSubmit}
        loading={false}
        periodos={data?.periodosLectivos}
        docentes={data?.docentes}
      />
    </PrivateLayout>
  );
};

export default CreateAulaContainer;
