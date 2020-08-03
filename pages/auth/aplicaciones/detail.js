import { useQuery } from '@apollo/client';
import BreadCrumbTitle from '@components/BreadCrumb/BreadCumbTitle';
import { BtnRegresar } from '@components/Buttons';
import PrivateLayout from '@layouts/privateLayout';
import { Aplicacion } from '@services/auth.service';
import { GET_APP_BY_ID } from '@services/auth/auth.queries';
import { useRouter } from 'next/router';
import React from 'react';
import { Button } from 'react-bootstrap';
import { toMoment } from 'utils/funciones';

const AplicacionDetailContainer = ({ breadCrumb, query: { id } }) => {
  const router = useRouter();
  
  const { data, loading } = useQuery(GET_APP_BY_ID, { variables: { id: id } });

  const onClickEliminar = async () => {
    setLoading(true);
    const res = await Aplicacion.delete(id);
    setLoading(false);
    router.push('/auth/aplicaciones');
  };

  return (
    <PrivateLayout loading={loading} loadingText="Eliminando...">
      <main className="container full_h">
        <BreadCrumbTitle title="Aplicación" items={breadCrumb} />
        {data && (
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-8">
              <div className="card">
                <div className="card-body py-5">
                  <ul>
                    <li>
                      <strong>ID:</strong> {data.aplicacion.id}
                    </li>
                    <li>
                      <strong>Nombre:</strong> {data.aplicacion.nombre}
                    </li>
                    <li>
                      <strong>Descripción:</strong> {data.aplicacion.descripcion}
                    </li>
                    <li>
                      <strong>Fecha de creación:</strong>{' '}
                      {toMoment(data.aplicacion.createdAt)}
                    </li>
                    <li>
                      <strong>Ultima edición:</strong>{' '}
                      {toMoment(data.aplicacion.updatedAt)}
                    </li>
                  </ul>
                </div>

                <div className="card-footer">
                  <div className="row justify-content-center">
                    <div className="col-md-5 my-1 order-md-1">
                      <Button
                        variant="outline-danger"
                        block
                        onClick={onClickEliminar}
                      >
                        Eliminar
                      </Button>
                    </div>
                    <div className="col-md-5 my-1">
                      <BtnRegresar
                        variant="outline-info"
                        href="/auth/aplicaciones"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </PrivateLayout>
  );
};

AplicacionDetailContainer.getInitialProps = ({ query }) => {
  return {
    breadCrumb: [
      {
        title: 'Aplicaciones',
        href: '/auth/aplicaciones',
      },
      {
        title: query.id,
        href: `/auth/aplicaciones/aplicacion?id=${query.id}`,
      },
    ],
    query,
  };
};

export default AplicacionDetailContainer;
