import { useMutation, useQuery } from '@apollo/client';
import MatriculaFormContainer from '@components/pages/matriculas/form';
import PrivateLayout from '@layouts/privateLayout';
import { Matricula } from '@services/matriculas.service';
import { useRouter } from 'next/router';
import React from 'react';

const CreateMatriculaContainer = () => {
    const { loading, data } = useQuery(Matricula.getDataForm);

    const [create, { loading: loadingCreate }] = useMutation(Matricula.create);

    const router = useRouter();

    const items = [
        {
            title: 'Matricula',
            href: '/matriculas',
        },
        {
            title: 'Crear Matricula',
            active: true,
        },
    ];

    const onSubmit = async (input) => {
        console.log(input);

        //await create({ variables: { input } });

        router.push('/matriculas');
    };

    return (
        <PrivateLayout title="Crear Matricula" loading={loading}>
            <MatriculaFormContainer
                title="Crear Matricula"
                items={items}
                onSubmit={onSubmit}
                //loading={loadingCreate}
                aulas={data?.aulas}
                alumnos={data?.alumnos}
            />
        </PrivateLayout>
    );
};

export default CreateMatriculaContainer;