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
  return (
    <main className="container-fluid">
      <BreadCrumbTitle title={title} items={items} />
      <FormProvider {...methods}>
        <div className="row justify-content-center">
          <div className="col-md-10 jumbotron rounded">
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
        </div>
      </FormProvider>
    </main>
  );
};

export default MatriculaFormContainer;
