// import { Usuario } from '@services/auth.service';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import BreadCrumbTitle from 'src/components/BreadCrumbs/titleBreadCrumb';
import FooterButtonsForm from 'src/components/Buttons/FooterButtonsForm';
import DetailItem from 'src/components/DetailItem';
import CustomTextInput from 'src/components/forms/CustomTextInput';
import PrivateLayout from 'src/layouts/privateLayout';

const ChangePasswordContainer = ({ items, id }) => {
  const methods = useForm({ mode: 'onChange' });
  const [usuario, setUsuario] = useState<any>({});
  const router = useRouter();

  useEffect(() => {
    // console.log(Usuario.getDataUsuarioLoggedIn());
    // setUsuario(Usuario.getDataUsuarioLoggedIn());
  }, []);

  const loading = false;

  const onSubmit = async (input) => {
    console.log(input);
    //router.push('/perfil');
  };

  const validacionPassword = () => {
    const pass1 = methods.watch('newPassword');
    const pass2 = methods.watch('passwordRepetir');
    if (pass1 !== pass2) {
      return 'Las dos contraseñas deben coincidir';
    }

    methods.clearErrors(['newPassword', 'passwordRepetir']);
    return true;
  };

  return (
    <PrivateLayout loading={loading} title="Cambio de Contraseña">
      <main className="container-fluid mb-5">
        <BreadCrumbTitle title="Cambio de Contraseña" items={items} />
        <div className="row justify-content-center">
          <div className="col-md-8 breadcrumb">
            <h4 className="text-underline">Información de la Cuenta</h4>
            <ul className="w-100">
              <DetailItem label="Usuario:" value={usuario?.username} />
            </ul>
            <h4 className="text-underline">Cambio de Contraseña</h4>

            <div className="col-12 row justify-content-center">
              <FormProvider {...methods}>
                <form className="col-11" onSubmit={methods.handleSubmit(onSubmit)}>
                  <CustomTextInput
                    label="Contraseña Actual"
                    name="actual"
                    rules={{ required: 'Este campo es obligatorio' }}
                  />
                  <CustomTextInput
                    label="Contraseña Nueva"
                    name="newPassword"
                    rules={{
                      required: 'Este campo es obligatorio',
                      validate: validacionPassword,
                    }}
                  />
                  <CustomTextInput
                    label="Repetir Contraseña Nueva"
                    name="passwordRepetir"
                    rules={{
                      required: 'Este campo es obligatorio',
                      validate: validacionPassword,
                    }}
                  />
                  <FooterButtonsForm hrefBack="/perfil" loading={false} />
                </form>
              </FormProvider>
            </div>
          </div>
        </div>
      </main>
    </PrivateLayout>
  );
};

export default ChangePasswordContainer;
