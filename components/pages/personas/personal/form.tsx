import BreadCrumbTitle from '@components/BreadCrumbs/titleBreadCrumb';
import FooterButtonsForm from '@components/Buttons/FooterButtonsForm';
import CustomDropDown from '@components/forms/CustomDropDown';
import CustomMultiSelect from '@components/forms/CustomMultiSelect';
import CustomTextInput from '@components/forms/CustomTextInput';
import React from 'react';
import { Form } from 'react-bootstrap';
import { useFormContext } from 'react-hook-form';

const DocenteFormContainer = ({
  title,
  items,
  onSubmit,
  personas = [],
  funcionesPersonal = [],
}) => {
  const { handleSubmit } = useFormContext();

  const onLocalSubmit = async (input) => {
    input.funciones = input.funciones?.map((item) => item.id);
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
                <CustomMultiSelect
                  label="Funciones que ejerce:"
                  name="funciones"
                  optionLabel="nombre"
                  filter
                  options={funcionesPersonal}
                  rules={{
                    validate: (value: any[] = []) => {
                      if (!value || value?.length === 0)
                        return 'Este campo es obligatorio';

                      return true;
                    },
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

              {/* {funcion?.nombre === 'DOCENTE' && ( */}

              <div className="col-md-12">
                <CustomTextInput
                  label="Título:"
                  name="titulo"
                  rules={{
                    required: 'Este campo es obligatorio',
                  }}
                />
              </div>

              <div className="col-md-12">
                <CustomTextInput
                  label="Tipo de Titulo:"
                  name="tipoTitulo"
                  rules={{
                    required: 'Este campo es obligatorio',
                  }}
                />
              </div>

              <div className="col-md-12">
                <CustomTextInput name="areaDeTrabajo" label="Area de trabajo:" />
              </div>
            </Form.Row>
            {/* )} */}
            <FooterButtonsForm hrefBack="/personas/personal" />
          </form>
        </div>
      </div>
    </main>
  );
};

export default DocenteFormContainer;
