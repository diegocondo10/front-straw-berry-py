import React from 'react';
import { BtnRegresar } from '@components/Buttons';
import { Button, Form } from 'react-bootstrap';
import BreadCrumbTitle from '@components/BreadCrumb/titleBreadCrumb';
import Select from '@components/forms/inputs';
import CustomTextInput from '@components/forms/CustomTextInput';
import { useFormContext } from 'react-hook-form';

const DocenteFormContainer = ({
    title,
    items,
    onSubmit
}) => {
    const { register, handleSubmit, errors } = useFormContext();
    console.log(title);

    return (
        <main className="container-fluid">
            <BreadCrumbTitle
                title={title}
                items={items}
            />
            <div className="row justify-content-center">
                <div className="col-md-10 jumbotron rounded">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Row>
                            <div className="col-md-6">
                                <Select
                                    label="Persona:"
                                    name="persona"
                                    options={[]}
                                    rules={{
                                        required: 'Este campo es obligatorio'
                                    }}
                                />
                            </div>

                            <div className="col-md-6">
                                <CustomTextInput
                                    label="Tipo de Título:"
                                    name="tipoTitulo"
                                    rules={{
                                        required: 'Este campo es obligatorio'
                                    }}
                                />
                            </div>

                            <div className="col-md-6">
                                <CustomTextInput
                                    label="Nive de Formación:"
                                    name="nivelFormacion"
                                    rules={{
                                        required: 'Este campo es obligatorio'
                                    }}
                                />
                            </div>
                        </Form.Row>

                        <Form.Row className="justify-content-between">
                            <div className="col-md-5 mt-3 my-1">
                                <BtnRegresar
                                    href="/personas/docentes"
                                    variant="outline-danger"
                                />
                            </div>
                            <div className="col-md-5 mt-3 my-1">
                                <Button
                                    variant="outline-primary"
                                    block
                                    type="submit">
                                    Guardar
                                </Button>
                            </div>
                        </Form.Row>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default DocenteFormContainer;