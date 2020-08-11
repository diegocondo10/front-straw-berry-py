import BreadCrumbTitle from '@components/BreadCrumb/titleBreadCrumb';
import { BtnRegresar } from '@components/Buttons';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useFormContext } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import CustomPickList from '@components/forms/CustomPickList';

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
            <Form.Group>
              <Form.Label>Nombre:</Form.Label>

              <Form.Control
                name="nombre"
                isInvalid={!!errors.nombre}
                ref={register({ required: 'Este campo es obligatorio' })}
              />
              <Form.Control.Feedback type="invalid">
                <ErrorMessage errors={errors} name="nombre">
                  {({ message }) => message}
                </ErrorMessage>
              </Form.Control.Feedback>
            </Form.Group>

            <CustomPickList
              label="Permisos:"
              name="permisos"
              sourceHeader="Permisos Disponibles"
              targetHeader="Permisos de este Rol"
              source={permisosDisponibles}
              itemTemplate={(permiso) => permiso.nombre}
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
              <Form.Label>Descripcion:</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="descripcion"
                isInvalid={!!errors.descripcion}
                ref={register}
              />
            </Form.Group>

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

export default RolFormContainer;
