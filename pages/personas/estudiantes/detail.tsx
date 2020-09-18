import React from 'react';
import { useRouter } from 'next/router';
import { Button } from 'react-bootstrap';
import PrivateLayout from '@layouts/privateLayout';
import { BtnRegresar } from '@components/Buttons';
import BreadCrumbTitle from '@components/BreadCrumbs/titleBreadCrumb';
import { useQuery } from '@apollo/client';
import { Estudiante } from '@services/personas.service';
import ItemDetailPersona from '@components/pages/personas/ItemDetailPersona';

const DetailEstudianteContainer = ({ items, id }) => {
    const history = useRouter();
    const { data, loading } = useQuery(Estudiante.getByIdDetailEst, { variables: { id } });

    const onClickEliminar = async () => {
        history.push('/estudiantes');
    };

    const estudiante = data?.estudiante;

    return (
        <PrivateLayout loading={loading}>
            <main className="container-fluid">
                <BreadCrumbTitle
                    title="Docente"
                    items={items}
                />
                <div className="row justify-content-center">
                    <div className="col-md-8 breadcrumb">
                        <h4 className="text-underline">Información Personal</h4>
                        <ul className="w-100">
                            <ItemDetailPersona persona={estudiante?.persona} />
                        </ul>

                        <h4 className="text-underline">Información Familiar</h4>
                        <ul className="w-100">
                            <li>
                                <strong>
                                    Padre:
                                </strong>
                                {' ' + data?.estudiante?.padre}
                            </li>
                            <li>
                                <strong>
                                    Madre:
                                </strong>
                                {' ' + data?.estudiante?.madre}
                            </li>
                            <li>
                                <strong>
                                    Representante:
                                </strong>
                                {' ' + data?.estudiante?.representante}
                            </li>
                            <li>
                                <strong>
                                    Relación con el Representante:
                                </strong>
                                {' ' + data?.estudiante?.relacionRepresentante}
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-md-4 my-1 order-md-1">
                        <Button
                            variant="outline-danger"
                            block onClick={onClickEliminar}>
                            Eliminar
                        </Button>
                    </div>
                    <div className="col.md-4 my-1">
                        <BtnRegresar
                            variant="outline-info"
                            href="/personas/estudiantes"
                        />
                    </div>
                </div>
            </main>
        </PrivateLayout>
    );
};

DetailEstudianteContainer.getInitialProps = async ({ query }) => {
    return {
        items: [
            { title: 'Estudiante', href: '/personas/estudiantes' },
            { title: query.id, href: `/personas/estudiantes/update/?id=${query.id}` },
        ],
        id: query.id,
    };
};

export default DetailEstudianteContainer;