import React from 'react';
import CustomDropdown from '@components/forms/CustomDropdown';
import CustomTextInput from '@components/forms/CustomTextInput';
import { Button, Form } from 'react-bootstrap';
import { BtnRegresar } from '@components/Buttons';
import BreadCrumbTitle from '@components/BreadCrumbs/titleBreadCrumb';
import { useFormContext } from 'react-hook-form';
import CustomTextArea from '@components/forms/CustomTextArea';
import { getId } from '@utils/funciones';

const EstudianteFormContainer = ({ title, items, onSubmit, personas = [] }) => {
  const { handleSubmit } = useFormContext();

  const mapOnSubmit = (input) => {
    input.persona = getId(input.persona);
    input.padre = getId(input.padre);
    input.madre = getId(input.madre);
    input.representante = getId(input.representante);
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
                <h4 className="text-underline">Datos del Estudiante</h4>
                <CustomDropdown
                  label="Personas:"
                  name="persona"
                  options={personas}
                  optionLabel="str"
                  filter
                  rules={{ required: 'Este campo es obligatorio' }}
                />
              </div>
              <div className="col-md-12">
                <CustomTextInput
                  className="p-inputtext-sm"
                  label="Correo Electrónico:"
                  name="correo"
                  keyfilter="email"
                  rules={{
                    required: 'Este campo es obligatorio',
                  }}
                />
              </div>
              <div className="col-md-12">
                <CustomTextInput
                  className="p-inputtext-sm"
                  label="Dirección Domiciliaria:"
                  name="direccion"
                  keyfilter="alpha"
                  rules={{
                    required: 'Este campo es obligatorio',
                  }}
                />
              </div>
              <div className="col-md-6">
                <CustomTextInput
                  className="p-inputtext-sm"
                  label="Provincia:"
                  name="provincia"
                  keyfilter="alpha"
                  rules={{
                    required: 'Este campo es obligatorio',
                  }}
                />
              </div>
              <div className="col-md-6">
                <CustomTextInput
                  className="p-inputtext-sm"
                  label="Cantón:"
                  name="canton"
                  keyfilter="alpha"
                  rules={{
                    required: 'Este campo es obligatorio',
                  }}
                />
              </div>
              <div className="col-md-6">
                <CustomTextInput
                  className="p-inputtext-sm"
                  label="Parroquia:"
                  name="parroquia"
                  keyfilter="alpha"
                  rules={{
                    required: 'Este campo es obligatorio',
                  }}
                />
              </div>
              <div className="col-md-6">
                <CustomTextInput
                  className="p-inputtext-sm"
                  label="Sector:"
                  name="sector"
                  keyfilter="alpha"
                  rules={{
                    required: 'Este campo es obligatorio',
                  }}
                />
              </div>
              <div className="col-md-12">
                <CustomTextInput
                  className="p-inputtext-sm"
                  label="Teléfono:"
                  name="telefono"
                  keyfilter="num"
                  rules={{
                    required: 'Este campo es obligatorio',
                  }}
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
                  rules={{
                    required: 'Este campo es obligatorio',
                  }}
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
                  rules={{
                    required: 'Este campo es obligatorio',
                  }}
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
                  rules={{
                    required: 'Este campo es obligatorio',
                  }}
                />
              </div>
              <div className="col-md-6">
                <CustomTextInput
                  className="p-inputtext-sm"
                  label="Celular:"
                  name="padre.celular"
                  keyfilter="num"
                  rules={{
                    required: 'Este campo es obligatorio',
                  }}
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
                  rules={{
                    required: 'Este campo es obligatorio',
                  }}
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
                  rules={{
                    required: 'Este campo es obligatorio',
                  }}
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
                  rules={{
                    required: 'Este campo es obligatorio',
                  }}
                />
              </div>
              <div className="col-md-6">
                <CustomTextInput
                  className="p-inputtext-sm"
                  label="Celular:"
                  name="madre.celular"
                  keyfilter="num"
                  rules={{
                    required: 'Este campo es obligatorio',
                  }}
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
                  rules={{
                    required: 'Este campo es obligatorio',
                  }}
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
                  rules={{
                    required: 'Este campo es obligatorio',
                  }}
                />
              </div>
              <div className="col-md-6">
                <CustomTextInput
                  className="p-inputtext-sm"
                  label="Telefóno:"
                  name="contactoEmergencia.telefono"
                  keyfilter="num"
                  rules={{
                    required: 'Este campo es obligatorio',
                  }}
                />
              </div>
              <div className="col-md-6">
                <CustomTextInput
                  className="p-inputtext-sm"
                  label="Celular:"
                  name="contactoEmergencia.celular"
                  keyfilter="num"
                  rules={{
                    required: 'Este campo es obligatorio',
                  }}
                />
              </div>

              {/*


              <h4 className="text-underline">Información del Estudiante:</h4>
              <div className="col-md-12">
                <CustomTextInput
                  label="Nivel al que asiste:"
                  name="nivelAsiste"
                  rules={{
                    required: 'Este campo es obligatorio',
                  }}
                />
              </div>
              <div className="col-md-12">
                <CustomTextInput
                  label="Promovido:"
                  name="promovido"
                  rules={{
                    required: 'Este campo es obligatorio',
                  }}
                />
              </div>
              <div className="col-md-12">
                <CustomTextInput
                  label="Tratamiento que recibe:"
                  name="tratamiento"
                  rules={{
                    required: 'Este campo es obligatorio',
                  }}
                />
              </div>
              <div className="col-md-12">
                <CustomTextInput
                  label="Diagnóstico:"
                  name="diagnostico"
                  rules={{
                    required: 'Este campo es obligatorio',
                  }}
                />
              </div>
              <div className="col-md-12">
                <CustomTextInput
                  label="Matrícula:"
                  name="matricula"
                  rules={{
                    required: 'Este campo es obligatorio',
                  }}
                />
              </div>
              <div className="col-md-12">
                <CustomTextInput
                  label="Aporte Voluntario:"
                  name="aporteVoluntario"
                  rules={{
                    required: 'Este campo es obligatorio',
                  }}
                />
              </div>
              <div className="col-md-12">
                <CustomTextArea label="Observaciones:" name="observaciones" />
              </div>
            
            

*/}
            </Form.Row>

            <Form.Row className="justify-content-between">
              <div className="col-md-5 mt-3 my-1">
                <BtnRegresar href="/personas/estudiantes" variant="outline-danger" />
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

export default EstudianteFormContainer;

{
  /* <div className="col-md-6">
                <CustomDropdown
                  label="Padre:"
                  name="padre"
                  options={personas}
                  optionLabel="str"
                  filter
                  rules={{ required: 'Este campo es obligatorio' }}
                />
              </div>

              <div className="col-md-6">
                <CustomDropdown
                  label="Madre:"
                  name="madre"
                  options={personas}
                  optionLabel="str"
                  filter
                  rules={{ required: 'Este campo es obligatorio' }}
                />
              </div>

              <div className="col-md-6">
                <CustomDropdown
                  label="Representantes:"
                  name="representante"
                  options={personas}
                  optionLabel="str"
                  filter
                  rules={{ required: 'Este campo es obligatorio' }}
                />
              </div>

              <div className="col-md-6">
                <CustomTextInput
                  label="Relación con el Representante:"
                  name="relacionRepresentante"
                  rules={{
                    required: 'Este campo es obligatorio',
                  }}
                />
              </div> */
}
