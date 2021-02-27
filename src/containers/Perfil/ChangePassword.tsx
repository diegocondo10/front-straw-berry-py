// import { Usuario } from '@services/auth.service';
import { useMutation } from '@apollo/client';
import CustomPasswordInput from '@components/forms/CustomPasswordInput';
import { changePassword } from '@graphql/Auth/mutations.gql';
import useCustomToast from '@hooks/useCustomToast';
import { useRouter } from 'next/router';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import BreadCrumbTitle from 'src/components/BreadCrumbs/titleBreadCrumb';
import FooterButtonsForm from 'src/components/Buttons/FooterButtonsForm';
import DetailItem from 'src/components/DetailItem';
import useUsuario from 'src/_redux/hooks/useUsuario';

const ChangePasswordContainer = () => {
  const methods = useForm({ mode: 'onChange' });
  const { usuario, token, setToken } = useUsuario();
  const { addWarningToast, addInfoToast } = useCustomToast();
  const [change, { loading }] = useMutation(changePassword);

  const router = useRouter();

  const onSubmit = async (input) => {
    input.token = token;
    const { data } = await change({ variables: input });

    if (data?.changePassowrd?.success) {
      setToken(data?.changePassowrd?.token);
      addInfoToast('Se ha cambiado la contraseña de forma correcta');
      router.push('/perfil');
    } else {
      try {
        const error = data?.changePassowrd.errors?.newPassword2?.[0];
        methods.setError('newPassword1', { type: 'custom', message: error.message });
        methods.setError('newPassword2', { type: 'custom', message: error.message });
      } catch (error) {}
      try {
        const oldPasswordError = data?.changePassowrd.errors?.oldPassword?.[0];
        methods.setError('oldPassword', {
          type: 'custom',
          message: oldPasswordError.message,
        });
      } catch (error) {}

      addWarningToast('Ha ocurrido un problema con el cambio de contraseña');
    }
  };

  const validacionPassword = () => {
    const pass1 = methods.watch('newPassword1');
    const pass2 = methods.watch('newPassword2');
    if (pass1 !== pass2) {
      return 'Las dos contraseñas deben coincidir';
    }

    methods.clearErrors(['newPassword1', 'newPassword2']);
    return true;
  };

  return (
    <main className="container-fluid mb-5">
      <BreadCrumbTitle
        title="Cambio de Contraseña"
        items={[
          {
            title: 'Perfil',
            href: '/perfil',
          },
          {
            title: 'Cambiar contraseña',
            active: true,
          },
        ]}
      />

      <div className="row justify-content-center">
        <div className="col-md-8">
          <ul className="w-100">
            <DetailItem label="Usuario:" value={usuario?.username} />
          </ul>

          <h4 className="text-underline">Cambio de Contraseña</h4>

          <div className="col-12 row justify-content-center">
            <FormProvider {...methods}>
              <form
                autoComplete="off"
                className="col-11"
                onSubmit={methods.handleSubmit(onSubmit)}
              >
                <CustomPasswordInput
                  label="Contraseña Antigua"
                  name="oldPassword"
                  rules={{
                    required: 'Este campo es obligatorio',
                  }}
                  autoComplete="new-password"
                  toggleMask
                  disabled={loading}
                />
                <CustomPasswordInput
                  label="Contraseña Nueva"
                  name="newPassword1"
                  rules={{
                    required: 'Este campo es obligatorio',
                    validate: validacionPassword,
                  }}
                  autoComplete="new-password"
                  toggleMask
                  disabled={loading}
                />
                <CustomPasswordInput
                  label="Repetir Contraseña Nueva"
                  name="newPassword2"
                  rules={{
                    required: 'Este campo es obligatorio',
                    validate: validacionPassword,
                  }}
                  toggleMask
                  disabled={loading}
                />
                <FooterButtonsForm hrefBack="/perfil" loading={loading} />
              </form>
            </FormProvider>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ChangePasswordContainer;
