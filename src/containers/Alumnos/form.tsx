import BreadCrumbTitle from 'src/components/BreadCrumbs/titleBreadCrumb';
import FooterButtonsForm from 'src/components/Buttons/FooterButtonsForm';
import CustomDropDown from 'src/components/forms/CustomDropDown';
import CustomTextArea from 'src/components/forms/CustomTextArea';
import CustomTextInput from 'src/components/forms/CustomTextInput';
import { getId } from 'src/utils/funciones';
import React from 'react';
import { Form } from 'react-bootstrap';
import { useFormContext } from 'react-hook-form';

// const defaultValue = {
//   persona: '1',
//   padre: {
//     identificacion: faker.random.alphaNumeric(10),
//     primerNombre: faker.name.firstName(),
//     segundoNombre: faker.name.firstName(),
//     primerApellido: faker.name.lastName(),
//     segundoApellido: faker.name.lastName(),
//     ocupacion: faker.random.words(),
//     direccion: faker.address.streetAddress(),
//     telefono: faker.phone.phoneNumber(),
//     celular: faker.phone.phoneNumber(),
//   },
//   madre: {
//     identificacion: faker.random.alphaNumeric(10),
//     primerNombre: faker.name.firstName(),
//     segundoNombre: faker.name.firstName(),
//     primerApellido: faker.name.lastName(),
//     segundoApellido: faker.name.lastName(),
//     ocupacion: faker.random.words(),
//     direccion: faker.address.streetAddress(),
//     telefono: faker.phone.phoneNumber(),
//     celular: faker.phone.phoneNumber(),
//   },
//   contactoEmergencia: {
//     identificacion: faker.random.alphaNumeric(10),
//     primerNombre: faker.name.firstName(),
//     segundoNombre: faker.name.firstName(),
//     primerApellido: faker.name.lastName(),
//     segundoApellido: faker.name.lastName(),
//     telefono: faker.phone.phoneNumber(),
//     celular: faker.phone.phoneNumber(),
//   },
// };

const AlumnoFormContainer = ({
  title,
  items,
  onSubmit,
  personas = [],
  action = 'add',
}) => {
  const { handleSubmit } = useFormContext();

  // useEffect(() => {
  //   reset({ ...defaultValue });
  // }, []);

  const mapOnSubmit = async (input) => {
    input.contactoEmergencia = JSON.stringify(input.contactoEmergencia);
    input.representante = JSON.stringify(input.representante);
    await onSubmit(input);
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
                  disabled={action === 'upt'}
                  rules={{
                    setValueAs: (value) => (value ? getId(value) : value),
                    required: 'Este campo es obligatorio',
                  }}
                />
              </div>

              <h4 className="text-underline col-12">Información del Padre</h4>
              <div className="col-md-12">
                <CustomTextInput
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
                  label="Segundo Nombre:"
                  name="padre.segundoNombre"
                  keyfilter="alpha"
                />
              </div>
              <div className="col-md-6">
                <CustomTextInput
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
                  label="Segundo Apellido:"
                  name="padre.segundoApellido"
                  keyfilter="alpha"
                />
              </div>
              <div className="col-md-12">
                <CustomTextInput
                  label="Ocupación:"
                  name="padre.ocupacion"
                  rules={{
                    required: 'Este campo es obligatorio',
                  }}
                />
              </div>
              <div className="col-md-12">
                <CustomTextInput
                  label="Dirección:"
                  name="padre.direccion"
                  rules={{
                    required: 'Este campo es obligatorio',
                  }}
                />
              </div>
              <div className="col-md-6">
                <CustomTextInput
                  label="Telefóno:"
                  name="padre.telefono"
                  keyfilter="num"
                />
              </div>
              <div className="col-md-6">
                <CustomTextInput
                  label="Celular:"
                  name="padre.celular"
                  keyfilter="num"
                />
              </div>

              <h4 className="text-underline">Información de la Madre</h4>
              <div className="col-md-12">
                <CustomTextInput
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
                  label="Segundo Nombre:"
                  name="madre.segundoNombre"
                  keyfilter="alpha"
                />
              </div>
              <div className="col-md-6">
                <CustomTextInput
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
                  label="Segundo Apellido:"
                  name="madre.segundoApellido"
                  keyfilter="alpha"
                />
              </div>
              <div className="col-md-12">
                <CustomTextInput
                  label="Ocupación:"
                  name="madre.ocupacion"
                  rules={{
                    required: 'Este campo es obligatorio',
                  }}
                />
              </div>
              <div className="col-md-12">
                <CustomTextInput
                  label="Dirección:"
                  name="madre.direccion"
                  rules={{
                    required: 'Este campo es obligatorio',
                  }}
                />
              </div>
              <div className="col-md-6">
                <CustomTextInput
                  label="Telefóno:"
                  name="madre.telefono"
                  keyfilter="num"
                />
              </div>
              <div className="col-md-6">
                <CustomTextInput
                  label="Celular:"
                  name="madre.celular"
                  keyfilter="num"
                />
              </div>

              <h4 className="text-underline">En caso de emergencia comunicar a:</h4>
              <div className="col-md-12">
                <CustomTextInput
                  label="Nombre del contacto de emergencia"
                  name="contactoEmergencia.nombres"
                  // keyfilter="alphanum"
                  rules={{
                    required: 'Este campo es obligatorio',
                  }}
                />
              </div>
              <div className="col-md-6">
                <CustomTextInput
                  label="Contacto (Telefono ó Celular)"
                  name="contactoEmergencia.contacto"
                  keyfilter="num"
                />
              </div>

              <div className="col-md-12">
                <CustomTextInput
                  label="Nombre del representante"
                  name="representante.nombres"
                />
              </div>
              <div className="col-md-12">
                <CustomTextInput
                  label="Parentesco del representante"
                  name="representante.parentesco"
                />
              </div>
            </Form.Row>

            <div className="form-row">
              <div className="col-md-6">
                <CustomTextInput label="Historia Clínica" name="historiaClinica" />
              </div>
              <div className="col-12">
                <CustomTextArea
                  label="Trastornos asociados"
                  name="trastornosAsociados"
                />
              </div>

              <div className="col-md-6">
                <CustomTextInput label="Bono" name="bono" />
              </div>

              <div className="col-md-6">
                <CustomTextInput label="Tipo de Bono" name="tipoBono" />
              </div>

              <div className="col-md-6">
                <CustomTextInput label="Afiliación al IESS" name="afiliacionIess" />
              </div>

              <div className="col-md-6">
                <CustomTextInput label="Quintil pobreza" name="quintilPobreza" />
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
