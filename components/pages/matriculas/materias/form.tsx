import React from 'react';
import { useFormContext } from 'react-hook-form';
import BreadCrumbTitle from '@components/BreadCrumbs/titleBreadCrumb';
import { Button, Form } from 'react-bootstrap';
import CustomDropdown from '@components/forms/CustomDropDown';
import CustomTextInput from '@components/forms/CustomTextInput';
import { BtnRegresar } from '@components/Buttons/BtnRegresar';

const MateriaFormContainer = ({ title, items, onSubmit, materias = [] }) => {
    const { handleSubmit } = useFormContext();

    return (
        <main className="container-fluid">
            <BreadCrumbTitle title={title} items={items} />
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
                                <CustomTextInput
                                    label="Grado:"
                                    name="grado"
                                    rules={{
                                        required: 'Este campo es obligatorio',
                                    }}
                                />
                            </div>
                            <div className="col-md-12">
                                <CustomTextInput
                                    label="Horas Presenciales:"
                                    name="horaPresencial"
                                    rules={{
                                        required: 'Este campo es obligatorio',
                                    }}
                                />
                            </div>
                            <div className="col-md-12">
                                <CustomTextInput
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
                        <Form.Row className="justify-content-between">
                            <div className="col-md-5 mt-3 my-1">
                                <BtnRegresar href="/matriculas/materias" variant="outline-danger" />
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

export default MateriaFormContainer;