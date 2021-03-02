import CustomTextInput from '@components/forms/CustomTextInput';
import React from 'react';
import { Form } from 'react-bootstrap';
import { useFormContext, useWatch } from 'react-hook-form';
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
  isPeriodoCerrado?: boolean;
}) => {
  const methods = useFormContext();

  const PARAMETROS_MATRICULA = {
    tipoFamilia: [
      'Ampliada',
      'Casa de acogida',
      'Extendida',
      'Monoparental',
      'Nuclear',
      'Reconsituida',
      'HomoParental',
      'Padres separados',
    ],
  };

  const { handleSubmit, control } = methods;

  const estadoMatricula = useWatch({
    control,
    name: 'estadoMatricula',
    defaultValue: 'Creada',
  });

  const localOnSubmit = async (input) => {
    if (input.estadoMatricula !== 'A_1' || input.estadoMatricula !== 'Anulada') {
      input.motivoAnulacion = '';
    }
    await onSubmit(input);
  };

  return (
    <main className="container-fluid">
      <BreadCrumbTitle title={title} items={items} />

      <div className="row justify-content-center">
        <div className="col-md-10 col-lg-8 jumbotron rounded">
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
                <CustomDropDown
                  label="Tipo Familia:"
                  name="tipoFamilia"
                  options={PARAMETROS_MATRICULA.tipoFamilia}
                  rules={{ required: 'Este campo es obligatorio' }}
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
                  label="Diagnóstico clínico:"
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

              <div className="col-md-6">
                <CustomTextInput
                  label="AMIE:"
                  name="amie"
                  disabled={isPeriodoCerrado}
                />
              </div>
              <div className="col-md-6">
                <CustomTextInput
                  label="MIES:"
                  name="mies"
                  disabled={isPeriodoCerrado}
                />
              </div>

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
                <React.Fragment>
                  <div className="col-lg-6">
                    <CustomDropDown
                      name="estadoMatricula"
                      label="Estado de la matrícula"
                      rules={{
                        setValueAs: (value) => {
                          switch (value) {
                            case 'Creada':
                              return 'A_0';

                            case 'Anulada':
                              return 'A_1';

                            default:
                              //Finalizada
                              return 'A_2';
                          }
                        },
                      }}
                      options={['Creada', 'Anulada']}
                      disabled={isPeriodoCerrado}
                    />
                  </div>

                  {(estadoMatricula === 'A_1' || estadoMatricula === 'Anulada') && (
                    <div className="col-12">
                      <CustomTextArea
                        label="Motivo de la anulación"
                        name="motivoAnulacion"
                        rules={{ required: 'Este campo es obligatorio' }}
                        disabled={isPeriodoCerrado}
                      />
                    </div>
                  )}

                  <div className="col-md-12">
                    <CustomTextArea
                      label="Diagnóstico Final:"
                      name="diagnosticoFinal"
                      disabled={isPeriodoCerrado}
                    />
                  </div>
                </React.Fragment>
              )}
            </Form.Row>
            <FooterButtonsForm
              loading={false}
              hrefBack="/matriculas"
              disabledSubmit={isPeriodoCerrado}
            />
          </form>
        </div>
      </div>
    </main>
  );
};

export default MatriculaFormContainer;
