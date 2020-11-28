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
  estadoCivil: [
    'Soltero/a',
    'Casado/a',
    'Divorciado/a',
    'Viudo/a',
    'Unión Libre',
    'Otro',
  ],
  etnia: [
    'Quichua',
    'Montubio',
    'Shuar',
    'Salasacas',
    'Saraguros',
    'Cañaris',
    'Tsáchilas',
    'Awa',
    'Cofán',
    'Huaroni',
    'Chachi',
    'Shiwiar',
    'Andwa',
  ],
  celularDos: ['xxxxxxxxxxxx'],
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
            <div className="form-row">
              <div className="col-12">
                <h4 className="text-underline">Información Personal</h4>
              </div>
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
                  keyfilter="alphanum"
                  rules={{
                    required: 'Este campo es obligatorio',
                  }}
                />
              </div>

              <div className="col-md-6">
                <CustomTextInput
                  label="Primer Apellido:"
                  name="primerApellido"
                  keyfilter="alpha"
                  rules={{
                    required: 'Este campo es obligatorio',
                  }}
                />
              </div>

              <div className="col-md-6">
                <CustomTextInput
                  label="Segundo Apellido:"
                  name="segundoApellido"
                  keyfilter="alpha"
                />
              </div>

              <div className="col-md-6">
                <CustomTextInput
                  label="Primer Nombre:"
                  name="primerNombre"
                  keyfilter="alpha"
                  rules={{
                    required: 'Este campo es obligatorio',
                  }}
                />
              </div>

              <div className="col-md-6">
                <CustomTextInput
                  label="Segundo Nombre:"
                  name="segundoNombre"
                  keyfilter="alpha"
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
                  label="País de Nacimiento:"
                  name="paisNacimiento"
                  keyfilter="alpha"
                  rules={{ required: 'Este campo es obligatorio' }}
                />
              </div>

              <div className="col-md-6">
                <CustomDropDown
                  label="Estado Civil:"
                  name="estadoCivil"
                  options={PARAMETROS.estadoCivil}
                  rules={{ required: 'Este campo es obligatorio' }}
                />
              </div>

              <div className="col-md-6">
                <CustomDropDown
                  label="Género:"
                  name="genero"
                  options={PARAMETROS.sexos}
                  rules={{ required: 'Este campo es obligatorio' }}
                />
              </div>

              <div className="col-md-6">
                <CustomDropDown
                  label="Etnia:"
                  name="etnia"
                  options={PARAMETROS.etnia}
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
                <CustomTextInput
                  label="País Residencia:"
                  name="paisResidencia"
                  keyfilter="alpha"
                  rules={{ required: 'Este campo es obligatorio' }}
                />
              </div>

              <div className="col-md-6">
                <CustomTextInput
                  label="Provincia Residencia:"
                  name="provinciaResidencia"
                  keyfilter="alpha"
                  rules={{ required: 'Este campo es obligatorio' }}
                />
              </div>

              <div className="col-md-6">
                <CustomTextInput
                  label="Cantón Residencia:"
                  name="cantonResidencia"
                  keyfilter="alpha"
                  rules={{ required: 'Este campo es obligatorio' }}
                />
              </div>

              <div className="col-md-6">
                <CustomTextInput
                  label="Parroquia Residencia:"
                  name="parroquiaResidencia"
                  keyfilter="alpha"
                  rules={{ required: 'Este campo es obligatorio' }}
                />
              </div>

              <div className="col-md-12">
                <CustomTextInput
                  label="Dirección Domiciliaria:"
                  name="direccionDomiciliaria"
                  keyfilter="alpha"
                  rules={{ required: 'Este campo es obligatorio' }}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="col-12">
                <h4 className="text-underline">Información de Contactos</h4>
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
                <CustomTextInput label="Teléfono:" name="telefono" keyfilter="num" />
              </div>

              <div className="col-md-6">
                <CustomTextInput
                  label="1° Celular:"
                  name="celularUno"
                  keyfilter="num"
                />
              </div>

              <div className="col-md-6">
                <CustomTextInput
                  label="2° Celular:"
                  name="celularDos"
                  value={PARAMETROS.celularDos}
                />
              </div>
            </div>


            <div className="form-row">
              <div className="col-12">
                <h4 className="text-underline">Información de Discapacidad</h4>
              </div>
              <div className="col-md-12">
                <CustomDropDown
                  label="¿Posee alguna discapacidad?"
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
                      keyfilter="num"
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
            </div>

            <FooterButtonsForm hrefBack="/personas" />
          </form>
        </div>
      </div>
    </main>
  );
};

export default PersonaFormContainer;
