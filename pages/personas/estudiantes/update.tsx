import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { useRouter } from 'next/router';
import EstudianteFormContainer from '@components/pages/personas/estudiantes/form';

const UpdateEstudianteContainer = ({ title, items, id }) => {
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
                <EstudianteFormContainer
                    title={title}
                    items={items}
                    onSubmit={onSubmit}
                />
            </FormProvider>
        </PrivateLayout>
    );
};

UpdateEstudianteContainer.getInitialProps = ({ query }) => {
    let title = 'Editar Estudiante';
    const items = [
        { title: 'Estudiante', href: '/personas/estudiantes' },
        { title: 'Editar Estudiante', active: true },
    ];

    return {
        items,
        title,
        id: query.id
    };
};

export default UpdateEstudianteContainer;