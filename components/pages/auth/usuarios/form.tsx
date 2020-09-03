import TitleBreadCrumb from '@components/BreadCrumbs/titleBreadCrumb';
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
              <Form.Label>Username:</Form.Label>

              <Form.Control
                name="username"
                isInvalid={!!errors.username}
                ref={register({ required: 'Este campo es obligatorio' })}
              />
              <Form.Control.Feedback type="invalid">
                <ErrorMessage errors={errors} name="username">
                  {({ message }) => message}
                </ErrorMessage>
              </Form.Control.Feedback>
            </Form.Group>

            {/*
              <Form.Group>
              <Form.Label>Contraseña:</Form.Label>

              <Form.Control
                name="password"
                isInvalid={!!errors.password}
                ref={register({ required: 'Este campo es obligatorio' })}
              />
              <Form.Control.Feedback type="invalid">
                <ErrorMessage errors={errors} name="password">
                  {({ message }) => message}
                </ErrorMessage>
              </Form.Control.Feedback>
            </Form.Group>
  */}

            <CustomPickList
              label="Roles:"
              name="grupos"
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
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                name="email"
                isInvalid={!!errors.descripcion}
                ref={register}
              />
            </Form.Group>
            <hr className="bg-dark" />

            {/*
            <Form.Row className="my-5">
              <div className="col-md-6">
                <Form.Check
                  name="descripcion"
                  label="Super Usuario"
                  isInvalid={!!errors.descripcion}
                  ref={register}
                />
              </div>
              <div className="col-md-6">
                <Form.Check
                  name="descripcion"
                  label="Super Usuario"
                  isInvalid={!!errors.descripcion}
                  ref={register}
                />
              </div>
            </Form.Row>
*/}

            <Form.Row className=" justify-content-between">
              <div className="col-md-5 mt-3 my-1">
                <BtnRegresar href="/auth/usuarios" variant="outline-danger" />
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
