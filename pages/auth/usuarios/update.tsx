import { useMutation, useQuery } from '@apollo/client';
import UsuarioFormContainer from '@components/pages/auth/usuarios/form';
import PrivateLayout from '@layouts/privateLayout';
import { Usuario } from '@services/auth.service';
import { useRouter } from 'next/router';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import AuthQueries from '@graphql/Auth/queries.gql';
import AuthMutations from '@graphql/Auth/mutations.gql';

const UpdateUsuarioContainer = ({ id, title, items }) => {
  const methods = useForm({ mode: 'onChange' });
  const router = useRouter();

  const { data, loading } = useQuery(AuthQueries.getUsuarioById, {
    variables: { id },
    onCompleted: ({ usuario }) => {
      methods.reset(usuario);
    },
  });

  const [update] = useMutation(AuthMutations.updateUsuario);

  const onSubmit = async (input) => {
    if (input.persona) {
      input.persona = input?.persona?.id;
    }
    input.permisos = input.permisos.map((e) => e.id);
    input.grupos = input.grupos.map((e) => e.id);
    await update({ variables: { id, input } });
    router.push('/auth/usuarios');
  };

  return (
    <PrivateLayout title="IPCA | Editar Usuario" loading={loading}>
      <FormProvider {...methods}>
        <UsuarioFormContainer
          title={title}
          items={items}
          onSubmit={onSubmit}
          permisosDisponibles={data?.usuario?.permisosDisponibles || []}
          rolesDisponibles={data?.usuario?.gruposDisponibles}
          personasDisponibles={data?.personas}
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
