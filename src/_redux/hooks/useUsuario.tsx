import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUsuarioAction } from 'src/_redux/actions/usuarios.actions';

const useUsuario = () => {
  const state = useSelector((state: any) => state.UsuarioState);

  const dispatch = useDispatch();

  const setUsuario = (usuario) => {
    dispatch(setUsuarioAction(usuario));
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
  };
};
export default useUsuario;
