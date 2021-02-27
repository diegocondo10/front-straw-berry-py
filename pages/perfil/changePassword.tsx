// import { Usuario } from '@services/auth.service';
import React from 'react';
import PrivateLayout from 'src/layouts/privateLayout';
import ChangePasswordContainer from '@containers/Perfil/ChangePassword';
const ChangePasswordPage = ({ items, id }) => {
  return (
    <PrivateLayout title="Cambio de Contraseña">
      <ChangePasswordContainer />
    </PrivateLayout>
  );
};

export default ChangePasswordPage;
