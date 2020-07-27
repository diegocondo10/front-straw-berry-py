import BreadCrumb from '@/components/BreadCrumb';
import PrivateLayout from '@/layouts/privateLayout';
import { Aplicacion } from '@/services/auth.service';
import React from 'react';

const AplicacionDetailContainer = ({ breadCrumb, aplicacion }) => {
  return (
    <PrivateLayout>
      <main className="container full_h">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8">
            <h1 className="text-center my-5 display-4">Aplicación</h1>
            <BreadCrumb items={breadCrumb} />
            <ul className="mt-5">
              <li>
                <strong>ID:</strong> {aplicacion._id}
              </li>
              <li>
                <strong>Nombre:</strong> {aplicacion.nombre}
              </li>
              <li>
                <strong>Descripción:</strong> {aplicacion.descripcion}
              </li>
            </ul>
          </div>
        </div>
      </main>
    </PrivateLayout>
  );
};

AplicacionDetailContainer.getInitialProps = async ({ query }) => {
  const res = await Aplicacion.getById(query._id);
  return {
    breadCrumb: [
      {
        title: 'Aplicaciones',
        href: '/auth/aplicaciones',
      },
      {
        title: res.data.nombre,
        href: `/auth/aplicaciones/aplicacion?_id=${query._id}`,
      },
    ],
    aplicacion: res.data,
  };
};

export default AplicacionDetailContainer;
