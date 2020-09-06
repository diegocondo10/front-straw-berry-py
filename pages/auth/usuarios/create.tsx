import { useQuery, useMutation } from '@apollo/client';
import UsuarioFormContainer from '@components/pages/auth/usuarios/form';
import PrivateLayout from '@layouts/privateLayout';
import { Usuario } from '@services/auth.service';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

const CreateUsuarioContainer = ({ items, title }) => {
  const methods = useForm({ mode: 'onChange' });
  const router = useRouter();

  const { data, loading } = useQuery(Usuario.getParametrosForm);

  const [create] = useMutation(Usuario.create);

  const onSubmit = async (input) => {
    console.log(input);
    if (input.persona) {
      input.persona = input?.persona?.id;
    }

    input.permisos = input.permisos.map((e) => e.id);
    input.grupos = input.grupos.map((e) => e.id);
    await create({ variables: { input } });
    router.push('/auth/usuarios');
  };

  return (
    <PrivateLayout title="IPCA | Usuarios" loading={loading}>
      <FormProvider {...methods}>
        <UsuarioFormContainer
          title={title}
          items={items}
          permisosDisponibles={data?.permisos}
          rolesDisponibles={data?.grupos}
          personasDisponibles={data?.personas}
          onSubmit={onSubmit}
        />
      </FormProvider>
    </PrivateLayout>
  );
};

CreateUsuarioContainer.getInitialProps = () => {
  return {
    items: [
      { title: 'Usuarios', href: '/auth/usuarios' },
      {
        title: 'Agregar Usuario',
        active: true,
      },
    ],
    title: 'Agregar Usuario',
  };
};

export default CreateUsuarioContainer;
