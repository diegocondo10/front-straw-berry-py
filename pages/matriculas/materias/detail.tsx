import { useQuery } from '@apollo/client';
import PrivateLayout from '@layouts/privateLayout';
import { Materia } from '@services/matriculas.service';
import { useRouter } from 'next/router';
import React from 'react';
import BreadCrumbTitle from '@components/BreadCrumbs/titleBreadCrumb';
import { BtnRegresar } from '@components/Buttons/BtnRegresar';
import { Button } from 'react-bootstrap';
import DetailItem from '@components/DetailItem';

const DetailMateriaContainer = ({ id }) => {
  const history = useRouter();

  const { data, loading } = useQuery(Materia.getById, { variables: { id } });

  const onClickEliminar = async () => {
    history.push('/matriculas/materias');
  };

  return (
    <PrivateLayout loading={loading}>
      <main className="container-fluid">
        <BreadCrumbTitle
          title="Materia"
          items={[
            { title: 'Materias', href: '/matriculas/materias' },
            {
              title: data?.materia?.nombre,
              href: `/matriculas/materias/update/?id=${id}`,
            },
          ]}
        />
        <div className="row justify-content-center">
          <div className="col-md-8 breadcrumb">
            <h4>Información de la Materia</h4>
            <ul className="w-100">
              <DetailItem label="Nombre:" value={data?.materia?.nombre} />
              <li>
                <strong>Código:</strong>
                {' ' + data?.materia?.codigo}
              </li>
              <li>
                <strong>Grado:</strong>
                {' ' + data?.materias?.grado}
              </li>
              <li>
                <strong>Horas Presenciales:</strong>
                {' ' + data?.materias?.horaPresencial}
              </li>
              <li>
                <strong>Descripción:</strong>
                {' ' + data?.materias?.descripcion}
              </li>
              <li>
                <strong>Objetivo:</strong>
                {' ' + data?.materias?.objetivo}
              </li>
              <li>
                <strong>Objetivo Específico:</strong>
                {' ' + data?.materias?.objetivoEspecifico}
              </li>
            </ul>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-4 my-1">
            <BtnRegresar variant="outline-info" href="/matriculas/materias" />
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

DetailMateriaContainer.getInitialProps = async ({ query }) => {
  return {
    items: [],
    id: query.id,
  };
};

export default DetailMateriaContainer;
