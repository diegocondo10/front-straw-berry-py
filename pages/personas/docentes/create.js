import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { useRouter } from 'next/router';
import PrivateLayout from '@layouts/privateLayout';
import DocenteFormContainer from '@components/pages/personas/docentes/form';

const CreateDocenteContainer = ({ items, title }) => {
    const methods = useForm({
        mode: 'onChange',
    });
    const router = useRouter();
    const data = {};

    const onSubmit = async (input) => {
        console.log('INPUT: ', input);
    };

    return (
        <PrivateLayout>
            <FormProvider {...methods}>
                <DocenteFormContainer
                    title={title}
                    items={items}
                    onSubmit={onSubmit}
                />
            </FormProvider>
        </PrivateLayout>
    );
};

CreateDocenteContainer.getInitialProps = () => {
    let title = 'Agregar Docente';
    const items = [
        { title: 'Docentes', href: '/personas/docentes' },
        { title: 'Agregar Docente', active: true },
    ];

    return {
        items,
        title,
    };
};

export default CreateDocenteContainer;