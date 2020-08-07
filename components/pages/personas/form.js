import React from 'react';
import BreadCrumbTitle from '@components/BreadCrumb/breadCumbTitle';
import { Form, Button } from 'react-bootstrap';
import { BtnRegresar } from '@components/Buttons';
import { ErrorMessage } from '@hookform/error-message';
import { useFormContext } from 'react-hook-form';

const PersonaFormContainer = (
    title,
    items,
    //loading,
    onSubmit,
    //aplicaciones = [],
) => {
    const { register, handleSubmit, errors } = useFormContext();

    return (
        <main className="container-fluid">
            <BreadCrumbTitle title={title} items={items} />

            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-6 jumbotron rounded">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group>
                            <Form.Label>
                                Identificación:
                            </Form.Label>

                            <Form.Control
                                name="identificacion"
                                isInvalid={!!errors.identificacion}
                                ref={register({
                                    required: 'Este campo es obligatorio'
                                })}
                            />
                            <Form.Control.Feedback type="invalid">
                                <ErrorMessage errors={errors}
                                    name="identificacion">
                                    {({ message }) => message}
                                </ErrorMessage>
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>
                                Tipo Identificación:
                            </Form.Label>

                            <Form.Control
                                name="tipoIdentificacion"
                                isInvalid={!!errors.tipoIdentificacion}
                                ref={register({
                                    required: 'Este campo es obligatorio'
                                })}
                            />
                            <Form.Control.Feedback type="invalid">
                                <ErrorMessage errors={errors}
                                    name="tipoIdentificacion">
                                    {({ message }) => message}
                                </ErrorMessage>
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>
                                Primer Apellido:
                            </Form.Label>

                            <Form.Control
                                name="primerApellido"
                                isInvalid={!!errors.primerApellido}
                                ref={register({
                                    required: 'Este campo es obligatorio'
                                })}
                            />
                            <Form.Control.Feedback type="invalid">
                                <ErrorMessage errors={errors}
                                    name="primerApellido">
                                    {({ message }) => message}
                                </ErrorMessage>
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>
                                Segundo Apellido:
                            </Form.Label>

                            <Form.Control
                                name="segundoApellido"
                                isInvalid={!!errors.segundoApellido}
                                ref={register({
                                    required: 'Este campo es obligatorio'
                                })}
                            />
                            <Form.Control.Feedback type="invalid">
                                <ErrorMessage errors={errors}
                                    name="segundoApellido">
                                    {({ message }) => message}
                                </ErrorMessage>
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>
                                Primer Nombre:
                            </Form.Label>

                            <Form.Control
                                name="primerNombre"
                                isInvalid={!!errors.primerNombre}
                                ref={register({
                                    required: 'Este campo es obligatorio'
                                })}
                            />
                            <Form.Control.Feedback type="invalid">
                                <ErrorMessage errors={errors}
                                    name="primerNombre">
                                    {({ message }) => message}
                                </ErrorMessage>
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>
                                Segundo Nombre:
                            </Form.Label>

                            <Form.Control
                                name="segundoNombre"
                                isInvalid={!!errors.segundoNombre}
                                ref={register({
                                    required: 'Este campo es obligatorio'
                                })}
                            />
                            <Form.Control.Feedback type="invalid">
                                <ErrorMessage errors={errors}
                                    name="segundoNombre">
                                    {({ message }) => message}
                                </ErrorMessage>
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>
                                Género:
                            </Form.Label>

                            <Form.Control
                                name="genero"
                                isInvalid={!!errors.genero}
                                ref={register({
                                    required: 'Este campo es obligatorio'
                                })}
                            />
                            <Form.Control.Feedback type="invalid">
                                <ErrorMessage errors={errors}
                                    name="genero">
                                    {({ message }) => message}
                                </ErrorMessage>
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>
                                Sexo:
                            </Form.Label>

                            <Form.Control
                                name="sexo"
                                isInvalid={!!errors.sexo}
                                ref={register({
                                    required: 'Este campo es obligatorio'
                                })}
                            />
                            <Form.Control.Feedback type="invalid">
                                <ErrorMessage errors={errors}
                                    name="sexo">
                                    {({ message }) => message}
                                </ErrorMessage>
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>
                                Tipo Sangre:
                            </Form.Label>

                            <Form.Control
                                name="tipoSangre"
                                isInvalid={!!errors.tipoSangre}
                                ref={register({
                                    required: 'Este campo es obligatorio'
                                })}
                            />
                            <Form.Control.Feedback type="invalid">
                                <ErrorMessage errors={errors}
                                    name="tipoSangre">
                                    {({ message }) => message}
                                </ErrorMessage>
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>
                                Fecha Nacimiento:
                            </Form.Label>

                            <Form.Control
                                name="fechaNacimiento"
                                isInvalid={!!errors.fechaNacimiento}
                                ref={register({
                                    required: 'Este campo es obligatorio'
                                })}
                            />
                            <Form.Control.Feedback type="invalid">
                                <ErrorMessage errors={errors}
                                    name="fechaNacimiento">
                                    {({ message }) => message}
                                </ErrorMessage>
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>
                                Edad:
                            </Form.Label>

                            <Form.Control
                                name="edad"
                                isInvalid={!!errors.edad}
                                ref={register({
                                    required: 'Este campo es obligatorio'
                                })}
                            />
                            <Form.Control.Feedback type="invalid">
                                <ErrorMessage errors={errors}
                                    name="edad">
                                    {({ message }) => message}
                                </ErrorMessage>
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>
                                Calle Principal:
                            </Form.Label>

                            <Form.Control
                                name="callePrincipal"
                                isInvalid={!!errors.callePrincipal}
                                ref={register({
                                    required: 'Este campo es obligatorio'
                                })}
                            />
                            <Form.Control.Feedback type="invalid">
                                <ErrorMessage errors={errors}
                                    name="callePrincipal">
                                    {({ message }) => message}
                                </ErrorMessage>
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>
                                Calle Secundaria:
                            </Form.Label>

                            <Form.Control
                                name="calleSecundaria"
                                isInvalid={!!errors.calleSecundaria}
                                ref={register({
                                    required: 'Este campo es obligatorio'
                                })}
                            />
                            <Form.Control.Feedback type="invalid">
                                <ErrorMessage errors={errors}
                                    name="calleSecundaria">
                                    {({ message }) => message}
                                </ErrorMessage>
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>
                                Lugar Referencia:
                            </Form.Label>

                            <Form.Control
                                name="lugarReferencia"
                                isInvalid={!!errors.lugarReferencia}
                                ref={register({
                                    required: 'Este campo es obligatorio'
                                })}
                            />
                            <Form.Control.Feedback type="invalid">
                                <ErrorMessage errors={errors}
                                    name="lugarReferencia">
                                    {({ message }) => message}
                                </ErrorMessage>
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>
                                Número de Casa:
                            </Form.Label>

                            <Form.Control
                                name="numeroCasa"
                                isInvalid={!!errors.numeroCasa}
                                ref={register({
                                    required: 'Este campo es obligatorio'
                                })}
                            />
                            <Form.Control.Feedback type="invalid">
                                <ErrorMessage errors={errors}
                                    name="numeroCasa">
                                    {({ message }) => message}
                                </ErrorMessage>
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>
                                Teléfono:
                            </Form.Label>

                            <Form.Control
                                name="telefono"
                                isInvalid={!!errors.telefono}
                                ref={register({
                                    required: 'Este campo es obligatorio'
                                })}
                            />
                            <Form.Control.Feedback type="invalid">
                                <ErrorMessage errors={errors}
                                    name="telefono">
                                    {({ message }) => message}
                                </ErrorMessage>
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>
                                Celular:
                            </Form.Label>

                            <Form.Control
                                name="celular"
                                isInvalid={!!errors.celular}
                                ref={register({
                                    required: 'Este campo es obligatorio'
                                })}
                            />
                            <Form.Control.Feedback type="invalid">
                                <ErrorMessage errors={errors}
                                    name="celular">
                                    {({ message }) => message}
                                </ErrorMessage>
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>
                                Correo:
                            </Form.Label>

                            <Form.Control
                                name="correo"
                                isInvalid={!!errors.correo}
                                ref={register({
                                    required: 'Este campo es obligatorio'
                                })}
                            />
                            <Form.Control.Feedback type="invalid">
                                <ErrorMessage errors={errors}
                                    name="correo">
                                    {({ message }) => message}
                                </ErrorMessage>
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>
                                Discapacidad:
                            </Form.Label>

                            <Form.Control
                                name="discapacidad"
                                isInvalid={!!errors.discapacidad}
                                ref={register({
                                    required: 'Este campo es obligatorio'
                                })}
                            />
                            <Form.Control.Feedback type="invalid">
                                <ErrorMessage errors={errors}
                                    name="discapacidad">
                                    {({ message }) => message}
                                </ErrorMessage>
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>
                                Nivel de Discapacidad:
                            </Form.Label>

                            <Form.Control
                                name="nivelDiscapacidad"
                                isInvalid={!!errors.nivelDiscapacidad}
                                ref={register({
                                    required: 'Este campo es obligatorio'
                                })}
                            />
                            <Form.Control.Feedback type="invalid">
                                <ErrorMessage errors={errors}
                                    name="nivelDiscapacidad">
                                    {({ message }) => message}
                                </ErrorMessage>
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>
                                Carnet CONADIS:
                            </Form.Label>

                            <Form.Control
                                name="conadis"
                                isInvalid={!!errors.conadis}
                                ref={register({
                                    required: 'Este campo es obligatorio'
                                })}
                            />
                            <Form.Control.Feedback type="invalid">
                                <ErrorMessage errors={errors}
                                    name="conadis">
                                    {({ message }) => message}
                                </ErrorMessage>
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>
                                Ocupación:
                            </Form.Label>

                            <Form.Control
                                name="ocupacion"
                                isInvalid={!!errors.ocupacion}
                                ref={register({
                                    required: 'Este campo es obligatorio'
                                })}
                            />
                            <Form.Control.Feedback type="invalid">
                                <ErrorMessage errors={errors}
                                    name="ocupacion">
                                    {({ message }) => message}
                                </ErrorMessage>
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>
                                Nivel de Formación:
                            </Form.Label>

                            <Form.Control
                                name="nivelFormacion"
                                isInvalid={!!errors.nivelFormacion}
                                ref={register({
                                    required: 'Este campo es obligatorio'
                                })}
                            />
                            <Form.Control.Feedback type="invalid">
                                <ErrorMessage errors={errors}
                                    name="nivelFormacion">
                                    {({ message }) => message}
                                </ErrorMessage>
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Row className=" justify-content-between">
                            <div className="col-md-5 mt-3 my-1">
                                <BtnRegresar href="/pages/personas" variant="outline-danger" />
                            </div>
                            <div className="col-md-5 mt-3 my-1">
                                <Button variant="outline-primary" block type="submit">
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

export default PersonaFormContainer;