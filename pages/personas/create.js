import React from 'react';
import { useRouter } from 'next/router';
import { FormProvider, useForm } from 'react-hook-form';
import PrivateLayout from '@layouts/privateLayout';
import PermisoFormContainer from '@components/pages/auth/permisos/form';

const CreatePersonaContainer = ({ items, title }) => {
    const methods = useForm({
        mode: 'onChange'
    });
    const router = useRouter();

    const data = {};

    return (
        <PrivateLayout>
            <FormProvider {...methods}>
                <PermisoFormContainer
                    title={title}
                    items={items}
                    onSubmit={onSubmit}
                />
            </FormProvider>
        </PrivateLayout>
    );
};

CreatePersonaContainer.getInitialProps = () => {
    let title = 'Agregar Persona';
    const items = [
        { title: 'Personas', href: '/pages/personas' },
        { title: 'Agregar Persona', active: true },
    ];

    return {
        items,
        title,
    };
};

export default CreatePersonaContainer;