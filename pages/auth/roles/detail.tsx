import { useMutation, useQuery } from '@apollo/client';
import BreadCrumbTitle from 'src/components/BreadCrumbs/titleBreadCrumb';
import { BtnRegresar } from 'src/components/Buttons';
import PrivateLayout from '@layouts/privateLayout';
import { useRouter } from 'next/router';
import React from 'react';
import { Button, Table } from 'react-bootstrap';
import AuthQueries from '@graphql/Auth/queries.gql';
import AuthMutations from '@graphql/Auth/mutations.gql';

const DetailRolContainer = ({ items, id }) => {
  const history = useRouter();

  const { data, loading } = useQuery(AuthQueries.getByIdRol, { variables: { id } });

  const [deletePermiso] = useMutation(AuthMutations.deletePermiso, { variables: { id } });

  const onClickEliminar = async () => {
    await deletePermiso();
    history.push('/auth/roles');
  };

  return (
    <PrivateLayout loading={loading}>
      <main className="container-fluid">
        <BreadCrumbTitle title="Rol de Usuario" items={items} />

        <div className="row justify-content-center">
          <div className="col-md-8 breadcrumb">
            <ul>
              <li>
                <strong>Nombre:</strong>
                {' ' + data?.grupo?.nombre}
              </li>
              <li>
                <strong>Descripcion:</strong>
                {' ' + data?.grupo?.descripcion}
              </li>
              <li>
                <strong>Permisos:</strong>
              </li>
            </ul>
            <Table hover striped bordered size="sm">
              <thead className="thead-dark">
                <tr>
                  <th>ID</th>
                  <th>Nombre</th>
                </tr>
              </thead>
              <tbody>
                {data?.grupo?.permisos?.map((e) => (
                  <tr className="bg-white" key={e.id}>
                    <td>{e.id}</td>
                    <td>{e.nombre}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-4 my-1 order-md-1">
            <Button variant="outline-danger" block onClick={onClickEliminar}>
              Eliminar
            </Button>
          </div>
          <div className="col-md-4 my-1">
            <BtnRegresar variant="outline-info" href="/auth/roles" />
          </div>
        </div>
      </main>
    </PrivateLayout>
  );
};

DetailRolContainer.getInitialProps = async ({ query }) => {
  return {
    items: [
      { title: 'Roles de Usuario', href: '/auth/roles' },
      { title: query.id, href: `/auth/roles/update/?id=${query.id}` },
    ],
    id: query.id,
  };
};

export default DetailRolContainer;
