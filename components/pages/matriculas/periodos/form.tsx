import TitleBreadCrumb from '@components/BreadCrumbs/titleBreadCrumb';
import FooterButtonsForm from '@components/Buttons/FooterButtonsForm';
import CustomDatePicker from '@components/forms/CustomDatePicker';
import CustomTextArea from '@components/forms/CustomTextArea';
import CustomTextInput from '@components/forms/CustomTextInput';
import React from 'react';
import { Form } from 'react-bootstrap';
import { FormProvider, useForm } from 'react-hook-form';

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
                <div className="col-md-6">
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
                    rules={{ required: 'Este campo es obligatorio' }}
                  />
                </div>
                <div className="col-md-6">
                  <CustomDatePicker
                    label="Fecha de Fin:"
                    name="fechaFin"
                    rules={{
                      required: 'Este campo es obligatorio',
                    }}
                  />
                </div>
                <div className="col-md-6">
                  <CustomTextInput
                    label="Estado:"
                    name="estado"
                    rules={{
                      required: 'Este campo es obligatorio',
                    }}
                  />
                </div>
                <div className="col-md-6">
                  <CustomDatePicker
                    label="Fecha fin de clases:"
                    name="fechaFinClases"
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
