import BreadCrumbTitle from '@components/BreadCrumbs/titleBreadCrumb';
import FooterButtonsForm from '@components/Buttons/FooterButtonsForm';
import CustomDatePicker from '@components/forms/CustomDatePicker';
import CustomDropDown from '@components/forms/CustomDropDown';
import CustomInputNumber from '@components/forms/CustomInputNumber';
import CustomPickList from '@components/forms/CustomPickList';
import CustomTextInput from '@components/forms/CustomTextInput';
//import { ErrorMessage } from '@hookform/error-message';
import React from 'react';
import { Form } from 'react-bootstrap';
import { useFormContext, useWatch } from 'react-hook-form';

const PARAMETROS = {
  tiposIdentificacion: ['CEDULA', 'PASAPORTE', 'OTRO'],
  siNo: ['SI', 'NO'],
  sexos: [
    { label: 'MASCULINO', value: 'MASCULINO' },
    { label: 'FEMENINO', value: 'FEMENINO' },
    { label: 'OTRO', value: 'OTRO' },
  ],
  tiposSangre: ['A+', 'B+', 'AB+', 'O+', 'O-'],
};

const PersonaFormContainer = ({ title, items, onSubmit, discapacidades = [] }) => {
  const { handleSubmit, control } = useFormContext();

  const tieneDiscapacidad = useWatch({
    control: control,
    name: 'tieneDiscapacidad',
    defaultValue: 'NO',
  });

  const onLocalSubmit = async (input) => {
    if (input.discapacidades) {
      input.discapacidades = input.discapacidades.map((e) => e.id);
    }
    await onSubmit(input);
  };

  return (
    <main className="container-fluid">
      <BreadCrumbTitle title={title} items={items} />

      <div className="row justify-content-center">
        <div className="col-md-10 col-lg-8 jumbotron rounded">
          <form onSubmit={handleSubmit(onLocalSubmit)}>
            <Form.Row>
              <div className="col-md-6">
                <CustomDropDown
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
                <CustomTextInput label="Segundo Apellido:" name="segundoApellido" />
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
                <CustomDropDown
                  label="Genero:"
                  name="genero"
                  options={PARAMETROS.sexos}
                  rules={{ required: 'Este campo es obligatorio' }}
                />
              </div>

              <div className="col-md-6">
                <CustomDropDown
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
                <CustomTextInput
                  label="Pais de nacimiento:"
                  name="paisResidencia"
                  rules={{ required: 'Este campo es obligatorio' }}
                />
              </div>

              <div className="col-md-6">
                <CustomTextInput
                  label="Provincia de nacimiento:"
                  name="provinciaResidencia"
                  rules={{ required: 'Este campo es obligatorio' }}
                />
              </div>

              <div className="col-md-6">
                <CustomTextInput
                  label="Canton de nacimiento:"
                  name="cantonResidencia"
                  rules={{ required: 'Este campo es obligatorio' }}
                />
              </div>

              <div className="col-md-6">
                <CustomTextInput
                  label="Parroquia de nacimiento:"
                  name="parroquiaResidencia"
                  rules={{ required: 'Este campo es obligatorio' }}
                />
              </div>

              <div className="col-md-6">
                <CustomTextInput
                  label="Direccion:"
                  name="direccionDomiciliaria"
                  rules={{
                    required: 'Este campo es obligatorio',
                  }}
                />
              </div>

              <div className="col-md-6">
                <CustomTextInput label="Teléfono:" name="telefono" />
              </div>

              <div className="col-md-6">
                <CustomTextInput label="Celular:" name="celularUno" />
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
            </Form.Row>

            <Form.Row>
              <div className="col-md-12">
                <CustomDropDown
                  label="Posee alguna discapacidad?"
                  name="tieneDiscapacidad"
                  options={PARAMETROS.siNo}
                />
              </div>

              <br />

              {tieneDiscapacidad === 'SI' && (
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
                      min={1}
                      max={100}
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

            <FooterButtonsForm hrefBack="/personas" />
          </form>
        </div>
      </div>
    </main>
  );
};

export default PersonaFormContainer;
