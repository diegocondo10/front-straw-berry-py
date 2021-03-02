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
              label="Grupos:"
              name="grupos"
              sourceHeader="Grupos Disponibles"
              targetHeader="Grupos asignados"
              source={rolesDisponibles}
              itemTemplate={(rol) => rol.nombre}
            />

            <CustomPickList
              label="Permisos:"
              name="permisos"
              sourceHeader="Permisos Disponibles"
              targetHeader="Permisos asignados"
              source={permisosDisponibles}
              itemTemplate={(permiso) => (
                <p style={{ width: '100px', wordWrap: 'normal', margin: '0 0 0 0' }}>
                  {permiso.nombre}
                </p>
              )}
            />

            <FooterButtonsForm hrefBack="/auth/usuarios" />
          </form>
        </div>
      </div>
    </main>
  );
};

export default UsuarioFormContainer;
