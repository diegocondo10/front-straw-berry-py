import { useQuery } from '@apollo/client';
import TitleBreadCrumb from '@components/BreadCrumbs/titleBreadCrumb';
import { BtnRegresar } from '@components/Buttons';
import PrivateLayout from '@layouts/privateLayout';
import { PeriodoLectivo } from '@services/matriculas.service';
import { useRouter } from 'next/router';
import React from 'react';
import { Button } from 'react-bootstrap';

const PeriodoLectivoDetailContainer = ({ items, id }) => {
  const history = useRouter();

  const { loading, data } = useQuery(PeriodoLectivo.getById, { variables: { id } });

  const periodo = data?.periodo;

  const onClickEliminar = async () => {
    history.push('/periodos');
  };

  return (
    <PrivateLayout loading={loading}>
      <main className="container-fluid">
        <TitleBreadCrumb
          title="Periodo Lectivo"
          items={[
            { title: 'Periodos Lectivos', href: '/matriculas/periodos' },
            { title: periodo?.nombre, active: true },
          ]}
        />

        <div className="row justify-content-center">
          <div className="col-md-8 breadcrumb">
            <h4 className="text-underline">Información del Período Lectivo</h4>
            <ul className="w-100">
              <li>
                <strong>Nombre:</strong>
                {' ' + data?.periodo?.nombre}
              </li>
              <li>
                <strong>Fecha de Inicio:</strong>
                {' ' + data?.periodo?.fechaInicio}
              </li>
              <li>
                <strong>Fecha de Fin:</strong>
                {' ' + data?.periodo?.fechaFin}
              </li>
              <li>
                <strong>Estado:</strong>
                {' ' + data?.periodo?.estado}
              </li>
              <li>
                <strong>Fecha Fin de Clases:</strong>
                {' ' + data?.periodo?.fechaFinClases}
              </li>
              <li>
                <strong>Observaciones:</strong>
                {' ' + data?.periodo?.observaciones}
              </li>
              <li>
                <strong>Responsables:</strong>
                {' ' + data?.periodo?.responsables}
              </li>
            </ul>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-4 my-1">
            <BtnRegresar variant="outline-info" href="/matriculas/periodos" />
          </div>

          <div className="col-md-4 my-1 order-md-1">
            <Button variant="outline-danger" block onClick={onClickEliminar}>
              Eliminar
            </Button>
          </div>
        </div>
      </main>
    </PrivateLayout>
  );
};

PeriodoLectivoDetailContainer.getInitialProps = async ({ query }) => {
  return {
    items: [
      { title: 'Periodo Lectivo', href: '/matriculas/periodos' },
      { title: query.id, href: `/matriculas/periodos/update/?id=${query.id}` },
    ],
    id: query.id,
  };
};

export default PeriodoLectivoDetailContainer;
