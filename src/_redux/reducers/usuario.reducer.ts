import { handleActions } from 'redux-actions';
import * as actions from '../actions/usuarios.actions';
const initialState = {
  usuario: null,
  isLoading: true,
  permisos: [],
  token: null,
  refreshToken: null,
};

const mappPermisos = (usuario) => {
  if (!usuario) return [];

  return [
    ...usuario?.permisos,
    ...usuario?.grupos?.map?.((grupo) => grupo.permisos)?.flat?.(),
  ];
};

const UsuarioState = handleActions<any, any>(
  {
    [actions.setUsuarioAction as any]: (state, { payload: usuario }) => {
      const permisos = mappPermisos(usuario);
      return {
        ...state,
        usuario,
        permisos,
      };
    },
    [actions.setTokenAction as any]: (state, { payload }) => {
      return {
        ...state,
        token: payload,
      };
    },
    [actions.setRefreshTokenAction as any]: (state, { payload }) => {
      return {
        ...state,
        refreshToken: payload,
      };
    },
    [actions.setStateUsuarioReducerAction as any]: (state, { payload }) => {
      if (!payload) {
        return { ...initialState };
      }

      const permisos = mappPermisos(payload?.usuario);
      return {
        ...state,
        ...payload,
        permisos,
      };
    },
  },
  initialState,
);
export default UsuarioState;
