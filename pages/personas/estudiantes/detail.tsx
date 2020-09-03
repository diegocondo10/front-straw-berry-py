import React from 'react';
import { useRouter } from 'next/router';
import { Button } from 'react-bootstrap';
import PrivateLayout from '@layouts/privateLayout';
import { BtnRegresar } from '@components/Buttons';
import BreadCrumbTitle from '@components/BreadCrumbs/titleBreadCrumb';

const DetailEstudianteContainer = ({ items, id }) => {
    const history = useRouter();
    const data = {};

    return (
        <PrivateLayout>
            <main className="container-fluid">
                <BreadCrumbTitle
                    title="Docente"
                    items={items}
                />
                <div className="row justify-content-center">
                    <div className="col-md-8 breadcrumb">
                        <ul>
                            <li>
                                <strong>
                                    Persona:
                                </strong>
                                {' ' + data?.estudiante?.persona}
                            </li>
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
                            variant="outline-danger">
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