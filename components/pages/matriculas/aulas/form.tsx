import TitleBreadCrumb from '@components/BreadCrumbs/titleBreadCrumb';
import FooterButtonsForm from '@components/Buttons/FooterButtonsForm';
import CustomDropdown from '@components/forms/CustomDropdown';
import CustomInputNumber from '@components/forms/CustomInputNumber';
import CustomMultiSelect from '@components/forms/CustomMultiSelect';
import CustomTextArea from '@components/forms/CustomTextArea';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

const AulasFormContainer = ({
  title,
  loading,
  items,
  onSubmit,
  periodos,
  docentes,
}: {
  title: string;
  items: any[];
  periodos: any[];
  docentes: any[];
  loading: boolean;
  onSubmit: CallableFunction;
}) => {
  const methods = useForm({ mode: 'onChange' });

  const localOnSubmit = async (input) => {
    await onSubmit(input);
  };

  return (
    <FormProvider {...methods}>
      <main className="container-fluid">
        <TitleBreadCrumb title={title} items={items} />

        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-7 jumbotron">
            <form onSubmit={methods.handleSubmit(localOnSubmit)}>
              <CustomDropdown
                label="Seleccione el periodo lectivo:"
                name="periodo"
                optionLabel="nombre"
                filter
                options={periodos}
                rules={{
                  required: 'Este campo es obligatorio',
                }}
              />

              <CustomMultiSelect
                label="Seleccione los docentes de esta aula:"
                name="docentes"
                optionLabel="persona.str"
                filter
                options={docentes}
                rules={{
                  required: 'Este campo es obligatorio',
                  validate: (docentesSeleccionados: any[]) => {
                    if (docentesSeleccionados.length > 2) {
                      return 'Solo puede escoger máximo 2 docentes por aula';
                    }

                    return true;
                  },
                }}
              />
              <div className="form-row">
                <div className="col-6">
                  <CustomInputNumber
                    label="Grado:"
                    name="grado"
                    prefix="grado: "
                    rules={{
                      required: 'Este campo es obligatorio',
                      min: {
                        value: 1,
                        message: 'Es grado minimo es 1',
                      },
                      max: {
                        value: 15,
                        message: 'El grado maximo es de 15',
                      },
                    }}
                  />
                </div>

                <div className="col-6">
                  <CustomInputNumber
                    label="Capacidad:"
                    name="capacidad"
                    suffix=" Alumnos"
                    rules={{
                      required: 'Este campo es obligatorio',
                      min: {
                        value: 2,
                        message: 'La capacidad mínima es de 2 alumnos',
                      },
                      max: {
                        value: 50,
                        message: 'La capacidad máxima es de 50 alumnos',
                      },
                    }}
                  />
                </div>
              </div>

              <CustomTextArea label="Observaciones" name="observaciones" />

              <FooterButtonsForm hrefBack="/matriculas/aulas" loading={loading} />
            </form>
          </div>
        </div>
      </main>
    </FormProvider>
  );
};

export default AulasFormContainer;
