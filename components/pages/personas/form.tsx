import BreadCrumbTitle from '@components/BreadCrumbs/titleBreadCrumb';
import { BtnRegresar } from '@components/Buttons';
import CustomDatePicker from '@components/forms/CustomDatePicker';
import CustomDropdown from '@components/forms/CustomDropdown';
import CustomInputNumber from '@components/forms/CustomInputNumber';
import CustomPickList from '@components/forms/CustomPickList';
import CustomTextInput from '@components/forms/CustomTextInput';
//import { ErrorMessage } from '@hookform/error-message';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useFormContext } from 'react-hook-form';

const PARAMETROS = {
  tiposIdentificacion: ['CEDULA', 'PASAPORTE', 'OTRO'],
  siNo: ['SI', 'NO'],
  sexos: [
    { label: 'MASCULINO', value: 'MASCULINO' },
    { label: 'FEMENINO', value: 'FEMENINO' },
    { label: 'OTRO', value: 'OTRO' },
  ],
  tiposSangre: ['A+', 'B+', 'AB+', 'O+', 'O-'],

  nivelesFormacion: ['BASICO', 'SECUNDARIA', 'SUPERIOR'],
};

const PersonaFormContainer = ({ title, items, onSubmit, discapacidades = [] }) => {
  const { handleSubmit, watch } = useFormContext();

  return (
    <main className="container-fluid">
      <BreadCrumbTitle title={title} items={items} />

      <div className="row justify-content-center">
        <div className="col-md-10 jumbotron rounded">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Form.Row>
              <div className="col-md-6">
                <CustomDropdown
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
                <CustomDropdown
                  label="Genero:"
                  name="genero"
                  options={PARAMETROS.sexos}
                  rules={{ required: 'Este campo es obligatorio' }}
                />
              </div>

              <div className="col-md-6">
                <CustomDropdown
                  label="Sexo:"
                  name="sexo"
                  options={PARAMETROS.sexos}
                  rules={{ required: 'Este campo es obligatorio' }}
                />
              </div>

              <div className="col-md-6">
                <CustomDropdown
                  label="Tipo de Sangre:"
                  name="tipoSangre"
                  options={PARAMETROS.tiposSangre}
                  rules={{ required: 'Este campo es obligatorio' }}
                />
              </div>

              <div className="col-md-6">
                <CustomDatePicker
                  label="Fecha de Nacimiento: "
                  name="fechaNacimiento"
                  rules={{ required: 'Este campo es obligatorio' }}
                />
              </div>

              <div className="col-md-6">
                <CustomInputNumber
                  label="Edad:"
                  name="edad"
                  min={0}
                  max={100}
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
                  label="Ocupación:"
                  name="ocupacion"
                  rules={{
                    required: 'Este campo es obligatorio',
                  }}
                />
              </div>

              <div className="col-md-6">
                <CustomDropdown
                  label="Nivel de Formación:"
                  name="nivelFormacion"
                  options={PARAMETROS.nivelesFormacion}
                  rules={{
                    required: 'Este campo es obligatorio',
                  }}
                />
              </div>
            </Form.Row>

            <Form.Row>
              <div className="col-md-12">
                <CustomDropdown
                  label="Posee alguna discapacidad?"
                  name="tieneDiscapacidad"
                  options={PARAMETROS.siNo}
                />
              </div>

              <br />

              {watch('tieneDiscapacidad') === 'SI' && (
                <React.Fragment>
                  <div className="col-md-6">
                    <CustomTextInput
                      label="Carnet CONADIS:"
                      name="carnetConadis"
                      rules={{
                        required: 'Este campo es obligatorio',
                      }}
                    />
                  </div>

                  <div className="col-md-6">
                    <CustomInputNumber
                      label="Porcentaje de discapacidad:"
                      name="porcentajeDiscapacidad"
                      rules={{
                        required: 'Este campo es obligatorio',
                      }}
                    />
                  </div>

                  <div className="col-md-12">
                    <CustomPickList
                      label="Seleccione las discapacidades que posee"
                      name="discapacidades"
                      source={discapacidades}
                      sourceHeader="Discapacidades"
                      targetHeader="Posee"
                      itemTemplate={(item) => item.nombre}
                    />
                  </div>
                </React.Fragment>
              )}
            </Form.Row>

            <Form.Row className=" justify-content-between">
              <div className="col-md-5 mt-3 my-1">
                <BtnRegresar href="/personas" />
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
