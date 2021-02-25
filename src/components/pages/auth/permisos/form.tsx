import BreadCrumbTitle from 'src/components/BreadCrumbs/titleBreadCrumb';
import { BtnRegresar } from 'src/components/Buttons';
import CustomTextArea from 'src/components/forms/CustomTextArea';
import CustomTextInput from 'src/components/forms/CustomTextInput';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useFormContext } from 'react-hook-form';

const PermisoFormContainer = ({ title, items, onSubmit }) => {
  const { handleSubmit } = useFormContext();

  return (
    <main className="container-fluid">
      <BreadCrumbTitle title={title} items={items} />

      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6 jumbotron rounded">
          <form onSubmit={handleSubmit(onSubmit)}>
            <CustomTextInput
              label="Nombre: "
              name="nombre"
              rules={{ required: 'Obligatorio' }}
            />

            <CustomTextArea label="Descripcion: " name="descripcion" />

            <Form.Row className=" justify-content-between">
              <div className="col-md-5 mt-3 my-1">
                <BtnRegresar href="/auth/permisos" variant="outline-danger" />
              </div>
              <div className="col-md-5 mt-3 my-1">
                <Button variant="outline-primary" block type="submit">
                  Guardar
                </Button>
              </div>
            </Form.Row>
          </form>
        </div>
      </div>
    </main>
  );
};

export default PermisoFormContainer;
