import { useQuery } from '@apollo/client';
import PrivateLayout from '@layouts/privateLayout';
import { useRouter } from 'next/router';
import React from 'react';
import BreadCrumbTitle from '@components/BreadCrumbs/titleBreadCrumb';
import { BtnRegresar } from '@components/Buttons/BtnRegresar';
import { Button } from 'react-bootstrap';
import DetailItem from '@components/DetailItem';
import MatriculaQueries from '@graphql/Matriculas/queries.gql';

const DetailMateriaContainer = ({ id }) => {
  const history = useRouter();

  const { data, loading } = useQuery(MatriculaQueries.getByIdMateria, { variables: { id } });

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
              <DetailItem label="Código:" value={data?.materia?.codigo} />
              <DetailItem label="Grado:" value={data?.materia?.grado} />
              <DetailItem
                label="Horas Presenciales:"
                value={data?.materia?.horasPresencial}
              />

              <DetailItem label="Objetivo:" value={data?.materia?.objetivo} />
              <DetailItem
                label="Objetivo Específico:"
                value={data?.materia?.objetivoEspecifico}
              />
              <DetailItem label="Descripción:" value={data?.materia?.descripcion} />
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
