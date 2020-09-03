import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { useRouter } from 'next/router';
import { useQuery, useMutation } from '@apollo/client';
import { Discapacidad } from '@services/personas.service';
import PrivateLayout from '@layouts/privateLayout';
import DiscapacidadFormContainer from '@components/pages/personas/discapacidades/form';

const UpdateDiscapacidadContainer = ({ title, items, id }) => {
    const methods = useForm({ mode: 'onChange' });
    const [loadBtn, setLoadBtn] = useState(false);

    const router = useRouter();

    const { loading: loadingQuery } = useQuery(Discapacidad.getById, {
        variables: { id },
        onCompleted: ({ discapacidad }) => {
            methods.reset(discapacidad);
        },
        onError: (error) => router.push('/personas/discapacidades'),
    });

    const [updateDiscapacidad] = useMutation(Discapacidad.update, {
        onError: () => router.push('/personas/discapacidades'),
    });

    const onSubmit = async (input) => {
        setLoadBtn(true);
        await updateDiscapacidad({
            variables: {
                id, input
            }
        });
        setLoadBtn(false);
        router.replace('/personas/discapacidades');
    };

    return (
        <PrivateLayout title={title} loading={loadingQuery}>
            <FormProvider {...methods}>
                <DiscapacidadFormContainer
                    title={title}
                    items={items}
                    onSubmit={onSubmit}
                    loadBtn={loadBtn}
                />
            </FormProvider>
        </PrivateLayout>
    );
};

UpdateDiscapacidadContainer.getInitialProps = ({ query }) => {
    let title = 'Editar Discapacidad';

    const breadCrumbItems = [
        {
            title: 'Discapacidades',
            href: '/personas/discapacidades',
        },
        { title, active: true },
    ];

    return { items: breadCrumbItems, title, id: query.id };
};

export default UpdateDiscapacidadContainer;