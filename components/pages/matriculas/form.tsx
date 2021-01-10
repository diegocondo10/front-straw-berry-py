import BreadCrumbTitle from '@components/BreadCrumbs/titleBreadCrumb';
import FooterButtonsForm from '@components/Buttons/FooterButtonsForm';
import CustomDropDown from '@components/forms/CustomDropDown';
import CustomInputNumber from '@components/forms/CustomInputNumber';
import CustomTextArea from '@components/forms/CustomTextArea';
import { getId } from '@utils/funciones';
import React from 'react';
import { Form } from 'react-bootstrap';
import { useFormContext } from 'react-hook-form';

const MatriculaFormContainer = ({
  title,
  items,
  onSubmit,
  aulas = [],
  alumnos = [],
  action = 'create',
}: {
  title: string;
  items: any[];
  aulas: any[];
  alumnos: any[];
  onSubmit: CallableFunction;
  action?: 'create' | 'update';
}) => {
  const methods = useFormContext();

  const localOnSubmit = async (input) => {
    input.aula = getId(input.aula);
    input.alumno = getId(input.alumno);
    await onSubmit(input);
  };

  const { handleSubmit } = methods;

  const matricula = {
    fecha: '06-01-2020',
    cedula: '11111111111',
    apellidos: 'RODRIGUEZ GUZMAN',
    nombres: 'ALEJANDRO JUAN',
    lugar: 'Cuenca',
    fechaNacimiento: '17/10/2020',
    edad: '20',
    discapacidad: 'Parálisis Cerebral',
    carnet: '12121212121212',
    direccion: 'Av. de las Américas',
    provincia: 'Azuay',
    canton: 'Cuenca',
    parroquia: 'Baños',
    sector: 'Colegio Borja',
    correoElectronico: 'juan@gmail.com',
    telefono: '4258963',
    ocupacion: 'Trabajador/a',
    celular: '0961842587',
    nivelAsiste: 'tercero',
    promovido: 'cuarto',
    tratamiento: 'Con medicamentos',
    diagnostico: 'Con hipertensión',
    matricula: '1',
    aporte: '$10',
    nombreRepresentante: 'María Lucía',
    firma: 'x-x-x-x-x-x',
    relacion: 'x-x-x-x-x-x',
  };

  const DetailItemView = ({ className, label, value }) => {
    return (
      <div className={className}>
        <h6>
          <strong>{label}: </strong>
          {value}
        </h6>
      </div>
    );
  };

  return (
    <main className="container-fluid">
      <BreadCrumbTitle title={title} items={items} />

      <div className="row justify-content-center">
        <div className="col-md-6 jumbotron rounded">
          <form onSubmit={handleSubmit(localOnSubmit)}>
            <Form.Row>
              <div className="col-md-12">
                <CustomDropDown
                  label="Seleccione Alumno:"
                  name="alumno"
                  optionLabel="personaStr"
                  filter
                  options={alumnos}
                  disabled={action !== 'create'}
                  rules={{
                    required: 'Este campo es obligatorio',
                  }}
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
                    required: 'Este campo es obligatorio',
                  }}
                />
              </div>
              <div className="col-md-12">
                <CustomTextArea
                  label="Tratamiento:"
                  name="tratamiento"
                  rules={{
                    required: 'Este campo es obligatorio',
                  }}
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
              {/* <div className="col-lg-6">
                <CustomTextInput
                  label="Matrícula:"
                  name="matricula"
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
                />
              </div>
              {/* <div className="col-md-12">
                <CustomTextArea
                  label="Diagnóstico Final:"
                  name="diagnosticoFinal"
                  rules={{
                    required: 'Este campo es obligatorio',
                  }}
                />
              </div> */}
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
