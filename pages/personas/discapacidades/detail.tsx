import React from 'react';
import { useRouter } from 'next/router';
import { useQuery, useMutation } from '@apollo/client';
import BreadCrumbTitle from '@components/BreadCrumbs/titleBreadCrumb';
import { BtnRegresar } from '@components/Buttons';
import PrivateLayout from '@layouts/privateLayout';
import { Button } from 'react-bootstrap';
import { Discapacidad } from '@services/personas.service';
import PersonaQueries from '@graphql/Matriculas/queries.gql';
import PersonaMutations from '@graphql/Matriculas/mutations.gql';

const DiscapacidadDetailContainer = ({ breadCrumb, query: { id } }) => {
    const router = useRouter();

    const { data, loading } = useQuery(PersonaQueries.getByIdDiscapacidad, {
        variables: { id },
        onError: (error) => router.push('/personas/discapacidades'),
    });

    const [deleteDiscapacidad] = useMutation(PersonaMutations.deleteDiscapacidad, {
        variables: { id },
        onError: () => router.push('/personas/discapacidades'),
    });

    const onClickEliminar = async () => {
        await deleteDiscapacidad();

        router.push('/personas/discapacidades');
    };

    return (
        <PrivateLayout loading={loading} loadingText="Eliminando...">
            <main className="container full_h">
                <BreadCrumbTitle title="Discapacidades" items={breadCrumb} />
                {data && (
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-8">
                            <div className="card">
                                <div className="card-body py-5">
                                    <ul>
                                        <li>
                                            <strong>ID:</strong> {data.discapacidad.id}
                                        </li>
                                        <li>
                                            <strong>Nombre:</strong> {data.discapacidad.nombre}
                                        </li>
                                        <li>
                                            <strong>Descripción:</strong> {data.discapacidad.descripcion}
                                        </li>
                                    </ul>
                                </div>

                                <div className="card-footer">
                                    <div className="row justify-content-center">
                                        <div className="col-md-5 my-1 order-md-1">
                                            <Button
                                                variant="outline-danger"
                                                block
                                                onClick={onClickEliminar}
                                            >
                                                Eliminar
                                            </Button>
                                        </div>
                                        <div className="col-md-5 my-1">
                                            <BtnRegresar
                                                variant="outline-info"
                                                href="/personas/discapacidades"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </PrivateLayout>
    );
};

DiscapacidadDetailContainer.getInitialProps = ({ query }) => {
    return {
        breadCrumb: [
            {
                title: 'Discapacidades',
                href: '/personas/discapacidades',
            },
            {
                title: query.id,
                href: `/personas/discapacidades/discapacidad?id=${query.id}`,
            },
        ],
        query,
    };
};

export default DiscapacidadDetailContainer;