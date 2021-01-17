import { useQuery } from '@apollo/client';
import BreadCrumbTitle from '@components/BreadCrumbs/titleBreadCrumb';
import { BtnRegresar } from '@components/Buttons';
import ItemDetailPersona from '@components/pages/personas/ItemDetailPersona';
import PersonaQueries from '@graphql/Personas/queries.gql';
import PrivateLayout from '@layouts/privateLayout';
import { useRouter } from 'next/router';
import React from 'react';
import { Button } from 'react-bootstrap';

const DetailDocenteContainer = ({ items, id }) => {
  const history = useRouter();

  //const data = {};
  const { data, loading } = useQuery(PersonaQueries.getByIdDetail, {
    variables: { id },
  });

  const onClickEliminar = async () => {
    history.push('/docentes');
  };

  const docente = data?.docente;
  return (
    <PrivateLayout loading={loading}>
      <main className="container-fluid">
        <BreadCrumbTitle title="Docente" items={items} />
        <div className="row justify-content-center">
          <div className="col-md-8 breadcrumb">
            <h4 className="text-underline">Información Personal</h4>

            <ul className="w-100">
              <ItemDetailPersona persona={docente?.persona} />
            </ul>

            <h4 className="text-underline">Información Académica</h4>
            <ul className="w-100">
              <li>
                <strong>Título:</strong>
                {' ' + data?.docente?.tipoTitulo}
              </li>
              <li>
                <strong>Nivel de Formación:</strong>
                {' ' + data?.docente?.nivelFormacion}
              </li>
              <li>
                <strong>Observaciones:</strong>
                {' ' + data?.docente?.observaciones}
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
            <BtnRegresar variant="outline-info" href="/personas/docentes" />
          </div>
        </div>
      </main>
    </PrivateLayout>
  );
};

DetailDocenteContainer.getInitialProps = async ({ query }) => {
  return {
    items: [
      { title: 'Docentes', href: '/personas/docentes' },
      { title: query.id, href: `/personas/docentes/update/?id=${query.id}` },
    ],
    id: query.id,
  };
};

export default DetailDocenteContainer;
