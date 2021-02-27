import { createAction } from 'redux-actions';

export const setUsuarioAction = createAction('SET_USUARIO_ACTION');
export const setTokenAction = createAction('SET_TOKEN_ACTION');
export const setRefreshTokenAction = createAction('SET_REFRESHTOKEN_ACTION');

export const setStateUsuarioReducerAction = createAction(
  'SET_STATE_USUARIO_REDUCER_ACTION',
);
