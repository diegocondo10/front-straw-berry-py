import { useQuery } from '@apollo/client';
import MatriculaFormContainer from '@components/pages/matriculas/form';
import PrivateLayout from '@layouts/privateLayout';
import { Matricula } from '@services/matriculas.service';
import React from 'react';

const UpdateMatriculaContainer = ({ id }) => {
    const { loading, data } = useQuery(Matricula.getById, {
        variables: { id },
    });

    console.log(data);
    const items = [
        {
            title: 'Matriculas',
            href: '/matriculas',
        },
        {
            title: data?.matricula?.id,
            active: true,
        },
    ];
    const onSubmit = async (input) => {
        console.log(input);
    };

    return (
        <PrivateLayout title="Editar Matrícula" loading={loading}>
            <MatriculaFormContainer
                alumnos={data?.alumnos}
                items={items}
                //loading={false}
                onSubmit={onSubmit}
                aulas={data?.aulas}
                title="Editar Matrícula"
                defaultData={data?.matricula}
            />
        </PrivateLayout>
    );
};

UpdateMatriculaContainer.getInitialProps = ({ query }) => query;

export default UpdateMatriculaContainer;