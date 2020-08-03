import BreadCrumbTitle from '@components/BreadCrumb/BreadCumbTitle';
import { BtnRegresar } from '@components/Buttons';
import PrivateLayout from '@layouts/privateLayout';
import { Permiso } from '@services/auth.service';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useRouter } from 'next/router';
const DetailPermisoContainer = ({ items, id }) => {
  const [permiso, setPermiso] = useState(null);
  const [loading, setLoading] = useState(true);
  const history = useRouter();

  useEffect(() => {
    setLoading(true);
    Permiso.getById(id).then(({ data }) => {
      setPermiso(data);
      setLoading(false);
    });
  }, []);

  const onClickEliminar = async () => {
    setLoading(true);
    await Permiso.delete(id);
    history.push('/auth/permisos');
  };

  return (
    <PrivateLayout loading={loading}>
      <main className="container-fluid">
        <BreadCrumbTitle title="Permiso" items={items} />

        {permiso && (
          <div className="row justify-content-center">
            <div className="col-md-8 breadcrumb">
              <ul>
                <li>
                  <strong>Nombre:</strong>
                  {' ' + permiso.nombre}
                </li>
                <li>
                  <strong>Aplicacion:</strong>
                  {' ' + permiso.nombre}
                </li>
                <li>
                  <strong>Nombre:</strong>
                  {' ' + permiso.aplicacion.nombre}
                </li>
                <li>
                  <strong>descripcion:</strong>
                  {' ' + permiso.descripcion}
                </li>
              </ul>
            </div>
          </div>
        )}

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

export const getServerSideProps = async ({ query }) => {
  const items = [{ title: 'Permisos', href: '/auth/permisos' }];
  console.log(query);
  return {
    props: { items, id: query.id },
  };
};

export default DetailPermisoContainer;
