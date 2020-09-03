import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { useRouter } from 'next/router';
import PrivateLayout from '@layouts/privateLayout';
import DocenteFormContainer from '@components/pages/personas/docentes/form';

const UpdateDocenteContainer = ({
    title, items, id }) => {
    const methods = useForm({
        mode: 'onChange'
    });
    const router = useRouter();

    const onSubmit = async (input) => {
        console.log(input);
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

UpdateDocenteContainer.getInitialProps = ({ query }) => {
    let title = 'Editar Docente';
    const items = [
        { title: 'Docente', href: '/personas/docentes' },
        { title: 'Editar Docente', active: true },
    ];

    return {
        items,
        title,
        id: query.id
    };
};

export default UpdateDocenteContainer;