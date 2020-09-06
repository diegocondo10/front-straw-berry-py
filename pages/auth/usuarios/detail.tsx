import { useQuery } from '@apollo/client';
import TitleBreadCrumb from '@components/BreadCrumbs/titleBreadCrumb';
import PrivateLayout from '@layouts/privateLayout';
import { Usuario } from '@services/auth.service';
import React from 'react';

const UsuarioDetailContainer = ({ id, items }) => {
  const { loading, data } = useQuery(Usuario.getById, { variables: { id } });

  console.log(data);

  return (
    <PrivateLayout loading={loading} title="Usuario">
      <TitleBreadCrumb items={items} title="Usuario" />
    </PrivateLayout>
  );
};

UsuarioDetailContainer.getInitialProps = ({ query }) => {
  return {
    id: query.id,
    items: [
      {
        title: 'Usuarios',
        href: '/auth/usuarios',
      },
      {
        title: query.id,
        active: true,
      },
    ],
  };
};

export default UsuarioDetailContainer;
