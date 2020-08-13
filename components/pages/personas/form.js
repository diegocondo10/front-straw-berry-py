import BreadCrumbTitle from '@components/BreadCrumb/titleBreadCrumb';
import { BtnRegresar } from '@components/Buttons';
import Select from '@components/forms/inputs';
import CustomTextInput from '@components/forms/CustomTextInput';
import { ErrorMessage } from '@hookform/error-message';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useFormContext } from 'react-hook-form';

const PARAMETROS = {
  tiposIdentificacion: [
    { label: 'CEDULA', value: 'CEDULA' },
    { label: 'PASAPORTE', value: 'PASAPORTE' },
    { label: 'OTRO', value: 'OTRO' },
  ],
  sexos: [
    { label: 'MASCULINO', value: 'MASCULINO' },
    { label: 'FEMENINO', value: 'FEMENINO' },
    { label: 'OTRO', value: 'OTRO' },
  ],
};

const PersonaFormContainer = ({
  title,
  items,
  //loading,
  onSubmit,
  //aplicaciones = [],
}) => {
  const { register, handleSubmit, errors } = useFormContext();
  console.log(title);

  return (
    <main className="container-fluid">
      <BreadCrumbTitle title={title} items={items} />

      <div className="row justify-content-center">
        <div className="col-md-10 jumbotron rounded">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Form.Row>
              <div className="col-md-6">
                <Select
                  label="Tipo de Identificacion:"
                  name="tipoIdentificacion"
                  options={PARAMETROS.tiposIdentificacion}
                  rules={{ required: 'Este campo es obligatorio' }}
                />
              </div>

              <div className="col-md-6">
                <CustomTextInput
                  label="Identificación:"
                  name="identificacion"
                  rules={{
                    required: 'Este campo es obligatorio',
                  }}
                />
              </div>

              <div className="col-md-6">
                <CustomTextInput
                  label="Primer Apellido:"
                  name="primerApellido"
                  rules={{
                    required: 'Este campo es obligatorio',
                  }}
                />
              </div>

              <div className="col-md-6">
                <CustomTextInput
                  label="Segundo Apellido:"
                  name="segundoApellido"
                  rules={{
                    required: 'Este campo es obligatorio',
                  }}
                />
              </div>

              <div className="col-md-6">
                <CustomTextInput
                  label="Primer Nombre:"
                  name="primerNombre"
                  rules={{
                    required: 'Este campo es obligatorio',
                  }}
                />
              </div>

              <div className="col-md-6">
                <CustomTextInput
                  label="Segundo Nombre:"
                  name="segundoNombre"
                  rules={{
                    required: 'Este campo es obligatorio',
                  }}
                />
              </div>

              <div className="col-md-6">
                {/* <Form.Group>
                  <Form.Label>Género:</Form.Label>

                  <Form.Control
                    name="genero"
                    isInvalid={!!errors.genero}
                    ref={register({
                      required: 'Este campo es obligatorio',
                    })}
                  />
                  <Form.Control.Feedback type="invalid">
                    <ErrorMessage errors={errors} name="genero">
                      {({ message }) => message}
                    </ErrorMessage>
                  </Form.Control.Feedback>
                </Form.Group> */}
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Género: </Form.Label>
                  <Form.Control as="select">
                    <option>Masculino</option>
                    <option>Femenino</option>
                  </Form.Control>
                </Form.Group>
              </div>

              <div className="col-md-6">
                {/* <Form.Group>
                  <Form.Label>Sexo:</Form.Label>

                  <Form.Control
                    name="sexo"
                    isInvalid={!!errors.sexo}
                    ref={register({
                      required: 'Este campo es obligatorio',
                    })}
                  />
                  <Form.Control.Feedback type="invalid">
                    <ErrorMessage errors={errors} name="sexo">
                      {({ message }) => message}
                    </ErrorMessage>
                  </Form.Control.Feedback>
                </Form.Group> */}
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Sexo: </Form.Label>
                  <Form.Control as="select">
                    <option>Masculino</option>
                    <option>Femenino</option>
                    <option>Otro</option>
                  </Form.Control>
                </Form.Group>
              </div>

              <div className="col-md-6">
                {/* <Form.Group>
                  <Form.Label>Tipo Sangre:</Form.Label>

                  <Form.Control
                    name="tipoSangre"
                    isInvalid={!!errors.tipoSangre}
                    ref={register({
                      required: 'Este campo es obligatorio',
                    })}
                  />
                  <Form.Control.Feedback type="invalid">
                    <ErrorMessage errors={errors} name="tipoSangre">
                      {({ message }) => message}
                    </ErrorMessage>
                  </Form.Control.Feedback>
                </Form.Group> */}
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Tipo de Sangre</Form.Label>
                  <Form.Control as="select">
                    <option>A+</option>
                    <option>B+</option>
                    <option>AB+</option>
                    <option>O+</option>
                    <option>O-</option>
                  </Form.Control>
                </Form.Group>
              </div>

              <div className="col-md-6">
                <CustomTextInput
                  label="Fecha de Nacimiento:"
                  name="fechaNacimiento"
                  rules={{
                    required: 'Este campo es obligatorio',
                  }}
                />
              </div>

              <div className="col-md-6">
                <CustomTextInput
                  label="Edad:"
                  name="edad"
                  rules={{
                    required: 'Este campo es obligatorio',
                  }}
                />
              </div>

              <div className="col-md-6">
                <CustomTextInput
                  label="Calle Principal:"
                  name="callePrincipal"
                  rules={{
                    required: 'Este campo es obligatorio',
                  }}
                />
              </div>

              <div className="col-md-6">
                <CustomTextInput
                  label="Calle Secundaria:"
                  name="calleSecundaria"
                  rules={{
                    required: 'Este campo es obligatorio',
                  }}
                />
              </div>

              <div className="col-md-6">
                <CustomTextInput
                  label="Lugar de Referencia:"
                  name="lugarReferencia"
                  rules={{
                    required: 'Este campo es obligatorio',
                  }}
                />
              </div>

              <div className="col-md-6">
                <CustomTextInput
                  label="Número de Casa:"
                  name="numeroCasa"
                  rules={{
                    required: 'Este campo es obligatorio',
                  }}
                />
              </div>

              <div className="col-md-6">
                <CustomTextInput
                  label="Teléfono:"
                  name="telefono"
                  rules={{
                    required: 'Este campo es obligatorio',
                  }}
                />
              </div>

              <div className="col-md-6">
                <CustomTextInput
                  label="Celular:"
                  name="celular"
                  rules={{
                    required: 'Este campo es obligatorio',
                  }}
                />
              </div>

              <div className="col-md-6">
                <CustomTextInput
                  label="Correo:"
                  name="correo"
                  rules={{
                    required: 'Este campo es obligatorio',
                  }}
                />
              </div>

              <div className="col-md-6">
                <CustomTextInput
                  label="Discapacidad:"
                  name="discapacidad"
                  rules={{
                    required: 'Este campo es obligatorio',
                  }}
                />
              </div>

              <div className="col-md-6">
                <CustomTextInput
                  label="Tipo de Discapacidad:"
                  name="tipoDiscapacidad"
                  rules={{
                    required: 'Este campo es obligatorio',
                  }}
                />
              </div>

              <div className="col-md-6">
                <CustomTextInput
                  label="Carnet CONADIS:"
                  name="conadis"
                  rules={{
                    required: 'Este campo es obligatorio',
                  }}
                />
              </div>

              <div className="col-md-6">
                <CustomTextInput
                  label="Ocupación:"
                  name="ocupacion"
                  rules={{
                    required: 'Este campo es obligatorio',
                  }}
                />
              </div>

              <div className="col-md-6">
                <CustomTextInput
                  label="Nivel de Formación:"
                  name="nivelFormacion"
                  rules={{
                    required: 'Este campo es obligatorio',
                  }}
                />
              </div>

            </Form.Row>

            <Form.Row className=" justify-content-between">
              <div className="col-md-5 mt-3 my-1">
                <BtnRegresar href="/personas" variant="outline-danger" />
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
