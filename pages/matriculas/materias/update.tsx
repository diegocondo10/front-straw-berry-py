import { useMutation, useQuery } from '@apollo/client';
import MateriaFormContainer from '@components/pages/matriculas/materias/form';
import PrivateLayout from '@layouts/privateLayout';
import { Materia } from '@services/matriculas.service';
import { useRouter } from 'next/router';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

const UpdateMateriaContainer = ({ title, items, id }) => {
    const methods = useForm({
        mode: 'onChange',
    });

    const { loading, data } = useQuery(Materia.getById, {
        variables: { id },
        onCompleted: ({ materias }) => {
            methods.reset(materias);
        },
    });

    const [update] = useMutation(Materia.update);

    const router = useRouter();

    const onSubmit = async (input) => {
        try {
            const res = await update({ variables: { id, input } });
            router.push('/matriculas/materias');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <PrivateLayout loading={loading}>
            <FormProvider {...methods}>
                <MateriaFormContainer
                    title={title}
                    items={items}
                    onSubmit={onSubmit}
                    materias={data?.materias}
                />
            </FormProvider>
        </PrivateLayout>
    );
};

UpdateMateriaContainer.getInitialProps = ({ query }) => {
    let title = 'Editar Materia';
    const items = [
        { title: 'Materia', href: '/matriculas/materias' },
        { title: 'Editar Materia', active: true },
    ];

    return {
        items,
        title,
        id: query.id,
    };
};

export default UpdateMateriaContainer;