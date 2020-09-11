import BreadCrumbTitle from '@components/BreadCrumbs/titleBreadCrumb';
import { BtnRegresar } from '@components/Buttons';
import CustomDropdown from '@components/forms/CustomDropdown';
import CustomTextInput from '@components/forms/CustomTextInput';
import React from 'react';
import { Form } from 'react-bootstrap';
import { useFormContext } from 'react-hook-form';
import { Button } from 'primereact/button';
import CustomTextArea from '@components/forms/CustomTextArea';

const DocenteFormContainer = ({ title, items, onSubmit, personas = [] }) => {
  const { handleSubmit } = useFormContext();

  return (
    <main className="container-fluid">
      <BreadCrumbTitle title={title} items={items} />
      <div className="row justify-content-center">
        <div className="col-md-10 jumbotron rounded">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Form.Row>
              <div className="col-md-12">
                <CustomDropdown
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

              <div className="col-md-6">
                <CustomTextInput
                  label="Título:"
                  name="titulo"
                  rules={{
                    required: 'Este campo es obligatorio',
                  }}
                />
              </div>

              <div className="col-md-6">
                <CustomTextInput
                  label="Tipo de Titulo:"
                  name="tipoTitulo"
                  rules={{
                    required: 'Este campo es obligatorio',
                  }}
                />
              </div>

              <div className="col-md-12">
                <CustomTextArea name="observaciones" label="Observaciones" />
              </div>
            </Form.Row>

            <Form.Row className="justify-content-between">
              <div className="col-md-5 mt-3 my-1">
                <BtnRegresar href="/personas/docentes" variant="outline-danger" />
              </div>
              <div className="col-md-5 mt-3 my-1">
                <Button label="Guardar" className="btn-block" type="submit" />
              </div>
            </Form.Row>
          </form>
        </div>
      </div>
    </main>
  );
};

export default DocenteFormContainer;
