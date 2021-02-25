import { useMutation, useQuery } from '@apollo/client';
import TitleBreadCrumb from 'src/components/BreadCrumbs/titleBreadCrumb';
import { BtnRegresar } from 'src/components/Buttons';
import ItemDetailPersona from 'src/components/pages/personas/ItemDetailPersona';
import PrivateLayout from '@layouts/privateLayout';
import { Usuario } from '@services/auth.service';
import { useRouter } from 'next/router';
import React from 'react';
import { Button } from 'react-bootstrap';
import AuthQueries from '@graphql/Auth/queries.gql';
import AuthMutations from '@graphql/Auth/mutations.gql';

const UsuarioDetailContainer = ({ id, items }) => {
  const { loading, data } = useQuery(AuthQueries.getUsuarioById, { variables: { id } });

  const [deleteUsuario] = useMutation(AuthMutations.delete);

  const router = useRouter();

  const usuario = data?.usuario;

  const onClickEliminar = async () => {
    await deleteUsuario({ variables: { id } });
    router.replace('/auth/usuarios');
  };

  return (
    <PrivateLayout loading={loading} title="Usuario">
      <TitleBreadCrumb items={items} title="Usuario" />

      <div className="row justify-content-center">
        <div className="col-md-8 breadcrumb">
          <ul className="w-100">
            <li>
              <strong>Username: </strong>
              {usuario?.username}
            </li>
          </ul>

          <h4 className="text-underline">Información personal</h4>

          <ul className="w-100">
            <ItemDetailPersona persona={usuario?.persona} />
          </ul>

          <h4 className="text-underline w-100">Roles: </h4>
          <ul className="w-100 ml-5">
            {usuario?.grupos?.map((e, index) => (
              <li key={index * 3}>{e.nombre}</li>
            ))}
          </ul>

          <h4 className="text-underline w-100">Permisos: </h4>

          <ul className="w-100 ml-5">
            {usuario?.permisos?.map((e, index) => (
              <li key={index * 102}>{e.nombre}</li>
            ))}
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
          <BtnRegresar variant="outline-info" href="/auth/usuarios" />
        </div>
      </div>
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
