import TitleBreadCrumb from '@components/BreadCrumbs/titleBreadCrumb';
import FooterButtonsForm from '@components/Buttons/FooterButtonsForm';
import CustomDatePicker from '@components/forms/CustomDatePicker';
import CustomTextArea from '@components/forms/CustomTextArea';
import CustomTextInput from '@components/forms/CustomTextInput';
import React from 'react';
import { Form } from 'react-bootstrap';
import { FormProvider, useForm } from 'react-hook-form';
import moment from 'moment';
import { DATE_FORMAT } from '@utils/date';

const PeriodoLectivoFormContainer = ({
  onSubmit,
  items,
  title,
  defaultData = {},
  loading,
}) => {
  const methods = useForm({ mode: 'onChange', defaultValues: defaultData });
  const { handleSubmit } = methods;

  const onLocalSubmit = async (input) => {
    if (input.responsables === '') {
      input.responsables = [];
    }
    await onSubmit(input);
  };

  return (
    <main className="container-fluid">
      <TitleBreadCrumb title={title} items={items} />

      <FormProvider {...methods}>
        <div className="row justify-content-center mt-5">
          <div className="col-md-10 col-lg-8 jumbotron rounded">
            <form onSubmit={handleSubmit(onLocalSubmit)}>
              <Form.Row>
                <div className="col-12">
                  <CustomTextInput
                    label="Nombre:"
                    name="nombre"
                    rules={{
                      required: 'Este campo es obligatorio',
                    }}
                  />
                </div>
                <div className="col-md-6">
                  <CustomDatePicker
                    label="Fecha de Inicio:"
                    name="fechaInicio"
                    minDate={moment().subtract(5, 'years').toDate()}
                    maxDate={moment().add(1, 'years').toDate()}
                    rules={{
                      required: 'Este campo es obligatorio',
                      validate: (value) => {
                        console.log('VALUE: ', value);
                        const fechaFin = methods.getValues('fechaFin');

                        if (!fechaFin) {
                          methods.setError('fechaFin', {
                            type: 'custom',
                            message: 'Seleccione una fecha de fin',
                          });
                          return true;
                        }

                        if (moment(value, DATE_FORMAT)) {
                        }

                        return true;
                      },
                    }}
                  />
                </div>
                <div className="col-md-6">
                  <CustomDatePicker
                    label="Fecha de Fin:"
                    name="fechaFin"
                    minDate={moment().subtract(5, 'years').toDate()}
                    maxDate={moment().add(2, 'years').toDate()}
                    rules={{
                      required: 'Este campo es obligatorio',
                    }}
                  />
                </div>
                {/* <div className="col-md-6">
                  <CustomTextInput
                    label="Estado:"
                    name="estado"
                    rules={{
                      required: 'Este campo es obligatorio',
                    }}
                  />
                </div> */}
                <div className="col-md-6">
                  <CustomDatePicker
                    label="Fecha fin de clases:"
                    name="fechaFinClases"
                    minDate={moment().subtract(5, 'years').toDate()}
                    maxDate={moment().add(2, 'years').toDate()}
                    rules={{
                      required: 'Este campo es obligatorio',
                    }}
                  />
                </div>
                <div className="col-md-12">
                  <CustomTextArea name="observaciones" label="Observaciones" />
                </div>
                {/*
                  <div className="col-md-6">
                  <CustomTextInput label="Responsables:" name="responsables" />
                </div>
  */}
              </Form.Row>

              <FooterButtonsForm hrefBack="/matriculas/periodos" loading={loading} />
            </form>
          </div>
        </div>
      </FormProvider>
    </main>
  );
};

export default PeriodoLectivoFormContainer;
