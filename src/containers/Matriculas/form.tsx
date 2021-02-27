import React from 'react';
import { Form } from 'react-bootstrap';
import { useFormContext } from 'react-hook-form';
import BreadCrumbTitle from 'src/components/BreadCrumbs/titleBreadCrumb';
import FooterButtonsForm from 'src/components/Buttons/FooterButtonsForm';
import CustomDropDown from 'src/components/forms/CustomDropDown';
import CustomInputNumber from 'src/components/forms/CustomInputNumber';
import CustomTextArea from 'src/components/forms/CustomTextArea';
import { getId } from 'src/utils/funciones';

const MatriculaFormContainer = ({
  title,
  items,
  onSubmit,
  aulas = [],
  alumnos = [],
  action = 'create',
  isPeriodoCerrado = false,
}: {
  title: string;
  items: any[];
  aulas: any[];
  alumnos: any[];
  onSubmit: CallableFunction;
  action?: 'create' | 'update';
  isPeriodoCerrado: boolean;
}) => {
  const methods = useFormContext();

  const localOnSubmit = async (input) => {
    await onSubmit(input);
  };

  const { handleSubmit } = methods;

  return (
    <main className="container-fluid">
      <BreadCrumbTitle title={title} items={items} />

      <div className="row justify-content-center">
        <div className="col-md-6 jumbotron rounded">
          {isPeriodoCerrado && (
            <h5 className="text-danger text-center mb-4">
              No se puede editar una matrícula de un periodo lectivo cerrado.
            </h5>
          )}
          <form onSubmit={handleSubmit(localOnSubmit)}>
            <Form.Row>
              <div className="col-md-12">
                <CustomDropDown
                  label="Seleccione Alumno:"
                  name="alumno"
                  optionLabel="personaStr"
                  filter
                  options={alumnos}
                  rules={{
                    setValueAs: (value) => (value ? getId(value) : value),
                    required: 'Este campo es obligatorio',
                  }}
                  disabled={isPeriodoCerrado}
                />
              </div>
              <div className="col-md-12">
                <CustomDropDown
                  label="Seleccione Aula:"
                  name="aula"
                  optionLabel="nombre"
                  filter
                  options={aulas}
                  rules={{
                    setValueAs: (value) => (value ? getId(value) : value),
                    required: 'Este campo es obligatorio',
                  }}
                  disabled={isPeriodoCerrado}
                />
              </div>
              <div className="col-md-12">
                <CustomTextArea
                  label="Tratamiento:"
                  name="tratamiento"
                  rules={{
                    required: 'Este campo es obligatorio',
                  }}
                  disabled={isPeriodoCerrado}
                />
              </div>
              <div className="col-md-12">
                <CustomTextArea
                  label="Diagnostico clinico:"
                  name="diagnosticoClinico"
                  rules={{
                    required: 'Este campo es obligatorio',
                  }}
                  disabled={isPeriodoCerrado}
                />
              </div>
              {/* <div className="col-md-12">
                <CustomTextArea
                  label="Diagnóstico:"
                  name="diagnostico"
                  rules={{
                    required: 'Este campo es obligatorio',
                  }}
                />
              </div> */}

              <div className="col-lg-6">
                <CustomInputNumber
                  label="Aporte Voluntario:"
                  name="aporteVoluntario"
                  mode="currency"
                  currency="USD"
                  locale="en-US"
                  showButtons
                  buttonLayout="horizontal"
                  step={0.25}
                  min={0}
                  rules={{
                    required: 'Este campo es obligatorio',
                  }}
                  disabled={isPeriodoCerrado}
                />
              </div>

              {action !== 'create' && (
                <div className="col-md-12">
                  <CustomTextArea
                    label="Diagnóstico Final:"
                    name="diagnosticoFinal"
                    rules={{
                      required: 'Este campo es obligatorio',
                    }}
                    disabled={isPeriodoCerrado}
                  />
                </div>
              )}
            </Form.Row>
            <FooterButtonsForm loading={false} hrefBack="/matriculas" />
          </form>
        </div>

        {/* <div className="col-md-6 jumbotron border border-blue rounded h-100 ">
          <div className="p-grid">
            <h4 className="text-underline">Datos personales:</h4>

            <DetailItemView
              className="p-md-12"
              label="CÉDULA"
              value={matricula?.cedula}
            />

            <DetailItemView
              className="p-md-6"
              label="APELLIDOS"
              value={matricula?.apellidos}
            />
            <DetailItemView
              className="p-md-6"
              label="NOMBRES"
              value={matricula?.nombres}
            />
            <DetailItemView
              className="p-md-12"
              label="LUGAR"
              value={matricula?.lugar}
            />
            <DetailItemView
              className="p-md-6"
              label="FECHA DE NACIMIENTO"
              value={matricula?.fechaNacimiento}
            />
            <DetailItemView
              className="p-md-6"
              label="EDAD"
              value={matricula?.edad}
            />
            <DetailItemView
              className="p-md-6"
              label="DISCAPACIDAD"
              value={matricula?.discapacidad}
            />
            <DetailItemView
              className="p-md-6"
              label="CARNET CONADIS"
              value={matricula?.carnet}
            />
            <DetailItemView
              className="p-md-12"
              label="DIRECCIÓN DOMICILIARIA"
              value={matricula?.direccion}
            />
            <DetailItemView
              className="p-md-6"
              label="PROVINCIA"
              value={matricula?.provincia}
            />
            <DetailItemView
              className="p-md-6"
              label="CANTÓN"
              value={matricula?.canton}
            />
            <DetailItemView
              className="p-md-6"
              label="PARROQUIA"
              value={matricula?.parroquia}
            />
            <DetailItemView
              className="p-md-6"
              label="SECTOR"
              value={matricula?.sector}
            />
            <DetailItemView
              className="p-md-6"
              label="CORREO ELECTRÓNICO"
              value={matricula?.correoElectronico}
            />
            <DetailItemView
              className="p-md-6"
              label="TELÉFONO"
              value={matricula?.telefono}
            />

            <h4 className="text-underline">Datos Del Padre:</h4>
            <DetailItemView
              className="p-md-12"
              label="CÉDULA"
              value={matricula?.cedula}
            />
            <DetailItemView
              className="p-md-6"
              label="NOMBRES"
              value={matricula?.nombres}
            />
            <DetailItemView
              className="p-md-6"
              label="APELLIDOS"
              value={matricula?.apellidos}
            />
            <DetailItemView
              className="p-md-12"
              label="OCUPACIÓN"
              value={matricula?.ocupacion}
            />
            <DetailItemView
              className="p-md-12"
              label="DIRECCIÓN"
              value={matricula?.direccion}
            />
            <DetailItemView
              className="p-md-6"
              label="TELÉFONO"
              value={matricula?.telefono}
            />
            <DetailItemView
              className="p-md-6"
              label="CELULAR"
              value={matricula?.celular}
            />

            <h4 className="text-underline">Datos De la Madre:</h4>
            <DetailItemView
              className="p-md-12"
              label="CÉDULA"
              value={matricula?.cedula}
            />
            <DetailItemView
              className="p-md-6"
              label="NOMBRES"
              value={matricula?.nombres}
            />
            <DetailItemView
              className="p-md-6"
              label="APELLIDOS"
              value={matricula?.apellidos}
            />
            <DetailItemView
              className="p-md-12"
              label="OCUPACIÓN"
              value={matricula?.ocupacion}
            />
            <DetailItemView
              className="p-md-12"
              label="DIRECCIÓN"
              value={matricula?.direccion}
            />
            <DetailItemView
              className="p-md-6"
              label="TELÉFONO"
              value={matricula?.telefono}
            />
            <DetailItemView
              className="p-md-6"
              label="CELULAR"
              value={matricula?.celular}
            />

            <h4 className="text-underline">En caso de emergencia comunicar a:</h4>
            <DetailItemView
              className="p-md-12"
              label="CÉDULA"
              value={matricula?.cedula}
            />
            <DetailItemView
              className="p-md-6"
              label="NOMBRES"
              value={matricula?.nombres}
            />
            <DetailItemView
              className="p-md-6"
              label="APELLIDOS"
              value={matricula?.apellidos}
            />
            <DetailItemView
              className="p-md-6"
              label="TELÉFONO"
              value={matricula?.telefono}
            />
            <DetailItemView
              className="p-md-6"
              label="CELULAR"
              value={matricula?.celular}
            />

            <h4 className="text-underline">Datos Del Alumno:</h4>
            <DetailItemView
              className="p-md-12"
              label="NIVEL AL QUE ASISTE"
              value={matricula?.nivelAsiste}
            />
            <DetailItemView
              className="p-md-12"
              label="PROMOVIDO"
              value={matricula?.promovido}
            />
            <DetailItemView
              className="p-md-12"
              label="TRATAMIENTO QUE RECIBE"
              value={matricula?.tratamiento}
            />
            <DetailItemView
              className="p-md-12"
              label="DIAGNÓSTICO"
              value={matricula?.diagnostico}
            />
            <DetailItemView
              className="p-md-6"
              label="MATRÍCULA"
              value={matricula?.matricula}
            />
            <DetailItemView
              className="p-md-6"
              label="APORTE VOLUNTARIO"
              value={matricula?.aporte}
            />
            <DetailItemView
              className="p-md-6"
              label="FECHA"
              value={matricula?.fecha}
            />
            <DetailItemView
              className="p-md-6"
              label="NOMBRE DEL REPRESENTANTE"
              value={matricula?.nombreRepresentante}
            />
            <DetailItemView
              className="p-md-6"
              label="FIRMA"
              value={matricula?.firma}
            />
            <DetailItemView
              className="p-md-6"
              label="RELACIÓN"
              value={matricula?.relacion}
            />
          </div>
        </div>
       */}
      </div>
    </main>
  );
};

export default MatriculaFormContainer;
