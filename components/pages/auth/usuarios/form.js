import TitleBreadCrumb from '@components/BreadCrumb/TitleBreadCrumb';
import { BtnRegresar } from '@components/Buttons';
import CustomPickList from '@components/forms/CustomPickList';
import { ErrorMessage } from '@hookform/error-message';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useFormContext } from 'react-hook-form';

const UsuarioFormContainer = ({
  title,
  items,
  permisosDisponibles = [],
  rolesDisponibles = [],
}) => {
  const { register, onSubmit, handleSubmit, errors } = useFormContext();

  return (
    <main className="container-fluid">
      <TitleBreadCrumb title={title} items={items} />

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
              label="Roles:"
              name="roles"
              sourceHeader="Roles Disponibles"
              targetHeader="Roles de este Usuario"
              source={rolesDisponibles}
              itemTemplate={(rol) => rol.nombre}
              rules={{
                validate: (value) => {
                  if (value.length === 0) {
                    return 'Debe seleccionar al menos un rol para este usuario';
                  }
                  return true;
                },
              }}
            />

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

export default UsuarioFormContainer;
