import { useMutation, useQuery } from '@apollo/client';
import UsuarioFormContainer from '@components/pages/auth/usuarios/form';
import AuthMutations from '@graphql/Auth/mutations.gql';
import AuthQueries from '@graphql/Auth/queries.gql';
import PrivateLayout from '@layouts/privateLayout';
import { useRouter } from 'next/router';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

const CreateUsuarioContainer = ({ items, title }) => {
  const methods = useForm({ mode: 'onChange' });
  const router = useRouter();

  const { data, loading } = useQuery(AuthQueries.getParametrosForm);

  const [create] = useMutation(AuthMutations.createUsuario);

  const onSubmit = async (input) => {
    if (input.persona) {
      input.persona = input?.persona?.id;
    }

    input.permisos = input.permisos.map((e) => e.id);
    input.grupos = input.grupos.map((e) => e.id);
    await create({ variables: { input } });
    router.push('/auth/usuarios');
  };

  return (
    <FormProvider {...methods}>
      <PrivateLayout title="Usuarios" loading={loading}>
        <UsuarioFormContainer
          title={title}
          items={items}
          permisosDisponibles={data?.permisos}
          rolesDisponibles={data?.grupos}
          personasDisponibles={data?.personas}
          onSubmit={onSubmit}
        />
      </PrivateLayout>
    </FormProvider>
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
