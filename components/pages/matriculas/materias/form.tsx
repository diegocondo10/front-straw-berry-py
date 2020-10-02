import BreadCrumbTitle from '@components/BreadCrumbs/titleBreadCrumb';
import FooterButtonsForm from '@components/Buttons/FooterButtonsForm';
import CustomInputNumber from '@components/forms/CustomInputNumber';
import CustomTextArea from '@components/forms/CustomTextArea';
import CustomTextInput from '@components/forms/CustomTextInput';
import React from 'react';
import { Form } from 'react-bootstrap';
import { FormProvider, useForm } from 'react-hook-form';

const MateriaFormContainer = ({ title, items, onSubmit, defaultData = {} }) => {
    const methods = useForm({
        mode: 'onChange',
        defaultValues: defaultData,
    });

    const { handleSubmit } = methods;

    return (
        <main className="container-fluid">
            <BreadCrumbTitle title={title} items={items} />
            <FormProvider {...methods}>
                <div className="row justify-content-center">
                    <div className="col-md-10 jumbotron rounded">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Form.Row>
                                <div className="col-md-12">
                                    <CustomTextInput
                                        label="Nombre:"
                                        name="nombre"
                                        rules={{
                                            required: 'Este campo es obligatorio',
                                        }}
                                    />
                                </div>
                                <div className="col-md-12">
                                    <CustomTextInput
                                        label="Código:"
                                        name="codigo"
                                        rules={{
                                            required: 'Este campo es obligatorio',
                                        }}
                                    />
                                </div>
                                <div className="col-md-12">
                                    <CustomInputNumber
                                        label="Grado:"
                                        name="grado"
                                        rules={{
                                            required: 'Este campo es obligatorio',
                                        }}
                                    />
                                </div>
                                <div className="col-md-12">
                                    <CustomInputNumber
                                        label="Horas Presenciales:"
                                        name="horasPresencial"
                                        rules={{
                                            required: 'Este campo es obligatorio',
                                        }}
                                    />
                                </div>
                                <div className="col-md-12">
                                    <CustomTextArea
                                        label="Descripción:"
                                        name="descripcion"
                                        rules={{
                                            required: 'Este campo es obligatorio',
                                        }}
                                    />
                                </div>
                                <div className="col-md-12">
                                    <CustomTextInput
                                        label="Objetivo:"
                                        name="objetivo"
                                        rules={{
                                            required: 'Este campo es obligatorio',
                                        }}
                                    />
                                </div>
                                <div className="col-md-12">
                                    <CustomTextInput
                                        label="Objetivo Específico:"
                                        name="objetivoEspecifico"
                                        rules={{
                                            required: 'Este campo es obligatorio',
                                        }}
                                    />
                                </div>
                            </Form.Row>

                            <FooterButtonsForm loading={false} hrefBack="/matriculas/materias" />
                        </form>
                    </div>
                </div>
            </FormProvider>
        </main>
    );
};

export default MateriaFormContainer;
