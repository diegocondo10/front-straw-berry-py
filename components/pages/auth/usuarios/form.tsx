import TitleBreadCrumb from '@components/BreadCrumbs/titleBreadCrumb';
import { BtnRegresar } from '@components/Buttons';
import CustomDropDown from '@components/forms/CustomDropDown';
import CustomPickList from '@components/forms/CustomPickList';
import CustomTextInput from '@components/forms/CustomTextInput';
import { setValueId } from '@utils/funciones';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useFormContext } from 'react-hook-form';

const UsuarioFormContainer: React.FC<any> = ({
  title,
  items,
  permisosDisponibles = [],
  rolesDisponibles = [],
  personasDisponibles = [],
  onSubmit,
}) => {
  const { handleSubmit } = useFormContext();

  return (
    <main className="container-fluid">
      <TitleBreadCrumb title={title} items={items} />
      <div className="row justify-content-center">
        <div className="col-md-8 jumbotron rounded">
          <form onSubmit={handleSubmit(onSubmit)}>
            <CustomTextInput
              name="username"
              label="Nombre de usuario:"
              rules={{ required: 'Este campo es obligatorio' }}
            />

            <CustomDropDown
              name="persona"
              label="Persona"
              placeholder="Seleccione una persona"
              optionLabel="str"
              //optionValue="id"
              showClear
              options={personasDisponibles}
              rules={{ setValueAs: setValueId }}
              filter
            />

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
                validate: (value) =>
                  value.length === 0 ? 'Debe seleccionar al menos un permiso' : true,
              }}
            />

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
