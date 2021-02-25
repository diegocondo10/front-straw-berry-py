import { useMutation, useQuery } from '@apollo/client';
import UsuarioFormContainer from 'src/components/pages/auth/usuarios/form';
import PrivateLayout from 'src/layouts/privateLayout';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import AuthQueries from '@graphql/Auth/queries.gql';
import AuthMutations from '@graphql/Auth/mutations.gql';
import { NextPage } from 'next';

const UpdateUsuarioContainer = ({ id }) => {
  const methods = useForm({ mode: 'onChange' });
  const router = useRouter();
  const [value, setValue] = useState(null);
  const { data, loading } = useQuery(AuthQueries.getUsuarioById, {
    variables: { id },
    onCompleted: ({ usuario }) => {
      console.log(usuario);
      setValue(usuario);
      methods.reset({ ...usuario });
    },
  });

  const [update] = useMutation(AuthMutations.updateUsuario);

  useEffect(() => {
    methods.reset(data?.usuario);
    console.log(data);
    if (value === null) {
      setValue(data);
    }
  }, [data, loading, value]);

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
    <FormProvider {...methods}>
      <PrivateLayout title="Editar Usuario" loading={loading}>
        <UsuarioFormContainer
          title={'Editar'}
          items={[
            {
              title: 'Usuarios',
              href: '/auth/usuarios',
            },
            {
              title: data?.usuario?.username,
              active: true,
            },
          ]}
          onSubmit={onSubmit}
          permisosDisponibles={data?.usuario?.permisosDisponibles || []}
          rolesDisponibles={data?.usuario?.gruposDisponibles}
          personasDisponibles={data?.personas}
        />
      </PrivateLayout>
    </FormProvider>
  );
};

UpdateUsuarioContainer.getInitialProps = ({ query }) => query;

export default UpdateUsuarioContainer;
