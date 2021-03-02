import { useMutation } from '@apollo/client';
import Usuario from '@graphql/Auth/mutations.gql';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setRefreshTokenAction,
  setStateUsuarioReducerAction,
  setTokenAction,
  setUsuarioAction,
} from 'src/_redux/actions/usuarios.actions';

const useUsuario = () => {
  const state = useSelector((state: any) => state.UsuarioState);
  // const [verificarCuenta] = useMutation(Usuario.verificarCuenta);
  // const [verificarToken] = useMutation(Usuario.verificarToken);
  const dispatch = useDispatch();

  const setUsuario = (usuario) => {
    dispatch(setUsuarioAction(usuario));
  };

  const setToken = (token) => {
    dispatch(setTokenAction(token));

    localStorage.setItem('SBPToken', token);
  };
  const setRefreshToken = (refreshToken) => {
    dispatch(setRefreshTokenAction(refreshToken));
    localStorage.setItem('SBPToken', refreshToken);
  };

  const setState = (newState) => {
    dispatch(setStateUsuarioReducerAction(newState));

    if (newState === null) {
      localStorage.removeItem('SBPToken');
    }

    if (newState?.token) {
      localStorage.setItem('SBPToken', newState.token);
    }
    if (newState?.refreshToken) {
      localStorage.setItem('SBPRfreshToken', newState.refreshToken);
    }
  };

  const predicate = (permiso) => (item) => item.nombre === permiso;

  const hasPerm = useCallback((permiso) => state.permisos.some(predicate(permiso)), [
    [state],
  ]);

  const verificarPermiso = useCallback(
    async (permiso, callback?: CallableFunction) => {
      const includes = hasPerm(permiso);
      if (includes) callback?.();
      return includes;
    },
    [state],
  );

  const renderIf = (permiso, component) => {
    return hasPerm(permiso) ? component : null;
  };

  const RenderIf: React.FC<{ permiso: string }> = ({ permiso, children }) => {
    return <React.Fragment>{hasPerm(permiso) ? children : null}</React.Fragment>;
  };

  return {
    ...state,
    setUsuario,
    verificarPermiso,
    hasPerm,
    renderIf,
    RenderIf,
    setState,
    setToken,
    setRefreshToken,
  };
};
export default useUsuario;
