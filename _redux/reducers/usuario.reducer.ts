import { handleActions } from 'redux-actions';
import * as actions from '../actions/usuarios.actions';
const initialState = {
  usuario: null,
  isLoading: true,
  permisos: [],
};

const UsuarioState = handleActions<any, any>(
  {
    [actions.setUsuarioAction as any]: (state, { payload: usuario }) => {
      const permisos = [
        ...usuario?.permisos,
        ...usuario?.grupos?.map?.((grupo) => grupo.permisos)?.flat?.(),
      ];

      return {
        ...state,
        usuario,
        permisos,
      };
    },
  },
  initialState,
);
export default UsuarioState;
