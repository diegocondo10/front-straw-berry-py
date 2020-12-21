import BreadCrumbTitle from '@components/BreadCrumbs/titleBreadCrumb';
import FooterButtonsForm from '@components/Buttons/FooterButtonsForm';
import CustomDropDown from '@components/forms/CustomDropDown';
import CustomTextInput from '@components/forms/CustomTextInput';
import React from 'react';
import { Form } from 'react-bootstrap';
import { useFormContext, useWatch } from 'react-hook-form';

const DocenteFormContainer = ({
  title,
  items,
  onSubmit,
  personas = [],
  funcionesPersonal = [],
}) => {
  const { handleSubmit, control } = useFormContext();

  const funcion: any = useWatch({
    control,
    name: 'funcion',
  });

  const onLocalSubmit = async (input) => {
    input.funcion = input.funcion.id;
    input.persona = input.persona.id;
    input.info = JSON.stringify(input.info);
    await onSubmit(input);
  };

  return (
    <main className="container-fluid">
      <BreadCrumbTitle title={title} items={items} />
      <div className="row justify-content-center">
        <div className="col-md-8 col-xl-6 jumbotron rounded">
          <form onSubmit={handleSubmit(onLocalSubmit)}>
            <Form.Row>
              <div className="col-md-12">
                <CustomDropDown
                  label="Funcion que ejerce:"
                  name="funcion"
                  optionLabel="nombre"
                  filter
                  options={funcionesPersonal}
                  rules={{
                    required: 'Este campo es obligatorio',
                  }}
                />
              </div>

              <div className="col-md-12">
                <CustomDropDown
                  label="Persona:"
                  name="persona"
                  optionLabel="str"
                  filter
                  options={personas}
                  rules={{
                    required: 'Este campo es obligatorio',
                  }}
                />
              </div>
            </Form.Row>

            {funcion?.nombre === 'DOCENTE' && (
              <div className="form-row">
                <div className="col-md-6">
                  <CustomTextInput
                    label="Título:"
                    name="info.titulo"
                    rules={{
                      required: 'Este campo es obligatorio',
                    }}
                  />
                </div>

                <div className="col-md-6">
                  <CustomTextInput
                    label="Tipo de Titulo:"
                    name="info.tipoTitulo"
                    rules={{
                      required: 'Este campo es obligatorio',
                    }}
                  />
                </div>

                <div className="col-md-12">
                  <CustomTextInput
                    name="info.areaDeTrabajo"
                    label="Area de trabajo:"
                  />
                </div>
              </div>
            )}
            <FooterButtonsForm hrefBack="/personas/personal" />
          </form>
        </div>
      </div>
    </main>
  );
};

export default DocenteFormContainer;
