import { useQuery } from '@apollo/client';
import PrivateLayout from '@layouts/privateLayout';
import { Matricula } from '@services/matriculas.service';
import { useRouter } from 'next/router';
import React from 'react';
import BreadCrumbTitle from '@components/BreadCrumbs/titleBreadCrumb';
import DetailItem from '@components/DetailItem';
import { BtnRegresar } from '@components/Buttons/BtnRegresar';
import { Button } from 'react-bootstrap';

const DetailMatriculaContainer = ({ id
}) => {
    const history = useRouter();
    const { data, loading } = useQuery(Matricula.getById, { variables: { id } });
    const onClickEliminar = async () => {
        history.push('/matriculas');
    };

    return (
        <PrivateLayout loading={loading}>
            <main className="container-fluid">
                <BreadCrumbTitle
                    title="Matrícula"
                    items={[
                        { title: 'Matrículas', href: '/matriculas' },
                        {
                            title: data?.matricula?.id,
                            href: `/matriculas/update/?id=${id}`,
                        },
                    ]}
                />
                <div className="row justify-content-center">
                    <div className="col-md-8 breadcrumb">
                        <h4>Información</h4>
                        <ul className="w-100">
                            <DetailItem label="Tratamiento:" value={data?.matricula?.tratamiento} />
                            <DetailItem label="Diagnóstico:" value={data?.matricula?.diagnostico} />
                            <DetailItem label="Matrícula:" value={data?.matricula?.matricula} />
                            <DetailItem label="Número de Matrícula:" value={data?.matricula?.numeroMatricula} />
                            <DetailItem label="Aporte Voluntario:" value={data?.matricula?.aporteVoluntario} />
                            <DetailItem label="Diagnóstico Final:" value={data?.matricula?.diagnosticoFinal} />
                        </ul>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-md-4 my-1">
                        <BtnRegresar
                            variant="outline-info"
                            href="/matriculas"
                        />
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

DetailMatriculaContainer.getInitiaProps = async ({ query }) => {
    return {
        items: [],
        id: query.id
    };
};

export default DetailMatriculaContainer;