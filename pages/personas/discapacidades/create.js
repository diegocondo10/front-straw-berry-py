import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import useCustomToast from '@hooks/useCustomToast';
import PrivateLayout from '@layouts/privateLayout';
import { useRouter } from 'next/router';
import { FormProvider, useForm } from 'react-hook-form';
import DiscapacidadFormContainer from '@components/pages/personas/discapacidades/form';
import { Discapacidad } from '@services/personas.service';

const CreateDiscapacidadContainer = ({
    title, items
}) => {
    const [loadBtn, setLoadBtn] = useState(false);

    const methods = useForm({ mode: 'onChange' });

    const [createDiscapacidad, { loading }] = useMutation(Discapacidad.create);

    const { addSuccessToast } = useCustomToast();

    const router = useRouter();

    const onSubmit = async (formData) => {
        setLoadBtn(true);
        await createDiscapacidad({
            variables: {
                input: formData
            }
        });
        setLoadBtn(false);

        addSuccessToast('Se ha agregado una nueva discapacidad');
        router.push('/personas/discapacidades');
    };
    return (
        <PrivateLayout title={title} loading={loading}>
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

CreateDiscapacidadContainer.getInitialProps = () => {
    let title = 'Agregar Discapacidad';

    const breadCrumbItems = [
        {
            title: 'Discapacidades',
            href: '/personas/discapacidades',
        },
        { title, active: true },
    ];

    return { items: breadCrumbItems, title };
};

export default CreateDiscapacidadContainer;