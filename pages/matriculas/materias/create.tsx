import { useMutation, useQuery } from '@apollo/client';
import MateriaFormContainer from '@components/pages/matriculas/materias/form';
import PrivateLayout from '@layouts/privateLayout';
import { Materia } from '@services/matriculas.service';
import { useRouter } from 'next/router';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

const CreateMateriaContainer = ({ items, title }) => {
    const methods = useForm({
        mode: 'onChange',
    });

    const { loading, data } = useQuery(Materia.getAllCustom('str'));
    const [create] = useMutation(Materia.create);
    const router = useRouter();

    const onSubmit = async (input) => {
        const res = await create({
            variables: { input }
        });

        router.push('/matriculas/materias');
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

CreateMateriaContainer.getInitialProps = () => {
    let title = 'Agregar Materias';
    const items = [
        { title: 'Materias', href: '/matriculas/materias' },
        { title: 'Agregar Materias', active: true },
    ];

    return {
        items,
        title,
    };
};

export default CreateMateriaContainer;