import BreadCrumbTitle from '@components/BreadCrumbs/titleBreadCrumb';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Form } from 'react-bootstrap';
import CustomTextInput from '@components/forms/CustomTextInput';
import CustomInputNumber from '@components/forms/CustomInputNumber';
import CustomTextArea from '@components/forms/CustomTextArea';
import FooterButtonsForm from '@components/Buttons/FooterButtonsForm';
import CustomDropDown from '@components/forms/CustomDropDown';
import { getId } from '@utils/funciones';

const MatriculaFormContainer = ({
  title,
  items,
  onSubmit,
  aulas = [],
  alumnos = [],
  defaultData,
}: {
  title: string;
  items: any[];
  aulas: any[];
  alumnos: any[];
  onSubmit: CallableFunction;
  defaultData?: any;
}) => {
  const methods = useForm({
    mode: 'onChange',
    defaultValues: defaultData,
  });

  const localOnSubmit = async (input) => {
    input.aula = getId(input.aula);
    input.alumno = getId(input.alumno);
    await onSubmit(input);
  };

  const { handleSubmit, watch } = methods;
  console.log(alumnos);

  const matricula = {
    cedula: '11111111111',
    apellidos: 'RODRIGUEZ GUZMAN',
    nombres: 'MARCOS DAVID'
  };

  return (
    <main className="container-fluid">
      <BreadCrumbTitle title={title} items={items} />
      <FormProvider {...methods}>
        <div className="row justify-content-center">
          <div className="col-md-6 jumbotron rounded">
            <form onSubmit={handleSubmit(localOnSubmit)}>
              <Form.Row>
                <div className="col-md-12">
                  <CustomDropDown
                    label="Seleccione Alumno:"
                    name="alumno"
                    optionLabel="persona.str"
                    filter
                    options={alumnos}
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
                <div className="col-md-12">
                  <CustomTextArea
                    label="Diagnóstico:"
                    name="diagnostico"
                    rules={{
                      required: 'Este campo es obligatorio',
                    }}
                  />
                </div>
                <div className="col-md-6">
                  <CustomTextInput
                    label="Matrícula:"
                    name="matricula"
                    rules={{
                      required: 'Este campo es obligatorio',
                    }}
                  />
                </div>
                <div className="col-md-6">
                  <CustomInputNumber
                    label="Número de Matrícula:"
                    name="numeroMatricula"
                    rules={{
                      required: 'Este campo es obligatorio',
                    }}
                  />
                </div>
                <div className="col-md-12">
                  <CustomInputNumber
                    label="Aporte Voluntario:"
                    name="aporteVoluntario"
                    rules={{
                      required: 'Este campo es obligatorio',
                    }}
                  />
                </div>
                <div className="col-md-12">
                  <CustomTextArea
                    label="Diagnóstico Final:"
                    name="diagnosticoFinal"
                    rules={{
                      required: 'Este campo es obligatorio',
                    }}
                  />
                </div>
              </Form.Row>
              <FooterButtonsForm loading={false} hrefBack="/matriculas" />
            </form>
          </div>

          <div className="col-md-6 jumbotron border border-blue rounded h-100 ">
            <h4 className="text-underline">Datos personales:</h4>
            <h6>CÉDULA: {matricula?.cedula}</h6>
            <h6>APELLIDOS: {matricula?.apellidos}</h6>
            <h6>NOMBRES: {matricula?.nombres}</h6>
            <h6>LUGAR: </h6>
            <h6>FECHA DE NACIMIENTO: </h6>
            <h6>EDAD: </h6>
            <h6>CARNET CONADIS: </h6>
            <h6>DISCAPACIDAD: </h6>
            <h6>CORREO ELECTRÓNICO: </h6>
            <h6>DIRECCIÓN DOMICILIARIA: </h6>
            <h6>PROVINCIA: </h6>
            <h6>CANTÓN: </h6>
            <h6>PARROQUIA: </h6>
            <h6>SECTOR: </h6>
            <h6>TELÉFONO: </h6>
            <h4 className="text-underline">Datos Del Padre:</h4>
            <h6>CÉDULA: </h6>
            <h6>NOMBRES: </h6>
            <h6>APELLIDOS: </h6>
            <h6>OCUPACIÓN: </h6>
            <h6>DIRECCIÓN: </h6>
            <h6>TELÉFONO: </h6>
            <h6>CELULAR: </h6>
            <h4 className="text-underline">Datos De la Madre:</h4>
            <h6>CÉDULA: </h6>
            <h6>NOMBRES: </h6>
            <h6>APELLIDOS: </h6>
            <h6>OCUPACIÓN: </h6>
            <h6>DIRECCIÓN: </h6>
            <h6>TELÉFONO: </h6>
            <h6>CELULAR: </h6>
            <h4 className="text-underline">Datos De Emergencia:</h4>
            <h6>EN CASO DE EMERGENCIA COMUNICAR A: </h6>
            <h6>CÉDULA: </h6>
            <h6>NOMBRES: </h6>
            <h6>APELLIDOS: </h6>
            <h6>TELÉFONO: </h6>
            <h6>CELULAR: </h6>
            <h4 className="text-underline">Datos Del Alumno:</h4>
            <h6>NIVEL AL QUE ASISTE: </h6>
            <h6>PROMOVIDO: </h6>
            <h6>TRATAMIENTO QUE RECIBE: </h6>
            <h6>DIAGNÓSTICO: </h6>
            <h6>MATRÍCULA: </h6>
            <h6>APORTE VOLUNTARIO: </h6>
            <h6>FECHA: </h6>
            <h6>NOMBRE DEL REPRESENTANTE: </h6>
            <h6>FIRMA.......</h6>
            <h6>RELACIÓN....... </h6>
          </div>
        </div>
      </FormProvider>
    </main>
  );
};

export default MatriculaFormContainer;
