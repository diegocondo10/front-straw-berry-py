import { useDispatch, useSelector } from 'react-redux';
import { setUsuarioAction } from 'src/_redux/actions/usuarios.actions';

const useUsuario = () => {
  const state = useSelector((state: any) => state.UsuarioState);

  const dispatch = useDispatch();

  const setUsuario = (usuario) => {
    dispatch(setUsuarioAction(usuario));
  };

  // const hasPerm = (permiso) => (item) => item.nombre === permiso;
  const verificarPermiso = (permiso) => {
    console.log(state);
    return state.permisos.includes((item) => item.nombre === permiso);
  };

  return {
    ...state,
    setUsuario,
    verificarPermiso,
  };
};
export default useUsuario;
