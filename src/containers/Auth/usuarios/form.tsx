import FooterButtonsForm from '@components/Buttons/FooterButtonsForm';
import React from 'react';
import { useFormContext } from 'react-hook-form';
import TitleBreadCrumb from 'src/components/BreadCrumbs/titleBreadCrumb';
import CustomDropDown from 'src/components/forms/CustomDropDown';
import CustomPickList from 'src/components/forms/CustomPickList';
import CustomTextInput from 'src/components/forms/CustomTextInput';
import { setValueId } from 'src/utils/funciones';

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
        <div className="col-md-10 jumbotron rounded">
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
              itemTemplate={(permiso) => (
                <p
                  style={{ width: '100px', wordWrap: 'normal', margin: '0 0 0 0' }}
                  // className="text-wrap"
                >
                  {permiso.nombre}
                </p>
              )}
              rules={{
                validate: (value) =>
                  value?.length === 0
                    ? 'Debe seleccionar al menos un permiso'
                    : true,
              }}
            />

            <FooterButtonsForm hrefBack="/auth/usuario" />
          </form>
        </div>
      </div>
    </main>
  );
};

export default UsuarioFormContainer;
