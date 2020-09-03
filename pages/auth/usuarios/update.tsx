import React from 'react';
import PrivateLayout from '@layouts/privateLayout';
import { useForm, FormProvider } from 'react-hook-form';
import UsuarioFormContainer from '@components/pages/auth/usuarios/form';
import { useQuery, useMutation } from '@apollo/client';
import { Usuario } from '@services/auth.service';
import { useRouter } from 'next/router';

const UpdateUsuarioContainer = ({ id, title, items }) => {
  const methods = useForm({ mode: 'onChange' });
  const router = useRouter();

  const { data, loading } = useQuery(Usuario.getById, {
    variables: { id },
    onCompleted: ({ usuario }) => {
      console.log(usuario);
      methods.reset(usuario);
    },
  });

  const [update] = useMutation(Usuario.update);

  const onSubmit = async (input) => {
    input.permisos = input.permisos.map((e) => e.id);
    input.grupos = input.grupos.map((e) => e.id);
    await update({ variables: { id, input } });
    router.push('/auth/usuarios');
  };

  return (
    <PrivateLayout title="IPCA | Editar Usuario" loading={loading}>
      <FormProvider {...methods} onSubmit={onSubmit}>
        <UsuarioFormContainer
          title={title}
          items={items}
          permisosDisponibles={data?.usuario?.permisosDisponibles || []}
          rolesDisponibles={data?.usuario?.gruposDisponibles}
        />
      </FormProvider>
    </PrivateLayout>
  );
};

UpdateUsuarioContainer.getInitialProps = ({ query }) => {
  return {
    title: 'Editar Usuario',
    id: query.id,
    items: [
      {
        title: 'Usuarios',
        href: '/auth/usuarios',
      },
      {
        title: query.id,
        active: true,
      },
    ],
  };
};

export default UpdateUsuarioContainer;
