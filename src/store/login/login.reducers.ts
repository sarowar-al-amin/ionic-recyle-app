import { Action, createReducer, on } from '@ngrx/store';
import { AppInitialState } from '../AppInitialState';
import { LoadingState } from '../loading/LoadingState';
import { recoverPassowrd, recoverPassowrdFail, recoverPassowrdSuccess } from './login.actions';
import { LoginState } from './LoginState';

const initialState: LoginState = AppInitialState.login;

const reducer = createReducer(initialState,

  on(recoverPassowrd, currentState=>({
      ...initialState,
      error: null,
      isRecoveredPassword: false,
      isRecoveringPassword: true
  })),

  on(recoverPassowrdSuccess, currentState => ({
    ...currentState,
    error: null,
    isRecoveredPassword: true,
    isRecoveringPassword: false
  })),

  on(recoverPassowrdFail, (currentState, action) => ({
    ...currentState,
    error: action.error,
    isRecoveredPassword: false,
    isRecoveringPassword: false
  }))
);


// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function loginReducer(state: LoginState, action){
  return reducer(state, action);
};
