import BreadCrumbTitle from 'src/components/BreadCrumbs/titleBreadCrumb';
import { BtnRegresar } from 'src/components/Buttons';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useFormContext } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import CustomPickList from 'src/components/forms/CustomPickList';
import CustomTextInput from 'src/components/forms/CustomTextInput';
import FooterButtonsForm from '@components/Buttons/FooterButtonsForm';

const RolFormContainer = ({
  title,
  items,
  loading,
  onSubmit,
  permisosDisponibles = [],
}) => {
  const { register, handleSubmit, errors } = useFormContext();

  return (
    <main className="container-fluid">
      <BreadCrumbTitle title={title} items={items} />

      <div className="row justify-content-center">
        <div className="col-md-8 jumbotron rounded">
          <form onSubmit={handleSubmit(onSubmit)}>
            <CustomTextInput
              label="Nombre: "
              name="nombre"
              rules={{ required: 'Obligatorio' }}
            />

            <CustomPickList
              label="Permisos:"
              name="permisos"
              sourceHeader="Permisos Disponibles"
              targetHeader="Permisos de este Rol"
              source={permisosDisponibles}
              itemTemplate={(permiso) => (
                <p style={{ width: '100px', wordWrap: 'normal', margin: '0 0 0 0' }}>
                  {permiso.nombre}
                </p>
              )}
              rules={{
                validate: (value) => {
                  if (value.length === 0) {
                    return 'Debe seleccionar al menos un permiso';
                  }
                  return true;
                },
              }}
            />

            <Form.Group>
              <Form.Label>Descripción:</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="descripcion"
                isInvalid={!!errors.descripcion}
                ref={register}
              />
            </Form.Group>

            <Form.Row className=" justify-content-center">
              <div className="col-md-10 mt-3 my-1">
                <FooterButtonsForm hrefBack="/auth/roles" />
              </div>
            </Form.Row>
          </form>
        </div>
      </div>
    </main>
  );
};

export default RolFormContainer;
