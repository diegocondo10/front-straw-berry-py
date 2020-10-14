import { useMutation, useQuery } from '@apollo/client';
import TitleBreadCrumb from '@components/BreadCrumbs/titleBreadCrumb';
import { BtnRegresar } from '@components/Buttons';
import DetailItem from '@components/DetailItem';
import PrivateLayout from '@layouts/privateLayout';
import { PeriodoLectivo } from '@services/matriculas.service';
import { useRouter } from 'next/router';
import React from 'react';
import { Button } from 'react-bootstrap';

const PeriodoLectivoDetailContainer = ({ items, id }) => {
  const history = useRouter();

  const { loading, data } = useQuery(PeriodoLectivo.getById, { variables: { id } });
  const [deletePeriodo] = useMutation(PeriodoLectivo.delete, { variables: { id } });
  const periodo = data?.periodoLectivo;

  const onClickEliminar = async () => {
    await deletePeriodo();
    history.push('/matriculas/periodos');
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
              <DetailItem label="Nombre: " value={periodo?.nombre} />
              <DetailItem label="Fecha de Inicio: " value={periodo?.fechaInicio} />
              <DetailItem label="Fecha de Fin: " value={periodo?.fechaFin} />
              <DetailItem label="Estado: " value={periodo?.estado} />
              <DetailItem
                label="Fecha Fin de Clases: "
                value={periodo?.fechaFinClases}
              />
              <DetailItem label="Observaciones: " value={periodo?.observaciones} />
              <DetailItem label="Responsables: " value={periodo?.responsables} />
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
