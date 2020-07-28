import React from 'react';
import PrivateLayout from '@/layouts/privateLayout';
import BreadCrumbTitle from '@/components/BreadCrumb/BreadCumbTitle';

const PermisoFormContainer = () => {
  return (
    <PrivateLayout>
      <main className="container-fluid">
        <BreadCrumbTitle
          title="Permiso"
          items={[
            {
              title: 'Permiso',
              active: true,
            },
          ]}
        />
      </main>
    </PrivateLayout>
  );
};

export default PermisoFormContainer;
