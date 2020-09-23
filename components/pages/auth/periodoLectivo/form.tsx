import TitleBreadCrumb from '@components/BreadCrumbs/titleBreadCrumb';
import { BtnRegresar } from '@components/Buttons';
import CustomTextArea from '@components/forms/CustomTextArea';
import CustomTextInput from '@components/forms/CustomTextInput';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useFormContext } from 'react-hook-form';

const PeriodoLectivoFormContainer = ({ onSubmit, items, title }) => {
    const { handleSubmit } = useFormContext();

    return (
        <main className="container-fluid">
            <TitleBreadCrumb title={title} items={items} />
            <div className="row justify-content-center mt-5">
                <div className="col-md-10 jumbotron rounded">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Row>
                            <div className="col-md-6">
                                <CustomTextInput
                                    label="Nombre:"
                                    name="nombre"
                                    rules={{
                                        required: 'Este campo es obligatorio',
                                    }}
                                />
                            </div>
                            <div className="col-md-6">
                                <CustomTextInput
                                    label="Fecha de Inicio:"
                                    name="fechaInicio"
                                    rules={{
                                        required: 'Este campo es obligatorio',
                                    }}
                                />
                            </div>
                            <div className="col-md-6">
                                <CustomTextInput
                                    label="Fecha de Fin:"
                                    name="fechaFin"
                                    rules={{
                                        required: 'Este campo es obligatorio',
                                    }}
                                />
                            </div>
                            <div className="col-md-6">
                                <CustomTextInput
                                    label="Estado:"
                                    name="estado"
                                    rules={{
                                        required: 'Este campo es obligatorio',
                                    }}
                                />
                            </div>
                            <div className="col-md-6">
                                <CustomTextInput
                                    label="Fecha fin de clases:"
                                    name="fechafinClases"
                                    rules={{
                                        required: 'Este campo es obligatorio',
                                    }}
                                />
                            </div>
                            <div className="col-md-12">
                                <CustomTextArea name="observaciones" label="Observaciones" />
                            </div>
                            <div className="col-md-6">
                                <CustomTextInput
                                    label="Responsables:"
                                    name="responsables"
                                    rules={{
                                        required: 'Este campo es obligatorio',
                                    }}
                                />
                            </div>
                        </Form.Row>

                        <Form.Row className="justify-content-between">
                            <div className="col-md-5 mt-3 my-1">
                                <BtnRegresar href="/matriculas/periodos" variant="outline-danger" />
                            </div>
                            <div className="col-md-5 mt-3 my-1">
                                <Button label="Guardar" className="btn-block" type="submit" />
                            </div>
                        </Form.Row>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default PeriodoLectivoFormContainer;