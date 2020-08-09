import { useMutation, useQuery } from '@apollo/client';
import BreadCrumbTitle from '@components/BreadCrumb/titleBreadCumb';
import { BtnRegresar } from '@components/Buttons';
import PrivateLayout from '@layouts/privateLayout';
import { Permiso } from '@services/auth.service';
import { GET_PERMISO_BY_ID } from '@services/auth/auth.queries';
import { useRouter } from 'next/router';
import React from 'react';
import { Button } from 'react-bootstrap';

const DetailPermisoContainer = ({ items, id }) => {
  const history = useRouter();

  const { data, loading } = useQuery(GET_PERMISO_BY_ID, { variables: { id } });

  const [deletePermiso] = useMutation(Permiso.deleteMutation, { variables: { id } });

  const onClickEliminar = async () => {
    await deletePermiso();
    history.push('/auth/permisos');
  };

  return (
    <PrivateLayout loading={loading}>
      <main className="container-fluid">
        <BreadCrumbTitle title="Permiso" items={items} />

        <div className="row justify-content-center">
          <div className="col-md-8 breadcrumb">
            <ul>
              <li>
                <strong>Nombre:</strong>
                {' ' + data?.permiso?.nombre}
              </li>
              <li>
                <strong>Aplicacion:</strong>
                {' ' + data?.permiso?.nombre}
              </li>
              <li>
                <strong>Nombre:</strong>
                {' ' + data?.permiso?.aplicacion?.nombre}
              </li>
              <li>
                <strong>descripcion:</strong>
                {' ' + data?.permiso?.descripcion}
              </li>
            </ul>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-4 my-1 order-md-1">
            <Button variant="outline-danger" block onClick={onClickEliminar}>
              Eliminar
            </Button>
          </div>
          <div className="col-md-4 my-1">
            <BtnRegresar variant="outline-info" href="/auth/permisos" />
          </div>
        </div>
      </main>
    </PrivateLayout>
  );
};

DetailPermisoContainer.getInitialProps = async ({ query }) => {
  return {
    items: [
      { title: 'Permisos', href: '/auth/permisos' },
      { title: query.id, href: `/auth/permisos/update/?id=${query.id}` },
    ],
    id: query.id,
  };
};

export default DetailPermisoContainer;
