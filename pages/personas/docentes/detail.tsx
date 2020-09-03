import React from 'react';
import PrivateLayout from '@layouts/privateLayout';
import { BtnRegresar } from '@components/Buttons';
import BreadCrumbTitle from '@components/BreadCrumbs/titleBreadCrumb';
import { useRouter } from 'next/router';
import { Button } from 'react-bootstrap';

const DetailDocenteContainer = ({ items, id }) => {
  const history = useRouter();

  const data = {};

  return (
    <PrivateLayout>
      <main className="container-fluid">
        <BreadCrumbTitle title="Docente" items={items} />
        <div className="row justify-content-center">
          <div className="col-md-8 breadcrumb">
            <ul>
              <li>
                <strong>Persona:</strong>
                {' ' + data?.docente?.persona}
              </li>
              <li>
                <strong>Tipo de Título:</strong>
                {' ' + data?.docente?.tipoTitulo}
              </li>
              <li>
                <strong>Nivel de Formación:</strong>
                {' ' + data?.docente?.nivelFormacion}
              </li>
            </ul>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-4 my-1 order-md-1">
            <Button variant="outline-danger">Eliminar</Button>
          </div>
          <div className="col.md-4 my-1">
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
