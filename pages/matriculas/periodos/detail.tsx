import { useQuery } from '@apollo/client';
import TitleBreadCrumb from '@components/BreadCrumbs/titleBreadCrumb';
import PrivateLayout from '@layouts/privateLayout';
import { PeriodoLectivo } from '@services/matriculas.service';
import React from 'react';

const PeriodoLectivoDetailContainer = ({ id }) => {
  const { loading, data } = useQuery(PeriodoLectivo.getById, { variables: { id } });
  const periodo = data?.periodo;

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
          <div className="col-md-8"></div>
        </div>
      </main>
    </PrivateLayout>
  );
};

PeriodoLectivoDetailContainer.getInitialProps = ({ query }) => query;

export default PeriodoLectivoDetailContainer;
