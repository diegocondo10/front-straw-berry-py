import TitleBreadCrumb from '@components/BreadCrumbs/titleBreadCrumb';
import { BtnRegresar } from '@components/Buttons';
import CustomTextArea from '@components/forms/CustomTextArea';
import CustomTextInput from '@components/forms/CustomTextInput';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useFormContext } from 'react-hook-form';

const DiscapacidadFormContainer = ({ onSubmit, items, title, loadBtn }) => {
  const { register, handleSubmit, errors } = useFormContext();

  return (
    <main className="container-fluid">
      <TitleBreadCrumb title={title} items={items} />
      <div className="row justify-content-center mt-5">
        <div className="col-11 col-md-8 col-lg-6 jumbotron">
          <form onSubmit={handleSubmit(onSubmit)}>
            <CustomTextInput
              label="Nombre: "
              name="nombre"
              rules={{ required: 'Obligatorio' }}
            />

            <CustomTextArea label="Descripcion: " name="descripcion" />

            <Form.Row className="justify-content-around">
              <div className="col-md-5 my-1">
                <BtnRegresar
                  variant="outline-danger"
                  href="/personas/discapacidades"
                />
              </div>
              <div className="col-md-5 my-1">
                <Button
                  block
                  type="submit"
                  variant="outline-primary"
                  disabled={loadBtn || false}
                >
                  {loadBtn && 'Procesando...'}
                  {!loadBtn && 'Guardar'}
                </Button>
              </div>
            </Form.Row>
          </form>
        </div>
      </div>
    </main>
  );
};

export default DiscapacidadFormContainer;
