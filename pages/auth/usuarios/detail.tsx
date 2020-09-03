import React from 'react';
import UsuarioFormContainer from '@components/pages/auth/usuarios/form';
import PrivateLayout from '@layouts/privateLayout';
import TitleBreadCrumb from '@components/BreadCrumbs/titleBreadCrumb';
import { useQuery } from '@apollo/client';
import { Usuario } from '@services/auth.service';

const UsuarioDetailContainer = ({ id, items }) => {
  useQuery(Usuario.getById);

  return (
    <PrivateLayout title="Usuario">
      <TitleBreadCrumb items={items} />
    </PrivateLayout>
  );
};

UsuarioFormContainer.getInitialProps = ({ query }) => {
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
