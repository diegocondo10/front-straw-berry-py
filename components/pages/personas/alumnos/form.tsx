import BreadCrumbTitle from '@components/BreadCrumbs/titleBreadCrumb';
import FooterButtonsForm from '@components/Buttons/FooterButtonsForm';
import CustomDropDown from '@components/forms/CustomDropDown';
import CustomTextArea from '@components/forms/CustomTextArea';
import CustomTextInput from '@components/forms/CustomTextInput';
import { getId } from '@utils/funciones';
import React from 'react';
import { Form } from 'react-bootstrap';
import { useFormContext } from 'react-hook-form';

const AlumnoFormContainer = ({ title, items, onSubmit, personas = [] }) => {
  const { handleSubmit } = useFormContext();

  const mapOnSubmit = (input) => {
    input.persona = getId(input.persona);
    onSubmit(input);
  };

  return (
    <main className="container-fluid">
      <BreadCrumbTitle title={title} items={items} />
      <div className="row justify-content-center">
        <div className="col-md-10 col-lg-9 col-xl-8 jumbotron rounded">
          <form onSubmit={handleSubmit(mapOnSubmit)}>
            <Form.Row>
              <div className="col-md-12">
                <h4 className="text-underline">Datos del Alumno</h4>
                <CustomDropDown
                  label="Persona:"
                  name="persona"
                  options={personas}
                  optionLabel="str"
                  filter
                  rules={{ required: 'Este campo es obligatorio' }}
                />
              </div>

              <h4 className="text-underline col-12">Información del Padre</h4>
              <div className="col-md-12">
                <CustomTextInput
                  className="p-inputtext-sm"
                  label="Identificación:"
                  name="padre.identificacion"
                  keyfilter="alphanum"
                  rules={{
                    required: 'Este campo es obligatorio',
                  }}
                />
              </div>
              <div className="col-md-6">
                <CustomTextInput
                  className="p-inputtext-sm"
                  label="Primer Nombre:"
                  name="padre.primerNombre"
                  keyfilter="alpha"
                  rules={{
                    required: 'Este campo es obligatorio',
                  }}
                />
              </div>
              <div className="col-md-6">
                <CustomTextInput
                  className="p-inputtext-sm"
                  label="Segundo Nombre:"
                  name="padre.segundoNombre"
                  keyfilter="alpha"
                />
              </div>
              <div className="col-md-6">
                <CustomTextInput
                  className="p-inputtext-sm"
                  label="Primer Apellido:"
                  name="padre.primerApellido"
                  keyfilter="alpha"
                  rules={{
                    required: 'Este campo es obligatorio',
                  }}
                />
              </div>
              <div className="col-md-6">
                <CustomTextInput
                  className="p-inputtext-sm"
                  label="Segundo Apellido:"
                  name="padre.segundoApellido"
                  keyfilter="alpha"
                />
              </div>
              <div className="col-md-12">
                <CustomTextInput
                  className="p-inputtext-sm"
                  label="Ocupación:"
                  name="padre.ocupacion"
                  keyfilter="alpha"
                  rules={{
                    required: 'Este campo es obligatorio',
                  }}
                />
              </div>
              <div className="col-md-12">
                <CustomTextInput
                  className="p-inputtext-sm"
                  label="Dirección:"
                  name="padre.direccion"
                  keyfilter="alpha"
                  rules={{
                    required: 'Este campo es obligatorio',
                  }}
                />
              </div>
              <div className="col-md-6">
                <CustomTextInput
                  className="p-inputtext-sm"
                  label="Telefóno:"
                  name="padre.telefono"
                  keyfilter="num"
                />
              </div>
              <div className="col-md-6">
                <CustomTextInput
                  className="p-inputtext-sm"
                  label="Celular:"
                  name="padre.celular"
                  keyfilter="num"
                />
              </div>

              <h4 className="text-underline">Información de la Madre</h4>
              <div className="col-md-12">
                <CustomTextInput
                  className="p-inputtext-sm"
                  label="Identificación:"
                  name="madre.identificacion"
                  keyfilter="alphanum"
                  rules={{
                    required: 'Este campo es obligatorio',
                  }}
                />
              </div>
              <div className="col-md-6">
                <CustomTextInput
                  className="p-inputtext-sm"
                  label="Primer Nombre:"
                  name="madre.primerNombre"
                  keyfilter="alpha"
                  rules={{
                    required: 'Este campo es obligatorio',
                  }}
                />
              </div>
              <div className="col-md-6">
                <CustomTextInput
                  className="p-inputtext-sm"
                  label="Segundo Nombre:"
                  name="madre.segundoNombre"
                  keyfilter="alpha"
                />
              </div>
              <div className="col-md-6">
                <CustomTextInput
                  className="p-inputtext-sm"
                  label="Primer Apellido:"
                  name="madre.primerApellido"
                  keyfilter="alpha"
                  rules={{
                    required: 'Este campo es obligatorio',
                  }}
                />
              </div>
              <div className="col-md-6">
                <CustomTextInput
                  className="p-inputtext-sm"
                  label="Segundo Apellido:"
                  name="madre.segundoApellido"
                  keyfilter="alpha"
                />
              </div>
              <div className="col-md-12">
                <CustomTextInput
                  className="p-inputtext-sm"
                  label="Ocupación:"
                  name="madre.ocupacion"
                  keyfilter="alpha"
                  rules={{
                    required: 'Este campo es obligatorio',
                  }}
                />
              </div>
              <div className="col-md-12">
                <CustomTextInput
                  className="p-inputtext-sm"
                  label="Dirección:"
                  name="madre.direccion"
                  keyfilter="alpha"
                  rules={{
                    required: 'Este campo es obligatorio',
                  }}
                />
              </div>
              <div className="col-md-6">
                <CustomTextInput
                  className="p-inputtext-sm"
                  label="Telefóno:"
                  name="madre.telefono"
                  keyfilter="num"
                />
              </div>
              <div className="col-md-6">
                <CustomTextInput
                  className="p-inputtext-sm"
                  label="Celular:"
                  name="madre.celular"
                  keyfilter="num"
                />
              </div>

              <h4 className="text-underline">En caso de Emergencia comunicar a:</h4>
              <div className="col-md-12">
                <CustomTextInput
                  className="p-inputtext-sm"
                  label="Identificación:"
                  name="contactoEmergencia.identificacion"
                  keyfilter="alphanum"
                  rules={{
                    required: 'Este campo es obligatorio',
                  }}
                />
              </div>
              <div className="col-md-6">
                <CustomTextInput
                  className="p-inputtext-sm"
                  label="Primer Nombre:"
                  name="contactoEmergencia.primerNombre"
                  keyfilter="alpha"
                  rules={{
                    required: 'Este campo es obligatorio',
                  }}
                />
              </div>
              <div className="col-md-6">
                <CustomTextInput
                  className="p-inputtext-sm"
                  label="Segundo Nombre:"
                  name="contactoEmergencia.segundoNombre"
                  keyfilter="alpha"
                />
              </div>
              <div className="col-md-6">
                <CustomTextInput
                  className="p-inputtext-sm"
                  label="Primer Apellido:"
                  name="contactoEmergencia.primerApellido"
                  keyfilter="alpha"
                  rules={{
                    required: 'Este campo es obligatorio',
                  }}
                />
              </div>
              <div className="col-md-6">
                <CustomTextInput
                  className="p-inputtext-sm"
                  label="Segundo Apellido:"
                  name="contactoEmergencia.segundoApellido"
                  keyfilter="alpha"
                />
              </div>
              <div className="col-md-6">
                <CustomTextInput
                  className="p-inputtext-sm"
                  label="Telefóno:"
                  name="contactoEmergencia.telefono"
                  keyfilter="num"
                />
              </div>
              <div className="col-md-6">
                <CustomTextInput
                  className="p-inputtext-sm"
                  label="Celular:"
                  name="contactoEmergencia.celular"
                  keyfilter="num"
                />
              </div>
            </Form.Row>

            <div className="form-row">
              <div className="col-md-6">
                <CustomTextInput
                  className="p-inputtext-sm"
                  label="Historia Clinica"
                  name="historiaClinica"
                  keyfilter="alpha"
                />
              </div>
              <div className="col-12">
                <CustomTextArea
                  className="p-inputtext-sm"
                  label="Trastornos asociados"
                  name="trastornosAsociados"
                />
              </div>

              <div className="col-md-6">
                <CustomTextInput
                  className="p-inputtext-sm"
                  label="Bono"
                  name="bono"
                  keyfilter="alpha"
                />
              </div>

              <div className="col-md-6">
                <CustomTextInput
                  className="p-inputtext-sm"
                  label="Tipo de Bono"
                  name="tipoBono"
                  keyfilter="alpha"
                />
              </div>

              <div className="col-md-6">
                <CustomTextInput
                  className="p-inputtext-sm"
                  label="Afiliacion al IESS"
                  name="afiliacionIess"
                  keyfilter="alpha"
                />
              </div>

              <div className="col-md-6">
                <CustomTextInput
                  className="p-inputtext-sm"
                  label="Quintil pobreza"
                  name="quintilPobreza"
                  keyfilter="alpha"
                />
              </div>
            </div>

            <FooterButtonsForm hrefBack="/personas/alumnos" />
          </form>
        </div>
      </div>
    </main>
  );
};

export default AlumnoFormContainer;
