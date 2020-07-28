import React from 'react';
import PrivateLayout from '@/layouts/privateLayout';
import BreadCrumbTitle from '@/components/BreadCrumb/BreadCumbTitle';

const PermisoFormContainer = ({ title, items }) => {
  return (
    <PrivateLayout>
      <main className="container-fluid">
        <BreadCrumbTitle title={title} items={items} />
      </main>
    </PrivateLayout>
  );
};

PermisoFormContainer.getInitialProps = async ({ query }) => {
  const items = [{ title: 'Permisos', href: '/auth/permisos' }];
  let title = 'Agregar Permiso';
  if (query._id) {
    title = 'Editar Permiso';
    items.push({ title: 'Editar Permiso', active: true });
  } else {
    items.push({ title: 'Agregar Permiso', active: true });
  }

  return { items, title };
};

export default PermisoFormContainer;
