import BreadCrumbTitle from '@components/BreadCrumbs/titleBreadCrumb';
import { BtnRegresar } from '@components/Buttons';
import CustomDropDown from '@components/forms/CustomDropDown';
import CustomTextArea from '@components/forms/CustomTextArea';
import CustomTextInput from '@components/forms/CustomTextInput';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useFormContext } from 'react-hook-form';


const PermisoFormContainer = ({
  title,
  items,
  loading,
  onSubmit,
  aplicaciones = [],
}) => {
  const { register, handleSubmit, errors } = useFormContext();

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

            <Form.Group>
              <CustomDropDown
                name="aplicacionId"
                options={aplicaciones}
                label="Aplicacion:"
                rules={{ required: 'Este campo es obligatorio' }}
                //defaultValue={aplicaciones[0].id}
              />
            </Form.Group>

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
