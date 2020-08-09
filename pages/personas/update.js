import React from 'react';
import { useRouter } from 'next/router';
import PrivateLayout from '@layouts/privateLayout';
import { FormProvider, useForm } from 'react-hook-form';
import PersonaFormContainer from '@components/pages/personas/form';

const UpdatePersonaContainer = ({ title, items, id }) => {
    const methods = useForm({
        mode: 'onChange'
    });
    const router = useRouter();

    const onSubmit = async (input) => {
        console.log(input);
    };

    return (
        <PrivateLayout title={title}>
            <FormProvider {...methods}>
                <PersonaFormContainer
                    title={title}
                    items={items}
                    onSubmit={onSubmit}
                />
            </FormProvider>
        </PrivateLayout>
    );
};

UpdatePersonaContainer.getInitialProps = ({ query }) => {
    let title = 'Editar Persona';
    const items = [
        { title: 'Personas', href: '/personas' },
        { title: 'Editar Persona', active: true },
    ];

    return {
        items,
        title,
        id: query.id
    };
};

export default UpdatePersonaContainer;