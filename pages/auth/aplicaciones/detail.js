import BreadCrumb from '@/components/BreadCrumb';
import { BtnRegresar } from '@/components/Buttons';
import PrivateLayout from '@/layouts/privateLayout';
import { Aplicacion } from '@/services/auth.service';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { toMoment } from 'utils/funciones';
import BreadCrumbTitle from '@/components/BreadCrumb/BreadCumbTitle';

const AplicacionDetailContainer = ({ breadCrumb, aplicacion }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onClickEliminar = async () => {
    setLoading(true);
    const res = await Aplicacion.delete(aplicacion._id);
    setLoading(false);
    router.push('/auth/aplicaciones');
  };

  return (
    <PrivateLayout loading={loading} loadingText="Eliminando...">
      <main className="container full_h">
        <BreadCrumbTitle title="Aplicación" items={breadCrumb} />

        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8">
            <div className="card">
              <div className="card-body">
                <ul>
                  <li>
                    <strong>ID:</strong> {aplicacion._id}
                  </li>
                  <li>
                    <strong>Nombre:</strong> {aplicacion.nombre}
                  </li>
                  <li>
                    <strong>Descripción:</strong> {aplicacion.descripcion}
                  </li>
                  <li>
                    <strong>Fecha de creación:</strong>{' '}
                    {toMoment(aplicacion.createdAt)}
                  </li>
                  <li>
                    <strong>Ultima edición:</strong> {toMoment(aplicacion.updatedAt)}
                  </li>
                </ul>
              </div>

              <div className="card-footer">
                <div className="row justify-content-center">
                  <div className="col-md-5 my-1 order-md-1">
                    <Button variant="outline-danger" block onClick={onClickEliminar}>
                      Eliminar
                    </Button>
                  </div>
                  <div className="col-md-5 my-1">
                    <BtnRegresar variant="outline-info" href="/auth/aplicaciones" />
                  </div>
                </div>
              </div>
            </div>
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
